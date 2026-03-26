import translate from "@iamtraction/google-translate";

export const translateUsingGoogle = async (text, from, to) => {
  try {
    const result = await translate(text, {
      from,
      to,
    });

    return result.text;
  } catch (error) {
    console.error("Google Translate Error:", error);
    throw new Error("Translation service failed");
  }
};
