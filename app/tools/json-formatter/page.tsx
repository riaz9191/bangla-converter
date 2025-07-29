
'use client';

import { useState } from 'react';
import { Code } from 'lucide-react';
import { BackButton } from '@/components/ui/back-button';

export default function JsonFormatterPage() {
  const [jsonInput, setJsonInput] = useState('');
  const [formattedJson, setFormattedJson] = useState('');
  const [error, setError] = useState('');

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      const formatted = JSON.stringify(parsed, null, 2);
      setFormattedJson(formatted);
      setError('');
    } catch (e: any) {
      setError('Invalid JSON: ' + e.message);
      setFormattedJson('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-8">
      <div className="container mx-auto">
        <div className="absolute top-4 left-4">
          <BackButton />
        </div>
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800">JSON Formatter</h1>
          <p className="text-lg text-gray-600 mt-2">Format and validate your JSON.</p>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Input</h2>
              <textarea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                placeholder='Paste your JSON here'
                className="w-full h-96 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 font-mono"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Output</h2>
              <pre className="w-full h-96 p-4 bg-gray-100 border border-gray-300 rounded-lg overflow-auto font-mono">
                <code>{formattedJson}</code>
              </pre>
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              onClick={handleFormat}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700"
            >
              <Code className="w-5 h-5 mr-2 inline-block" />
              Format JSON
            </button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
