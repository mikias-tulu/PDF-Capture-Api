import puppeteer from "puppeteer";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { APP_CONFIG } from "../config/app.config";

export const generatePDF = async (url: string, req: any): Promise<string> => {
  const filename = `pdf-${uuidv4()}.pdf`;
  const outputPath = path.join(__dirname, "..", "..", APP_CONFIG.DOWNLOADS_DIR, filename);

  const browser = await puppeteer.launch(APP_CONFIG.PUPPETEER_OPTIONS);
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle2" });
  await page.pdf({ path: outputPath, format: "A4" });

  await browser.close();

  const fullUrl = `${req.protocol}://${req.get("host")}/${APP_CONFIG.DOWNLOADS_DIR}/${filename}`;
  return fullUrl;
};
