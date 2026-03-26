import fs from "fs";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pdf = require("pdf-parse"); // 👈 now this will be function

export const uploadPDF = async (req, res) => {
  try {
    const filePath = req.file.path;

    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);

    fs.unlinkSync(filePath);

    res.json({
      success: true,
      text: data.text,
    });
  } catch (error) {
    console.error("PDF Error:", error);
    res.status(500).json({ error: "PDF processing failed" });
  }
};
