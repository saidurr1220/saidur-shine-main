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

// ✅ helper: ENV truthy check + fallback keys so spelling mismatch হলেও কাজ করবে
const envTrue = (k) => {
  const v = (process.env[k] || "").toLowerCase();
  return v === "1" || v === "true" || v === "yes";
};
const SEND_ACK =
  envTrue("SEND_COPY_TO_SENDER") ||
  envTrue("SEND_ACK_TO_SENDER") ||
  envTrue("SEND_COPY_MAILER") ||
  envTrue("SEND_THANKS_TO_SENDER"); // any of these will enable auto-reply

export default async function handler(req, res) {
  const origin = req.headers.origin || "";
  cors(res, origin);

  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
    return res.status(204).end();
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

  // 1) owner mail (required)
  await transporter.sendMail({
    from: process.env.MAIL_FROM || process.env.SMTP_USER,
    to: process.env.MAIL_TO,
    replyTo: _email,
    subject: `New message from ${_name}`,
    text: `Name: ${_name}\nEmail: ${_email}\n\n${_msg}`,
    html: `<p><b>Name:</b> ${esc(_name)}<br/><b>Email:</b> ${esc(
      _email
    )}</p><p>${esc(_msg).replace(/\n/g, "<br/>")}</p>`,
  });

  // 2) optional: thanks to sender
  let ackSent = false;
  if (SEND_ACK) {
    try {
      await transporter.sendMail({
        from: process.env.MAIL_FROM || process.env.SMTP_USER, // DKIM/DMARC safe
        to: _email,                                          // visitor
        subject: "Thanks! I received your message",
        text: `Hi ${_name},

Thanks for reaching out. I received your message and will reply soon.

— Saidur
Portfolio: https://saidur-it.vercel.app/`,
        html: `<p>Hi ${esc(_name)},</p>
<p>Thanks for reaching out. I received your message and will reply soon.</p>
<p><b>Your message:</b></p>
<blockquote style="margin:0;padding:8px 12px;border-left:3px solid #ccc;background:#f8f8f8;border-radius:6px;">
${esc(_msg).replace(/\n/g, "<br/>")}
</blockquote>
<p style="margin-top:12px;">— Saidur<br/>
<a href="https://saidur-it.vercel.app/">saidur-it.vercel.app</a></p>`,
      });
      ackSent = true;
    } catch (e) {
      console.error("Auto-ack failed:", e);
      // ইচ্ছা করলে এখানে Sentry/LogDrain এ পাঠাতে পারো
    }
  }

  res.setHeader(
    "Set-Cookie",
    `contact_last=${Date.now()}; Path=/; Max-Age=${cooldown}; SameSite=Strict; Secure`
  );
  // dev/debug এ কাজে লাগবে
  return res.status(200).json({ ok: true, sentAck: ackSent });
}
