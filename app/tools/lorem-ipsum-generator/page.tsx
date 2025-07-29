'use client';

import { useState } from 'react';
import { FileType } from 'lucide-react';

const loremIpsumText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

export default function LoremIpsumGeneratorPage() {
  const [paragraphs, setParagraphs] = useState(1);
  const [generatedText, setGeneratedText] = useState('');

  const handleGenerate = () => {
    let text = '';
    for (let i = 0; i < paragraphs; i++) {
      text += loremIpsumText;
    }
    setGeneratedText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800">Lorem Ipsum Generator</h1>
          <p className="text-lg text-gray-600 mt-2">Generate placeholder text.</p>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full mb-6">
              <label htmlFor="paragraphs" className="block text-lg font-medium text-gray-700 mb-2">Number of Paragraphs</label>
              <input
                type="number"
                id="paragraphs"
                value={paragraphs}
                onChange={(e) => setParagraphs(parseInt(e.target.value))}
                min="1"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={handleGenerate}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700"
            >
              <FileType className="w-5 h-5 mr-2 inline-block" />
              Generate Text
            </button>
            {generatedText && (
              <div className="mt-8 w-full">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Generated Text</h2>
                <textarea
                  readOnly
                  value={generatedText}
                  className="w-full h-64 p-4 bg-gray-100 border border-gray-300 rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}