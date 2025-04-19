import { Request, Response, NextFunction } from "express";

export default function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("[error]", err.message);
  res.status(500).json({ error: "Internal Server Error" });
}
