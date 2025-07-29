import { ArrowRight, ScanText, ImageIcon, FileText, Code, QrCode, FileType, Palette, Lock, Pilcrow, Link2, Type, Clock, Ruler, Key, Search } from 'lucide-react';

const tools = [
  { name: 'Bangla OCR', description: 'Extract text from images', href: '/tools/bangla-ocr', icon: <ScanText className='w-8 h-8 mb-4 text-blue-500' />, category: 'Text Tools' },
  { name: 'Image Resizer', description: 'Resize and compress images', href: '/tools/image-resizer', icon: <ImageIcon className='w-8 h-8 mb-4 text-green-500' />, category: 'Image Tools' },
  { name: 'PDF Converter', description: 'Convert documents to PDF', href: '/tools/pdf-converter', icon: <FileText className='w-8 h-8 mb-4 text-red-500' />, category: 'Converters' },
  { name: 'JSON Formatter', description: 'Format and validate JSON', href: '/tools/json-formatter', icon: <Code className='w-8 h-8 mb-4 text-yellow-500' />, category: 'Developer Tools' },
  { name: 'QR Code Generator', description: 'Create custom QR codes', href: '/tools/qr-code-generator', icon: <QrCode className='w-8 h-8 mb-4 text-indigo-500' />, category: 'Generators' },
  { name: 'Lorem Ipsum Generator', description: 'Generate placeholder text', href: '/tools/lorem-ipsum-generator', icon: <FileType className='w-8 h-8 mb-4 text-purple-500' />, category: 'Text Tools' },
  { name: 'Color Picker', description: 'Select and convert colors', href: '/tools/color-picker', icon: <Palette className='w-8 h-8 mb-4 text-pink-500' />, category: 'Other Tools' },
  { name: 'Password Generator', description: 'Create strong passwords', href: '/tools/password-generator', icon: <Lock className='w-8 h-8 mb-4 text-gray-500' />, category: 'Generators' },
  { name: 'Markdown Editor', description: 'Write and preview Markdown', href: '/tools/markdown-editor', icon: <Pilcrow className='w-8 h-8 mb-4 text-orange-500' />, category: 'Text Tools' },
  { name: 'URL Shortener', description: 'Shorten long URLs', href: '/tools/url-shortener', icon: <Link2 className='w-8 h-8 mb-4 text-teal-500' />, category: 'Other Tools' },
  { name: 'Text Case Converter', description: 'Convert text to different cases', href: '/tools/text-case-converter', icon: <Pilcrow className='w-8 h-8 mb-4 text-blue-500' />, category: 'Text Tools' },
  { name: 'Base64 Encoder/Decoder', description: 'Encode and decode Base64 strings', href: '/tools/base64-converter', icon: <Code className='w-8 h-8 mb-4 text-purple-500' />, category: 'Developer Tools' },
  { name: 'Unit Converter', description: 'Convert between different units of measurement', href: '/tools/unit-converter', icon: <Ruler className='w-8 h-8 mb-4 text-green-500' />, category: 'Converters' },
  { name: 'Timestamp Converter', description: 'Convert between timestamps and human-readable dates', href: '/tools/timestamp-converter', icon: <Clock className='w-8 h-8 mb-4 text-orange-500' />, category: 'Converters' },
  { name: 'Color Format Converter', description: 'Convert colors between different formats (HEX, RGB, HSL)', href: '/tools/color-format-converter', icon: <Palette className='w-8 h-8 mb-4 text-pink-500' />, category: 'Converters' },
  { name: 'CSV to JSON Converter', description: 'Convert CSV data to JSON format', href: '/tools/csv-to-json-converter', icon: <FileText className='w-8 h-8 mb-4 text-green-500' />, category: 'Converters' },
  { name: 'JSON to YAML Converter', description: 'Convert JSON data to YAML format', href: '/tools/json-to-yaml-converter', icon: <FileText className='w-8 h-8 mb-4 text-red-500' />, category: 'Converters' },
  { name: 'Image to Base64 Converter', description: 'Convert images to Base64 strings', href: '/tools/image-to-base64-converter', icon: <ImageIcon className='w-8 h-8 mb-4 text-yellow-500' />, category: 'Image Tools' },
  { name: 'Word Counter', description: 'Count words, characters, and lines in your text', href: '/tools/word-counter', icon: <Type className='w-8 h-8 mb-4 text-indigo-500' />, category: 'Text Tools' },
  { name: 'UUID Generator', description: 'Generate universally unique identifiers', href: '/tools/uuid-generator', icon: <Key className='w-8 h-8 mb-4 text-gray-500' />, category: 'Generators' },
  { name: 'JSON to TypeScript Converter', description: 'Convert JSON objects to TypeScript interfaces', href: '/tools/json-to-typescript-converter', icon: <Code className='w-8 h-8 mb-4 text-blue-500' />, category: 'Developer Tools' },
  { name: 'HTML to Markdown Converter', description: 'Convert HTML content to Markdown format', href: '/tools/html-to-markdown-converter', icon: <FileText className='w-8 h-8 mb-4 text-green-500' />, category: 'Developer Tools' },
  { name: 'CSS Formatter', description: 'Format and beautify CSS code', href: '/tools/css-formatter', icon: <Code className='w-8 h-8 mb-4 text-blue-500' />, category: 'Developer Tools' },
  { name: 'JavaScript Minifier', description: 'Minify JavaScript code to reduce file size', href: '/tools/javascript-minifier', icon: <Code className='w-8 h-8 mb-4 text-yellow-500' />, category: 'Developer Tools' },
  { name: 'SQL Formatter', description: 'Format and beautify SQL queries', href: '/tools/sql-formatter', icon: <FileText className='w-8 h-8 mb-4 text-blue-500' />, category: 'Developer Tools' },
  { name: 'XML Formatter', description: 'Format and beautify XML code', href: '/tools/xml-formatter', icon: <Code className='w-8 h-8 mb-4 text-orange-500' />, category: 'Developer Tools' },
  { name: 'Regex Tester', description: 'Test regular expressions against text', href: '/tools/regex-tester', icon: <Search className='w-8 h-8 mb-4 text-red-500' />, category: 'Developer Tools' },
  { name: 'Hash Generator', description: 'Generate various cryptographic hashes (MD5, SHA1, SHA256, etc.)', href: '/tools/hash-generator', icon: <Key className='w-8 h-8 mb-4 text-purple-500' />, category: 'Developer Tools' },
  { name: 'QR Code Reader', description: 'Scan QR codes from images or webcam', href: '/tools/qr-code-reader', icon: <QrCode className='w-8 h-8 mb-4 text-indigo-500' />, category: 'Image Tools' },
  { name: 'Image Compressor', description: 'Compress images to reduce file size', href: '/tools/image-compressor', icon: <ImageIcon className='w-8 h-8 mb-4 text-yellow-500' />, category: 'Image Tools' },
];

const categories = [
  { name: 'Text Tools', description: 'Tools for text manipulation and analysis.' },
  { name: 'Image Tools', description: 'Tools for image processing and conversion.' },
  { name: 'Developer Tools', description: 'Tools for developers and programmers.' },
  { name: 'Converters', description: 'Tools for converting between different data formats.' },
  { name: 'Generators', description: 'Tools for generating various types of data.' },
  { name: 'Other Tools', description: 'Miscellaneous useful tools.' },
];

export default function AllToolsPage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white p-8'>
      <div className='container mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-5xl font-bold text-gray-800'>All Tools</h1>
          <p className='text-lg text-gray-600 mt-2'>A collection of useful tools to make your life easier.</p>
        </div>
        {
          categories.map((category) => (
            <div key={category.name} className="mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{category.name}</h2>
              <p className="text-lg text-gray-600 mb-8">{category.description}</p>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {tools
                  .filter((tool) => tool.category === category.name)
                  .map((tool) => (
                    <div key={tool.name} className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2 duration-300 flex flex-col justify-between'>
                      <div>
                        {tool.icon}
                        <h3 className='text-2xl font-semibold text-gray-800 mb-2'>{tool.name}</h3>
                        <p className='text-gray-600 mb-4'>{tool.description}</p>
                      </div>
                      <a href={tool.href} className='text-blue-600 hover:text-blue-800 flex items-center font-semibold group'>
                        Use Tool <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}