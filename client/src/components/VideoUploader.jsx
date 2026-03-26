// import axios from "axios";

// function VideoUploader({ setText, setTranslated }) {
//   const handleVideoUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       // Step 1: get text
//       const res = await axios.post("http://localhost:5000/api/video", formData);

//       const extractedText = res.data.text;
//       setText(extractedText);

//       // Step 2: translate
//       const translateRes = await axios.post(
//         "http://localhost:5000/api/translate",
//         {
//           text: extractedText,
//           from: "en",
//           to: "hi",
//         },
//       );

//       setTranslated(translateRes.data.translated);
//     } catch (error) {
//       console.error("Video Upload Error:", error);
//     }
//   };

//   return (
//     <div>
//       <h3>🎥 Upload Video</h3>
//       <input type="file" accept="video/*" onChange={handleVideoUpload} />
//     </div>
//   );
// }

// export default VideoUploader;
