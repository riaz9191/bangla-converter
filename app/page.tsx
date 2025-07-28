import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, RefreshCw } from "lucide-react"; // ShoppingBag এর পরিবর্তে RefreshCw আইকন ব্যবহার করা হয়েছে
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className='min-h-'>
      {/* Hero Section */}
      <section className='relative overflow-hidden bg-gradient-to-r from-blue-50 via-white to-indigo-50 py-20 lg:py-32'>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>
        <div className='container mx-auto px-4 relative z-10'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='space-y-8'>
              <div className='space-y-4'>
                <Badge className='bg-gradient-to-r from-blue-100 to-indigo-200 text-blue-800 border-blue-300'>
                  <Sparkles className='w-3 h-3 mr-1' />
                  ইউনিকোড ও বিজয় সাপোর্ট
                </Badge>
                <h1 className='text-4xl lg:text-6xl font-light text-gray-900 leading-tight'>
                  বাংলা লেখালেখির সহজ সমাধান
                  <span className='block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-medium'>
                    নির্ভুল ফন্ট কনভার্টার
                  </span>
                </h1>
                <p className='text-lg text-gray-600 leading-relaxed max-w-lg'>
                  আমাদের এই টুলটি দিয়ে ইউনিকোড থেকে বিজয় এবং বিজয় থেকে ইউনিকোডে
                  বাংলা লেখা সহজেই কনভার্ট করুন। সাংবাদিক, লেখক, এবং
                  ছাত্রছাত্রীদের জন্য এটি একটি দ্রুত এবং নির্ভরযোগ্য সমাধান।
                </p>
              </div>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button
                  size='lg'
                  className='bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-3 rounded-full'
                >
                  <RefreshCw className='w-4 h-4 mr-2' />
                  কনভার্ট শুরু করুন
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  className='border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-full bg-transparent'
                >
                  কিভাবে কাজ করে?
                </Button>
              </div>
            </div>
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-3xl blur-3xl'></div>
              <Image
                src='/placeholder.svg?height=600&width=500' // আপনি এখানে কনভার্টারের একটি স্ক্রিনশট ব্যবহার করতে পারেন
                alt='বাংলা ইউনিকোড ও বিজয় ফন্ট কনভার্সনের ডেমো'
                width={500}
                height={600}
                className='relative z-10 rounded-2xl shadow-2xl'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other sections can be added here */}
    </div>
  );
}
