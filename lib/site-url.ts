const fallback = "http://localhost:3000";

const resolved =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : fallback);

export const siteUrl = resolved.replace(/\/+$/, "");
