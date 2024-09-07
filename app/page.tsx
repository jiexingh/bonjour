"use client"

import PlatformCard from "@/components/PlatformCard";
import PlatformSection from "@/components/PlatformSection";
import SectionDescription from "@/components/SectionDescription";
import SectionSlogan from "@/components/SectionSlogan";
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "@/lib/hooks/ThemeContext";
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleGetLinkBtnTap = () => {
    router.push('/profile/12345');
  };
  
  return (
    <ThemeProvider>
      <main className="flex flex-col items-center">
        <div onClick={handleGetLinkBtnTap} className="w-full flex justify-center gap-2 items-center bg-black text-white py-3 text-sm dark:underline dark:underline-offset-4 cursor-pointer">
          <p>我们正在寻找10000名天使用户,期待你的加入</p>
          <ArrowRightIcon className="size-4"/>
        </div>

        <div className="container sticky z-20 top-0 backdrop-blur-sm p-2 flex justify-between items-center">
          <p className='text-xl md:text-2xl font-medium animate-slide-top'>👋🏻 Bonjour!</p>
          <ThemeToggle/>
        </div>

        <SectionSlogan/>
        
        <SectionDescription/>

        <PlatformSection />

        <PlatformCard />
      </main>
    </ThemeProvider>
  );
}
