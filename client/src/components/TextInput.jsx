function TextInput({ text, setText }) {
  return (
    <textarea
      value={text}
      placeholder="Type or speak something..."
      onChange={(e) => setText(e.target.value)}
      className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none shadow-sm text-white"
      rows={4}
    />
  );
}

export default TextInput;
