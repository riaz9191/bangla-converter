'use client';

import { useState } from 'react';
import { Upload, Download, Image as ImageIcon } from 'lucide-react';

export default function ImageResizerPage() {
  const [image, setImage] = useState<string | null>(null);
  const [resizedImage, setResizedImage] = useState<string | null>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
        const img = new Image();
        img.onload = () => {
          setWidth(img.width);
          setHeight(img.height);
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(event.target.files[0]);
      setResizedImage(null);
    }
  };

  const handleResize = () => {
    if (!image) return;
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0, width, height);
      setResizedImage(canvas.toDataURL());
    };
    img.src = image;
  };

  return (
    <div className='min-h-screen bg-gray-50 p-8'>
      <div className='container mx-auto'>
        <h1 className='text-4xl font-bold text-gray-800 mb-8'>Image Resizer</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-2xl font-semibold text-gray-700 mb-4'>Upload Image</h2>
            <div className='flex items-center justify-center w-full'>
              <label htmlFor='dropzone-file' className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100'>
                <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                  <Upload className='w-10 h-10 mb-3 text-gray-400' />
                  <p className='mb-2 text-sm text-gray-500'><span className='font-semibold'>Click to upload</span> or drag and drop</p>
                  <p className='text-xs text-gray-500'>PNG, JPG, GIF up to 10MB</p>
                </div>
                <input id='dropzone-file' type='file' className='hidden' onChange={handleImageUpload} />
              </label>
            </div>
            {image && <img src={image} alt='Uploaded' className='mt-4 rounded-lg' />} 
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-2xl font-semibold text-gray-700 mb-4'>Resize Options</h2>
            <div className='flex items-center gap-4 mb-4'>
              <div>
                <label htmlFor='width' className='block text-sm font-medium text-gray-700'>Width</label>
                <input type='number' id='width' value={width} onChange={(e) => setWidth(parseInt(e.target.value))} className='w-full p-2 border-2 border-gray-300 rounded-lg' />
              </div>
              <div>
                <label htmlFor='height' className='block text-sm font-medium text-gray-700'>Height</label>
                <input type='number' id='height' value={height} onChange={(e) => setHeight(parseInt(e.target.value))} className='w-full p-2 border-2 border-gray-300 rounded-lg' />
              </div>
            </div>
            <button onClick={handleResize} className='w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center' disabled={!image}>
              <ImageIcon className='mr-2' /> Resize Image
            </button>
            {resizedImage && 
              <div className='mt-4'>
                <h3 className='text-xl font-semibold text-gray-700 mb-2'>Resized Image</h3>
                <img src={resizedImage} alt='Resized' className='rounded-lg' />
                <a href={resizedImage} download className='w-full mt-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center'>
                  <Download className='mr-2' /> Download Image
                </a>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}