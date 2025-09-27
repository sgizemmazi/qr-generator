import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";

export default function QRPreview({
  text,
  size,
  fgColor,
  bgColor,
  qrCanvasRef,
  qrSvgRef,
}) {
  return (
    <div className="flex justify-center mb-6">
      <div className="bg-white p-4 rounded-xl shadow-md">
        <div ref={qrCanvasRef}>
          <QRCodeCanvas
            value={text}
            size={size}
            fgColor={fgColor}
            bgColor={bgColor}
          />
        </div>
        <div ref={qrSvgRef} style={{ display: "none" }}>
          <QRCodeSVG
            value={text}
            size={size}
            fgColor={fgColor}
            bgColor={bgColor}
          />
        </div>
      </div>
    </div>
  );
}
