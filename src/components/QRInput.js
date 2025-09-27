export default function QRInput({ text, setText }) {
  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Metin veya URL girin"
      className="border border-gray-300 px-4 py-2 rounded-lg w-full mb-6 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
      rows={4}
    />
  );
}
