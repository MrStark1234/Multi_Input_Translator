import mongoose from "mongoose";

const translationSchema = new mongoose.Schema(
  {
    inputText: String,
    translatedText: String,
    sourceLang: String,
    targetLang: String,
  },
  { timestamps: true },
);

export default mongoose.model("Translation", translationSchema);
