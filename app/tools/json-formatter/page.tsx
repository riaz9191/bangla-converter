
import { Code } from 'lucide-react';

export default function JsonFormatterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800">JSON Formatter</h1>
          <p className="text-lg text-gray-600 mt-2">Format and validate your JSON.</p>
        </div>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <div className="flex flex-col items-center justify-center">
            <Code className="w-16 h-16 mb-4 text-yellow-500" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Coming Soon</h2>
            <p className="text-gray-600 text-center">
              This tool is under construction. Please check back later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
