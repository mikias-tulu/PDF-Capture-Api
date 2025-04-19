import { Request, Response, NextFunction } from "express";
import { generatePDF } from "../../services/pdf.service";

export const convertToPDF = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required." });
  }

  try {
    const pdfFile = await generatePDF(url, req);
    res.status(200).json({ pdfUrl: pdfFile });
  } catch (err) {
    next(err);
  }
};
