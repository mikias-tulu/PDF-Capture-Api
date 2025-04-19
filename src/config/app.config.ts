import dotenv from "dotenv";

dotenv.config();

export const APP_CONFIG = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || "development",
  BASE_URL: process.env.BASE_URL || `http://localhost:${process.env.PORT || 3000}`,
  DOWNLOADS_DIR: "downloads",
  PUPPETEER_OPTIONS: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
};
