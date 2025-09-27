export default function QRSettings({
  size,
  setSize,
  fgColor,
  setFgColor,
  bgColor,
  setBgColor,
  format,
  setFormat,
}) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="p-3 border rounded-lg">
        <label className="text-sm block mb-1 font-medium">Boyut</label>
        <select
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
          className="border rounded px-2 py-1 w-full"
        >
          <option value={150}>Küçük</option>
          <option value={200}>Orta</option>
          <option value={300}>Büyük</option>
        </select>
      </div>
      <div className="p-3 border rounded-lg">
        <label className="text-sm block mb-1 font-medium">Format</label>
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          className="border rounded px-2 py-1 w-full"
        >
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="svg">SVG</option>
        </select>
      </div>
      <div className="p-3 border rounded-lg">
        <label className="text-sm block mb-1 font-medium">Ön Renk</label>
        <input
          type="color"
          value={fgColor}
          onChange={(e) => setFgColor(e.target.value)}
          className="w-full h-9 rounded"
        />
      </div>
      <div className="p-3 border rounded-lg">
        <label className="text-sm block mb-1 font-medium">Arka Renk</label>
        <input
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
          className="w-full h-9 rounded"
        />
      </div>
    </div>
  );
}
