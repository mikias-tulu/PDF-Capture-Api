import { Router } from "express";
import { convertToPDF } from "../controllers/convert.controller";

const router = Router();

router.post("/", convertToPDF);

export default router;
