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
  if (!origin) return true; // ✅ same-origin allow
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
    if (!crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(sig)))
      return false;
    const age = Date.now() - Number(ts);
    return age >= 0 && age <= 10 * 60 * 1000;
  } catch {
    return false;
  }
}

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

  // ❗ Same-origin হলে allow; cross-origin হলে allowlist চেক
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

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO,
      replyTo: _email,
      subject: `New message from ${_name}`,
      text: `Name: ${_name}\nEmail: ${_email}\n\n${_msg}`,
    });
    res.setHeader(
      "Set-Cookie",
      `contact_last=${Date.now()}; Path=/; Max-Age=${cooldown}; SameSite=Strict; Secure`
    );
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false, error: "Email send failed" });
  }
}
