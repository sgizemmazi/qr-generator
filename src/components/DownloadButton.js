export default function DownloadButton({ format, downloadQR }) {
  return (
    <button
      onClick={downloadQR}
      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow hover:opacity-90 transition"
    >
      📥 İndir ({format.toUpperCase()})
    </button>
  );
}
