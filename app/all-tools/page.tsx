import { ArrowRight } from 'lucide-react';

const tools = [
  { name: 'Bangla OCR', description: 'Extract text from images', href: '#' },
  { name: 'Image Resizer', description: 'Resize and compress images', href: '#' },
  { name: 'PDF Converter', description: 'Convert documents to PDF', href: '#' },
  { name: 'JSON Formatter', description: 'Format and validate JSON', href: '#' },
  { name: 'QR Code Generator', description: 'Create custom QR codes', href: '#' },
  { name: 'Lorem Ipsum Generator', description: 'Generate placeholder text', href: '#' },
  { name: 'Color Picker', description: 'Select and convert colors', href: '#' },
  { name: 'Password Generator', description: 'Create strong passwords', href: '#' },
  { name: 'Markdown Editor', description: 'Write and preview Markdown', href: '#' },
  { name: 'URL Shortener', description: 'Shorten long URLs', href: '#' },
];

export default function AllToolsPage() {
  return (
    <div className='min-h-screen bg-gray-50 p-8'>
      <div className='container mx-auto'>
        <h1 className='text-4xl font-bold text-gray-800 mb-8'>All Tools</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {tools.map((tool) => (
            <div key={tool.name} className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
              <h2 className='text-2xl font-semibold text-gray-700 mb-2'>{tool.name}</h2>
              <p className='text-gray-600 mb-4'>{tool.description}</p>
              <a href={tool.href} className='text-blue-600 hover:text-blue-800 flex items-center'>
                Use Tool <ArrowRight className='w-4 h-4 ml-2' />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}