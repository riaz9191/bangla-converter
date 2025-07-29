
'use client';

import { Ruler } from 'lucide-react';
import { BackButton } from '@/components/ui/back-button';

export default function UnitConverterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-8">
      <div className="container mx-auto">
        <div className="absolute top-4 left-4">
          <BackButton />
        </div>
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800">Unit Converter</h1>
          <p className="text-lg text-gray-600 mt-2">Convert between different units of measurement.</p>
        </div>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <div className="flex flex-col items-center justify-center">
            <Ruler className="w-16 h-16 mb-4 text-green-500" />
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
