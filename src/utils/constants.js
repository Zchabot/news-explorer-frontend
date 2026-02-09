// NOTE: Third-party API keys should live in env vars for real production apps.
// Kept inline here because this is a portfolio/demo build.
export const newsApiKey = "a5c4469010ce4e56be02f514eee645d5";
export const dateLastWeek = new Date(Date.now() - 7 * 24 * 3600 * 1000)
  .toISOString()
  .substring(0, 10);
export const dateToday = new Date(Date.now()).toISOString().substring(0, 10);

// API base URL switches by environment:
// - production builds point to the deployed API
// - local dev uses localhost for a simple backend-first workflow
export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.news-explorer-zc.port0.org"
    : "http://localhost:3002";
