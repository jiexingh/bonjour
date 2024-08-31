"use client"
import Image from "next/image";
import PhoneBox from "./PhoneBox";
import React from "react";
import SocialCard from "./SocialCard";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const GetLinkButton = ({cuClassName, onClonClick}:{ cuClassName?:string, onClonClick?: () => void;}) => (
  <button onClick={onClonClick} className={
    cn("cursor-pointer justify-center border-2 border-black rounded-full py-2 px-8 md:flex md:mt-12", cuClassName)
  }>
    <span>在应用中获取你的专属地址</span>
    <Image src="/assets/icons/arrow-right.svg" width={20} height={20} alt="arrow-right" className="size-5 inline-block" />
  </button>
);

const SectionSlogan = () => {
  const router = useRouter();

  const descriptionLines = [
    "👻 躺平爱好者",
    "☁️ 旅游梦想家",
    "💻 Front-end development engineer"
  ];

  const handleGetLinkBtnTap = ()=>{
    console.log('获取专属链接')
    router.push('/create');
  }

  return (
    <section className="container mx-auto flex flex-col items-center tracking-wide overflow-x-clip md:flex-row-reverse md:justify-around md:items-center md:min-h-screen">
      {/* slogan */}
      <div className="md:animate-slide-left md:[animation-delay:0.5s]">
        <h1 className='text-3xl md:text-4xl font-medium mt-10 mb-10 animate-slide-top'>👋🏻 Bonjour!</h1>
        <div className="text-center md:text-left">
          <p className='text-3xl max-w-[200px] font-medium animate-slide-top [animation-delay:0.3s] md:max-w-max'>
            科技创造者的<span className="text-highlight animate-slide-top [animation-delay:0.35s]">数字名片</span>
          </p>
          <p className='mt-4 text-slate-600 text-sm animate-slide-top [animation-delay:0.5s]'>🔗 链接创造的骄傲与喜悦</p>
        </div>

        <GetLinkButton cuClassName="hidden mt-6 animate-slide-top [animation-delay:0.55s]" onClonClick={handleGetLinkBtnTap}/>
      </div>

      {/* mobile phone */}
      <div className="mt-4 flex flex-col items-center animate-slide-top [animation-delay:0.6s] md:[animation-delay:0s]">
        <PhoneBox>
          <div className="py-8 px-2 flex flex-col items-center w-full box-border animate-slide-top [animation-delay:0.65s]">
            <Image src="/assets/avator/avator-1.jpeg" width={100} height={100} alt="avator" className="rounded-full overflow-clip border border-slate-300 shadow-md" />
            <h1 className="mt-6 text-3xl font-medium tracking-tighter">HunterHan</h1>
            <p className="mt-2 w-full text-sm truncate text-center text-slate-600">Frontend / ios Developer / XR Content Creator</p>

            <div className="mt-2 text-sm text-center leading-relaxed description whitespace-pre-wrap">
              {descriptionLines.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < descriptionLines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>

            <p className="block-title">联系我</p>

            <div className="block-mt w-full border px-6 py-4 rounded-lg flex flex-row justify-around gap-2">
              {/* 替换为你的社交图标 */}
              <div className="size-10 rounded-full border flex justify-center items-center">
                <Image src="/assets/logos/github.svg" width={20} height={20} alt="github" className="rounded-full overflow-clip" />
              </div>
              <div className="size-10 rounded-full border flex justify-center items-center">
                <Image src="/assets/logos/github.svg" width={20} height={20} alt="github" className="rounded-full overflow-clip" />
              </div>
              <div className="size-10 rounded-full border flex justify-center items-center">
                <Image src="/assets/logos/github.svg" width={20} height={20} alt="github" className="rounded-full overflow-clip" />
              </div>
              <div className="size-10 rounded-full border flex justify-center items-center">
                <Image src="/assets/logos/github.svg" width={20} height={20} alt="github" className="rounded-full overflow-clip" />
              </div>
              {/* 其他图标 */}
            </div>

            <p className="block-title">社交媒体</p>

            <div className="block-mt grid grid-cols-2 gap-2">
              <SocialCard />
              <SocialCard />
              <SocialCard />
              <SocialCard />
              <SocialCard />
              <SocialCard />
            </div>
          </div>
        </PhoneBox>

        <GetLinkButton cuClassName="mt-6 gap-1 items-center md:hidden" onClonClick={handleGetLinkBtnTap}/>   
      </div>
    </section>
  );
}

export default SectionSlogan;