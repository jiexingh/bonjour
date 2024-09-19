"use client"

import Footer from "@/components/landing-sections/Footer";
import SectionSlogan from "@/components/landing-sections/SectionSlogan";
import PlatformCard from "@/components/PlatformCard";
import PlatformSection from "@/components/landing-sections/PlatformSection";
import SectionDescription from "@/components/landing-sections/SectionDescription";
import SectionHelps from "@/components/landing-sections/SectionHelps";
import Testimonials from "@/components/landing-sections/Testimonials";
import ThemeToggle from "@/components/ThemeToggle";
import { appendParamsToPath } from "@/lib/utils";
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import CallAction from "@/components/landing-sections/CallAction";

export default function Home() {
  const router = useRouter();

  // TODO: 替换成真实的用户信息
  const currentUserId = '51f0193c-f035-57bc-bdc1-92aa4ec4a44c';
  const bonjourId ='13d22b2a-ca6f-5ed3-8238-b24b8b1076d3';
  
  const generateShareUrl = useCallback(() => {
    const searchParams = {
      userId: currentUserId,
      bonjourId
    };
    return appendParamsToPath(`/profile`, searchParams);
  }, [currentUserId]);

  const handleGetLinkBtnTap = () => {
    const path = generateShareUrl();
    console.log('path',path)
    router.push(path);
  };
  
  return (
      <main>
        <div onClick={handleGetLinkBtnTap} className="w-full flex justify-center gap-2 items-center bg-black text-white py-3 text-sm dark:underline dark:underline-offset-4 cursor-pointer">
          <p>我们正在寻找10000名天使用户,期待你的加入</p>
          <ArrowRightIcon className="size-4"/>
        </div>

        <div className="container sticky z-20 top-0 backdrop-blur-sm p-2 flex justify-between items-center">
          <p className='text-xl md:text-2xl font-medium animate-slide-top'>👋🏻 Bonjour!</p>
          <ThemeToggle/>
        </div>

        <SectionSlogan userId={currentUserId} bonjourId={bonjourId}/>
        
        <SectionDescription/>

        <PlatformSection />

        <PlatformCard />

        <SectionHelps/>

        <Testimonials/>

        <CallAction/>

        <Footer/>
      </main>
  );
}
