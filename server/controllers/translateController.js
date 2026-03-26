import { translateUsingGoogle } from "../services/translateService.js";

import Translation from "../models/Translation.js";

export const saveTranslation = async (req, res) => {
  try {
    const { inputText, translatedText, sourceLang, targetLang } = req.body;

    const data = await Translation.create({
      inputText,
      translatedText,
      sourceLang,
      targetLang,
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Save failed" });
  }
};

export const getHistory = async (req, res) => {
  try {
    const data = await Translation.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Fetch failed" });
  }
};

export const translateText = async (req, res) => {
  try {
    const { text, from, to } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    const translatedText = await translateUsingGoogle(text, from, to);

    res.json({
      success: true,
      translated: translatedText,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
