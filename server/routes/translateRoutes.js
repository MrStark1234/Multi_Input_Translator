import express from "express";
import {
  translateText,
  saveTranslation,
  getHistory,
} from "../controllers/translateController.js";

const router = express.Router();

router.post("/", translateText);
router.post("/save", saveTranslation);
router.get("/history", getHistory);

export default router;
