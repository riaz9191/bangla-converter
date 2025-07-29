'use client';

import { useState, useRef } from 'react';
import { QrCode } from 'lucide-react';
import QRCode from 'qrcode';

export default function QrCodeGeneratorPage() {
  const [text, setText] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleGenerate = () => {
    if (text && canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, text, (error) => {
        if (error) console.error(error);
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800">QR Code Generator</h1>
          <p className="text-lg text-gray-600 mt-2">Create custom QR codes.</p>
        </div>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full mb-6">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to encode"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <canvas ref={canvasRef} className="mb-6"></canvas>
            <button
              onClick={handleGenerate}
              disabled={!text}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              <QrCode className="w-5 h-5 mr-2 inline-block" />
              Generate QR Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}