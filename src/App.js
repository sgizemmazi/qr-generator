import { useState, useRef } from "react";
import Header from "./components/header";
import QRInput from "./components/QRInput";
import QRSettings from "./components/QRSettings";
import QRPreview from "./components/QRPreview";
import DownloadButton from "./components/DownloadButton";

export default function App() {
  const [text, setText] = useState("https://github.com");
  const [size, setSize] = useState(200);
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [format, setFormat] = useState("png");

  const qrCanvasRef = useRef();
  const qrSvgRef = useRef();

  const downloadQR = () => {
    if (format === "png" || format === "jpeg") {
      const canvas = qrCanvasRef.current.querySelector("canvas");
      const url = canvas.toDataURL(`image/${format}`);
      const a = document.createElement("a");
      a.href = url;
      a.download = `qrcode.${format}`;
      a.click();
    } else if (format === "svg") {
      const svgElement = qrSvgRef.current.querySelector("svg");
      const serializer = new XMLSerializer();
      const svgString = serializer.serializeToString(svgElement);
      const blob = new Blob([svgString], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "qrcode.svg";
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg w-full">
        <Header />
        <QRInput text={text} setText={setText} />
        <QRSettings
          size={size}
          setSize={setSize}
          fgColor={fgColor}
          setFgColor={setFgColor}
          bgColor={bgColor}
          setBgColor={setBgColor}
          format={format}
          setFormat={setFormat}
        />
        <QRPreview
          text={text}
          size={size}
          fgColor={fgColor}
          bgColor={bgColor}
          qrCanvasRef={qrCanvasRef}
          qrSvgRef={qrSvgRef}
        />
        <DownloadButton format={format} downloadQR={downloadQR} />
      </div>
    </div>
  );
}
