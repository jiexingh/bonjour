"use client";
import TabBar from '@/components/TabBar';
import ThemeToggle from '@/components/ThemeToggle';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Wallet = () => {
  const descriptionLines = [
    '👻 躺平爱好者',
    '☁️ 旅游梦想家',
    '💻 Front-end development engineer'
  ];

  const router = useRouter();

  const handleItemTap = (index:number)=>{
    router.replace(`/profile/${index}`);
  };

  return (
    <div className='container mx-auto min-h-screen'>
      <div className="container sticky z-20 top-0 backdrop-blur-sm p-2 flex justify-between items-center">
        <Link href="/" >
          <p className='text-xl md:text-2xl font-medium animate-slide-top'>👋🏻 Bonjour!</p>   
        </Link>
        <ThemeToggle />
      </div>
  
      <div className="min-h-screen p-5 animate-slide-top">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {Array(6).fill(null).map((_, index) => (
            <div onClick={()=> handleItemTap(index)} key={index} className="flex flex-col items-start gap-2 border rounded-2xl p-4 shadow-sm hover:shadow-md cursor-pointer">
              <Image src="/assets/avator/avator-1.jpeg" alt='avator' width={60} height={60} className="rounded-full object-cover" />
              <p className='w-full font-bold truncate'>Devin Christensen</p>
              <p className='w-full truncate text-sm'>Frontend / iOS Developer / XR Content Creator</p>
              <p className='w-full truncate text-sm'>{descriptionLines.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
      <TabBar />
    </div>
  );
};

export default Wallet;