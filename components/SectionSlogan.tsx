"use client"
import Image from "next/image";
import PhoneBox from "./PhoneBox";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import InfoDetail from "./InfoDetail";
import { concatList } from "@/constants";

const GetLinkButton = ({cuClassName, onClonClick}:{ cuClassName?:string, onClonClick?: () => void;}) => (
  <button onClick={onClonClick} className={
    cn("cursor-pointer justify-center items-center border-2 border-black rounded-full py-2 px-8 md:flex md:mt-12", cuClassName)
  }>
    <span>在应用中获取你的专属地址</span>
    <Image src="/assets/icons/arrow-right.svg" width={20} height={20} alt="arrow-right" className="size-5 inline-block" />
  </button>
);

const SectionSlogan = () => {
  const router = useRouter();

  const handleGetLinkBtnTap = ()=>{
    console.log('获取专属链接')
    // router.push('/create');
    router.push('/show/12345');
  }

  return (
    <section className="container mx-auto flex flex-col items-center tracking-wide overflow-x-clip md:flex-row-reverse md:justify-around md:items-center md:min-h-screen">
      {/* slogan */}
      <div className="md:animate-slide-left md:[animation-delay:0.5s]">
        <h1 className='text-3xl md:text-4xl font-medium mt-10 mb-10 animate-slide-top'>👋🏻 Bonjour!</h1>
        <div className="text-center md:text-left">
          <p className=' tracking-wide text-3xl max-w-[200px] font-medium animate-slide-top [animation-delay:0.3s] md:max-w-max'>
            科技创造者的<span className="text-highlight animate-slide-top [animation-delay:0.35s]">数字名片</span>
          </p>
          <p className='mt-4 text-slate-600 text-sm animate-slide-top [animation-delay:0.5s]'>🔗 链接创造的骄傲与喜悦</p>
        </div>

        <GetLinkButton cuClassName="hidden mt-6 animate-slide-top [animation-delay:0.55s]" onClonClick={handleGetLinkBtnTap}/>
      </div>

      {/* mobile phone */}
      <div className="mt-4 flex flex-col items-center animate-slide-top [animation-delay:0.6s] md:[animation-delay:0s]">
        <PhoneBox>
          <InfoDetail concatList={concatList}/>
        </PhoneBox>

        <GetLinkButton cuClassName="mt-6 gap-1 items-center md:hidden" onClonClick={handleGetLinkBtnTap}/>   
      </div>
    </section>
  );
}

export default SectionSlogan;