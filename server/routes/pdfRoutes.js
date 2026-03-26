import express from "express";
import { uploadPDF } from "../controllers/pdfController.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

router.post("/", upload.single("file"), uploadPDF);

export default router;
