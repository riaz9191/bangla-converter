'use client';

import { useState } from 'react';
import { Lock } from 'lucide-react';

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+-=[]{};|":<>,.?/';

export default function PasswordGeneratorPage() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const handleGenerate = () => {
    let charSet = '';
    if (includeUppercase) charSet += uppercaseChars;
    if (includeLowercase) charSet += lowercaseChars;
    if (includeNumbers) charSet += numberChars;
    if (includeSymbols) charSet += symbolChars;

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    setPassword(newPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800">Password Generator</h1>
          <p className="text-lg text-gray-600 mt-2">Create strong passwords.</p>
        </div>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full mb-6">
              <div className="flex items-center justify-between p-4 bg-gray-100 border border-gray-300 rounded-lg">
                <span className="text-lg font-mono">{password}</span>
                <button onClick={() => navigator.clipboard.writeText(password)} className="text-blue-600 hover:text-blue-800">Copy</button>
              </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="length" className="block text-lg font-medium text-gray-700">Length: {length}</label>
                <input
                  type="range"
                  id="length"
                  min="4"
                  max="32"
                  value={length}
                  onChange={(e) => setLength(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="uppercase" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} className="mr-2" />
                <label htmlFor="uppercase">Include Uppercase</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="lowercase" checked={includeLowercase} onChange={() => setIncludeLowercase(!includeLowercase)} className="mr-2" />
                <label htmlFor="lowercase">Include Lowercase</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="numbers" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} className="mr-2" />
                <label htmlFor="numbers">Include Numbers</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="symbols" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} className="mr-2" />
                <label htmlFor="symbols">Include Symbols</label>
              </div>
            </div>
            <button
              onClick={handleGenerate}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700"
            >
              <Lock className="w-5 h-5 mr-2 inline-block" />
              Generate Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}