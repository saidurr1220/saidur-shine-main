// api/contact/prepare.js (ESM)
import crypto from "crypto";

const isProd =
  process.env.VERCEL_ENV === "production" ||
  process.env.NODE_ENV === "production";

const allowList = (process.env.PUBLIC_ORIGINS || process.env.PUBLIC_ORIGIN || "")
  .split(/[, ]+/)
  .filter(Boolean);

function isAllowed(origin = "") {
  // ✅ same-origin GET হলে ব্রাউজার Origin পাঠায় না — allow
  if (!origin) return true;
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
  // ✅ শুধুই cross-origin হলে CORS হেডার লাগবে
  if (origin && isAllowed(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
}

export default function handler(req, res) {
  const origin = req.headers.origin || "";
  cors(res, origin);

  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
    return res.status(204).end();
  }
  if (req.method !== "GET") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  // ❗ same-origin (origin == "") হলে allow; অন্যথায় allowlist চেক
  if (origin && !isAllowed(origin)) {
    return res.status(403).json({ ok: false, error: `Origin blocked: ${origin}` });
  }
  if (!process.env.CONTACT_SECRET) {
    return res.status(500).json({ ok: false, error: "CONTACT_SECRET missing" });
  }

  const ts = Date.now().toString();
  const nonce = crypto.randomBytes(16).toString("hex");
  const sig = crypto
    .createHmac("sha256", process.env.CONTACT_SECRET)
    .update(`${ts}.${nonce}`)
    .digest("hex");
  const token = `${ts}.${nonce}.${sig}`;

  res.setHeader(
    "Set-Cookie",
    `contact_csrf=${token}; Path=/; HttpOnly; SameSite=Strict; Secure; Max-Age=600`
  );
  return res.status(200).json({ ok: true, token });
}
