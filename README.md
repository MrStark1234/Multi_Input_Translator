# 🌍 Multi Input Translator

A powerful full-stack MERN application that allows users to translate **text, speech, and PDF documents** into multiple languages with a modern UI and real-time experience.

---

## 🚀 Features

- 🌐 **Text Translation** – Translate text instantly between multiple languages
- 🎤 **Speech to Text Translation** – Speak and convert voice into translated text
- 📄 **PDF Translation** – Upload PDFs and extract + translate content
- 🔁 **Dynamic Language Selection** – Supports English, Hindi, and Marathi
- 🧠 **Smart UI/UX** – Modern responsive UI with smooth interactions
- 🕘 **Translation History** – Saves all translations in MongoDB
- ❌ **Delete History** – Remove individual translation records

---

## 🛠️ Tech Stack

### Frontend

- React (Vite)
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express.js
- MongoDB (Mongoose)

### APIs & Libraries

- Google Translate (Unofficial API)
- Web Speech API (Speech Recognition)
- Multer (File Upload)
- pdf-parse (PDF text extraction)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/multi-input-translator.git
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

## 📂 Folder Structure

```
client/        → React frontend
server/        → Express backend
 ├── models/
 ├── routes/
 ├── controllers/
 ├── middleware/
```

---

## 🔮 Future Improvements

- 🎥 Video to Text (AI-based transcription)
- 🌙 Dark Mode
- 📋 Copy & Download Translation
- 🔄 Language Auto-Detect
- ⚡ Loading Animations

---

## 🧠 Learnings

- Built a full-stack MERN application from scratch
- Integrated multiple input types (text, speech, files)
- Handled real-world API integration and debugging
- Designed modern UI using Tailwind CSS
- Implemented scalable architecture with reusable components

---

## 👨‍💻 Author

**Suraj Singhal**

- 💼 MERN Stack Developer
- 🚀 Passionate about building real-world projects

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---
