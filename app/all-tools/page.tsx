import { ArrowRight, ScanText, ImageIcon, FileText, Code, QrCode, FileType, Palette, Lock, Pilcrow, Link2 } from 'lucide-react';

const tools = [
  { name: 'Bangla OCR', description: 'Extract text from images', href: '/tools/bangla-ocr', icon: <ScanText className='w-8 h-8 mb-4 text-blue-500' /> },
  { name: 'Image Resizer', description: 'Resize and compress images', href: '/tools/image-resizer', icon: <ImageIcon className='w-8 h-8 mb-4 text-green-500' /> },
  { name: 'PDF Converter', description: 'Convert documents to PDF', href: '#', icon: <FileText className='w-8 h-8 mb-4 text-red-500' /> },
  { name: 'JSON Formatter', description: 'Format and validate JSON', href: '#', icon: <Code className='w-8 h-8 mb-4 text-yellow-500' /> },
  { name: 'QR Code Generator', description: 'Create custom QR codes', href: '#', icon: <QrCode className='w-8 h-8 mb-4 text-indigo-500' /> },
  { name: 'Lorem Ipsum Generator', description: 'Generate placeholder text', href: '#', icon: <FileType className='w-8 h-8 mb-4 text-purple-500' /> },
  { name: 'Color Picker', description: 'Select and convert colors', href: '#', icon: <Palette className='w-8 h-8 mb-4 text-pink-500' /> },
  { name: 'Password Generator', description: 'Create strong passwords', href: '#', icon: <Lock className='w-8 h-8 mb-4 text-gray-500' /> },
  { name: 'Markdown Editor', description: 'Write and preview Markdown', href: '#', icon: <Pilcrow className='w-8 h-8 mb-4 text-orange-500' /> },
  { name: 'URL Shortener', description: 'Shorten long URLs', href: '#', icon: <Link2 className='w-8 h-8 mb-4 text-teal-500' /> },
];

export default function AllToolsPage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white p-8'>
      <div className='container mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-5xl font-bold text-gray-800'>All Tools</h1>
          <p className='text-lg text-gray-600 mt-2'>A collection of useful tools to make your life easier.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {tools.map((tool) => (
            <div key={tool.name} className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2 duration-300 flex flex-col justify-between'>
              <div>
                {tool.icon}
                <h2 className='text-2xl font-semibold text-gray-800 mb-2'>{tool.name}</h2>
                <p className='text-gray-600 mb-4'>{tool.description}</p>
              </div>
              <a href={tool.href} className='text-blue-600 hover:text-blue-800 flex items-center font-semibold group'>
                Use Tool <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}