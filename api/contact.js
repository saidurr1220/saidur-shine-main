// api/contact.js (ESM)
import crypto from "crypto";
import nodemailer from "nodemailer";

const isProd =
  process.env.VERCEL_ENV === "production" ||
  process.env.NODE_ENV === "production";

const allowList = (process.env.PUBLIC_ORIGINS || process.env.PUBLIC_ORIGIN || "")
  .split(/[, ]+/)
  .filter(Boolean);

function isAllowed(origin = "") {
  if (!origin) return true; // same-origin allow
  if (allowList.includes(origin)) return true;
  if (!isProd) {
    if (/^http:\/\/localhost:\d+$/i.test(origin)) return true;
    if (/^http:\/\/192\.168\.\d+\.\d+:\d+$/i.test(origin)) return true;
  }
  return false;
}

function cors(res, origin) {
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (origin && isAllowed(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
}

function textOnly(s, max = 2000) {
  return String(s ?? "").replace(/\r/g, "").slice(0, max);
}
function isEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s || "");
}
function badHeader(s) {
  return /[\r\n]/.test(s || "");
}
function parseCookie(req) {
  return (req.headers.cookie || "").split(";").reduce((acc, p) => {
    const [k, ...v] = p.trim().split("=");
    if (!k) return acc;
    acc[k] = decodeURIComponent(v.join("="));
    return acc;
  }, {});
}
function verifyToken(token) {
  try {
    const [ts, nonce, sig] = String(token).split(".");
    if (!ts || !nonce || !sig || !process.env.CONTACT_SECRET) return false;
    const expected = crypto
      .createHmac("sha256", process.env.CONTACT_SECRET)
      .update(`${ts}.${nonce}`)
      .digest("hex");
    if (!crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(sig))) return false;
    const age = Date.now() - Number(ts);
    return age >= 0 && age <= 10 * 60 * 1000;
  } catch {
    return false;
  }
}
const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// ---------- Branded HTML shell (owner + sender) ----------
const emailShell = (title, bodyHtml) => `<!doctype html>
<html><head>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<title>${title}</title>
<style>
  .wrapper{width:100%;background:#f6f7fb;padding:24px}
  .card{max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:14px;overflow:hidden}
  .header{background:#0f172a;color:#fff;padding:20px 22px}
  .badge{display:inline-block;background:#10b981;border-radius:999px;padding:6px 10px;
    font:600 12px/1 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial}
  .title{margin-top:8px;font:700 18px/1.3 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial}
  .content{padding:22px 22px 8px 22px;color:#111827;font:400 14px/1.6 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial}
  .kvs{margin:0 0 14px 0;padding:0;list-style:none}
  .kvs li{margin:0 0 6px 0}
  .pill{display:inline-block;background:#eef2ff;color:#111827;border:1px solid #e5e7eb;
    border-radius:999px;padding:2px 10px;font:600 12px/20px -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial}
  blockquote{margin:10px 0 14px 0;border-left:4px solid #10b981;background:#f0fdf4;border-radius:6px;padding:12px 14px}
  .btn{display:inline-block;background:#10b981;color:#fff;text-decoration:none;border-radius:10px;
    padding:12px 18px;font:600 14px/1 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial}
  .muted{color:#6b7280;font:400 12px/1.5 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial;margin-top:14px}
  a{color:#0ea5e9}
</style>
</head>
<body style="margin:0;background:#f6f7fb;">
  <div class="wrapper">
    <div class="card">
      <div class="header">
        <span class="badge">SR Portfolio</span>
        <div class="title">${title}</div>
      </div>
      <div class="content">
        ${bodyHtml}
        <p class="muted">
          Sent from the contact form at
          <a href="https://saidur-it.vercel.app">saidur-it.vercel.app</a>
        </p>
      </div>
    </div>
  </div>
</body></html>`;

// ENV truthy helper + a few fallback keys so typo হলেও কাজ করে
const envTrue = (k) => {
  const v = (process.env[k] || "").toLowerCase();
  return v === "1" || v === "true" || v === "yes";
};
const SEND_ACK =
  envTrue("SEND_COPY_TO_SENDER") ||
  envTrue("SEND_ACK_TO_SENDER") ||
  envTrue("SEND_COPY_MAILER") ||
  envTrue("SEND_THANKS_TO_SENDER"); // any of these enables auto-reply

export default async function handler(req, res) {
  const origin = req.headers.origin || "";
  cors(res, origin);

  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    return res.status(204).end();
  }
  if (req.method === "GET") {
    // 405 noise কমাতে—হেলথ চেকের জন্য OK দিন
    return res.status(200).json({ ok: true, hint: "Use POST to send message" });
  }
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  if (origin && !isAllowed(origin)) {
    return res.status(403).json({ ok: false, error: `Origin blocked: ${origin}` });
  }
  if (!process.env.CONTACT_SECRET) {
    return res.status(500).json({ ok: false, error: "CONTACT_SECRET missing" });
  }

  const cookies = parseCookie(req);
  const cooldown = Number(process.env.COOLDOWN_SECONDS || "60");
  const last = Number(cookies["contact_last"] || "0");
  if (last && Date.now() - last < cooldown * 1000) {
    return res.status(429).json({ ok: false, error: "Slow down" });
  }

  const { name, email, message, botField, csrfToken } = req.body || {};
  if (botField) return res.status(200).json({ ok: true });

  const tokenCookie = cookies["contact_csrf"] || "";
  if (!csrfToken || csrfToken !== tokenCookie || !verifyToken(csrfToken)) {
    return res.status(403).json({ ok: false, error: "Invalid CSRF" });
  }

  const _name = textOnly(name, 80).trim();
  const _email = textOnly(email, 120).trim().toLowerCase();
  const _msg = textOnly(message, 2000).trim();
  if (_name.length < 2 || !isEmail(_email) || _msg.length < 10) {
    return res.status(400).json({ ok: false, error: "Invalid input" });
  }
  if (badHeader(_name) || badHeader(_email)) {
    return res.status(400).json({ ok: false, error: "Invalid header chars" });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: String(process.env.SMTP_PORT || "465") === "465",
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  // 1) Owner mail (to you)
  await transporter.sendMail({
    from: process.env.MAIL_FROM || process.env.SMTP_USER,
    to: process.env.MAIL_TO,
    replyTo: _email,
    subject: `New message from ${_name}`,
    text: `Name: ${_name}\nEmail: ${_email}\n\n${_msg}`,
    html: emailShell(
      "You’ve got a new message",
      `
      <ul class="kvs">
        <li><span class="pill">Name</span> &nbsp; ${esc(_name)}</li>
        <li><span class="pill">Email</span> &nbsp; ${esc(_email)}</li>
        <li><span class="pill">Received</span> &nbsp; ${new Date().toLocaleString("en-GB", { hour12: false })}</li>
      </ul>

      <p style="margin:8px 0 4px 0;font-weight:700;">Message</p>
      <blockquote>${esc(_msg).replace(/\n/g,"<br/>")}</blockquote>

      <a class="btn" href="mailto:${encodeURIComponent(_email)}?subject=Re:%20${encodeURIComponent(
        `Your message to Saidur`
      )}">Reply to ${esc(_name)}</a>
      `
    ),
  });

  // 2) Optional: auto "Thanks" to sender
  let sentAck = false;
  if (SEND_ACK) {
    try {
      await transporter.sendMail({
        from: process.env.MAIL_FROM || process.env.SMTP_USER, // DKIM/DMARC safe
        to: _email,
        subject: "Thanks! I received your message",
        text: `Hi ${_name},

Thanks for reaching out. I received your message and will reply soon.

— Saidur
Portfolio: https://saidur-it.vercel.app/`,
        html: emailShell(
          `Thanks, ${esc(_name)} — I received your message ✅`,
          `
          <p>Hi ${esc(_name)},</p>
          <p>Thanks for contacting me! I’ve received your message and will get back to you shortly.</p>

          <p style="margin:8px 0 4px 0;font-weight:700;">Your message</p>
          <blockquote>${esc(_msg).replace(/\n/g,"<br/>")}</blockquote>

          <a class="btn" href="mailto:${encodeURIComponent(process.env.MAIL_TO || process.env.SMTP_USER)}?subject=${encodeURIComponent(
            "Follow-up on my message"
          )}">Reply now</a>
          `
        ),
      });
      sentAck = true;
    } catch (e) {
      console.error("Auto-ack failed:", e);
    }
  }

  res.setHeader(
    "Set-Cookie",
    `contact_last=${Date.now()}; Path=/; Max-Age=${cooldown}; SameSite=Strict; Secure`
  );
  return res.status(200).json({ ok: true, sentAck, version: "v-ack-1" });
}
// EOF