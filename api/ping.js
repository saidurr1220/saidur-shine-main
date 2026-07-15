export default function handler(req, res) {
  const origin = req.headers.origin || "";
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Origin", origin || "*");

  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
    return res.status(204).end();
  }

  return res.status(200).json({
    ok: true,
    hasSecret: Boolean(process.env.CONTACT_SECRET),
    origins: process.env.PUBLIC_ORIGINS || process.env.PUBLIC_ORIGIN || "",
    node: process.version
  });
}
