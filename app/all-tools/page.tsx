"use client";
import { ArrowRight, ScanText, ImageIcon, FileText, Code, QrCode, FileType, Palette, Lock, Pilcrow, Link2, Type, Clock, Ruler, Key, Search } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

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
  { name: 'JSON to XML Converter', description: 'Convert JSON data to XML format', href: '/tools/json-to-xml-converter', icon: <Code className='w-8 h-8 mb-4 text-blue-500' />, category: 'Converters' },
  { name: 'XML to JSON Converter', description: 'Convert XML data to JSON format', href: '/tools/xml-to-json-converter', icon: <Code className='w-8 h-8 mb-4 text-green-500' />, category: 'Converters' },
  { name: 'Markdown to HTML Converter', description: 'Convert Markdown content to HTML format', href: '/tools/markdown-to-html-converter', icon: <FileText className='w-8 h-8 mb-4 text-orange-500' />, category: 'Converters' },
  { name: 'HTML to PDF Converter', description: 'Convert HTML content to PDF format', href: '/tools/html-to-pdf-converter', icon: <FileText className='w-8 h-8 mb-4 text-red-500' />, category: 'Converters' },
  { name: 'Image Cropper', description: 'Crop images to a specific size or aspect ratio', href: '/tools/image-cropper', icon: <ImageIcon className='w-8 h-8 mb-4 text-green-500' />, category: 'Image Tools' },
  { name: 'Image Rotator', description: 'Rotate images by a specified angle', href: '/tools/image-rotator', icon: <ImageIcon className='w-8 h-8 mb-4 text-yellow-500' />, category: 'Image Tools' },
  { name: 'Color Palette Generator', description: 'Generate harmonious color palettes', href: '/tools/color-palette-generator', icon: <Palette className='w-8 h-8 mb-4 text-pink-500' />, category: 'Generators' },
  { name: 'Favicon Generator', description: 'Generate favicons from images', href: '/tools/favicon-generator', icon: <ImageIcon className='w-8 h-8 mb-4 text-purple-500' />, category: 'Generators' },
  { name: 'Password Strength Checker', description: 'Check the strength of your passwords', href: '/tools/password-strength-checker', icon: <Lock className='w-8 h-8 mb-4 text-gray-500' />, category: 'Other Tools' },
  { name: 'URL Parser', description: 'Parse URLs into their components (protocol, host, path, etc.)', href: '/tools/url-parser', icon: <Link2 className='w-8 h-8 mb-4 text-teal-500' />, category: 'Developer Tools' },
  { name: 'Base64 Image Viewer', description: 'View images from Base64 strings', href: '/tools/base64-image-viewer', icon: <ImageIcon className='w-8 h-8 mb-4 text-yellow-500' />, category: 'Image Tools' },
  { name: 'Epoch Converter', description: 'Convert between Unix epoch timestamps and human-readable dates', href: '/tools/epoch-converter', icon: <Clock className='w-8 h-8 mb-4 text-orange-500' />, category: 'Converters' },
  { name: 'Text Diff Checker', description: 'Compare two text inputs and highlight differences', href: '/tools/text-diff-checker', icon: <FileText className='w-8 h-8 mb-4 text-blue-500' />, category: 'Text Tools' },
  { name: 'Line Sorter', description: 'Sort lines of text alphabetically or by length', href: '/tools/line-sorter', icon: <FileText className='w-8 h-8 mb-4 text-green-500' />, category: 'Text Tools' },
  { name: 'Duplicate Line Remover', description: 'Remove duplicate lines from text', href: '/tools/duplicate-line-remover', icon: <FileText className='w-8 h-8 mb-4 text-red-500' />, category: 'Text Tools' },
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
  const [activeCategory, setActiveCategory] = useState('');
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Adjust this to control when the category becomes active
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id);
        }
      });
    }, observerOptions);

    categories.forEach((category) => {
      const ref = categoryRefs.current[category.name];
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      categories.forEach((category) => {
        const ref = categoryRefs.current[category.name];
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const NAVBAR_HEIGHT = 64; // Assuming your navbar height is 64px (h-16)

  const scrollToCategory = (categoryName: string) => {
    const ref = categoryRefs.current[categoryName];
    if (ref) {
      const yOffset = -NAVBAR_HEIGHT; // Adjust for fixed navbar
      const y = ref.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white p-8'>
      <div className='container mx-auto px-4 flex'>
        {/* Main Content */}
        <div className='flex-1 p-4 pt-16'> {/* Added pt-16 to push content below navbar */}
          <div className='text-center mb-12'>
            <h1 className='text-5xl font-bold text-gray-800'>All Tools</h1>
            <p className='text-lg text-gray-600 mt-2'>A collection of useful tools to make your life easier.</p>
            <p className='text-xl font-semibold text-gray-700 mt-4'>Total Tools: {tools.length}</p>
          </div>
          {
            categories.map((category) => (
              <div key={category.name} id={category.name} ref={(el) => (categoryRefs.current[category.name] = el)} className="mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">{category.name}</h2>
                <p className="text-lg text-gray-600 mb-8">{category.description}</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                  {tools
                    .filter((tool) => tool.category === category.name)
                    .map((tool) => (
                      <Link href={tool.href} key={tool.name} className='relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2 duration-300 flex flex-col justify-between cursor-pointer overflow-hidden'>
                        <div className='absolute top-4 right-4 opacity-10 rotate-12 z-0'>
                          {React.cloneElement(tool.icon, { className: 'w-24 h-24' })}
                        </div>
                        <div className='relative z-10'>
                          <div className='w-8 h-8 mb-4'>{tool.icon}</div> {/* Original icon for display */}
                          <h3 className='text-2xl font-semibold text-gray-800 mb-2'>{tool.name}</h3>
                          <p className='text-gray-600 mb-4'>{tool.description}</p>
                        </div>
                        <div className='relative z-10 text-blue-600 hover:text-blue-800 flex items-center font-semibold group'>
                          Use Tool <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            ))
          }
        </div>
        {/* Sidebar */}
        <div className='w-64 p-4 sticky mt-16 top-0 h-screen overflow-y-auto bg-white rounded-xl shadow-lg ml-8'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>Categories</h2>
          <ul>
            {categories.map((category) => (
              <li key={category.name} className='mb-2'>
                <button
                  onClick={() => scrollToCategory(category.name)}
                  className={`text-lg ${activeCategory === category.name ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-500'}`}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}