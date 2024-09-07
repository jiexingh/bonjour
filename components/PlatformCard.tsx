import React from 'react'
import Image from 'next/image'


interface PlatformIconCardProps {
  index: number; // 接收索引作为属性
  icon: string;
  name: string;
  desc: string;
  btnText: string;
  btnClassName?: string;
}

const PlatformIconCard: React.FC<PlatformIconCardProps> = ({ index, icon, name, desc, btnText, btnClassName}) => (
  <div className={`bg-white w-full flex flex-col gap-6 md:gap-10 lg:w-1/2 border rounded-3xl p-4 transform ${index % 2 === 1 ? '-rotate-6' : 'rotate-6'}`}>
    <Image src={icon} width={30} height={30} alt="github" />

    <div>
      <p>{name}</p>
      <p className='text-sm text-slate-600'>{desc}</p>
    </div>
    
    <button className={`${btnClassName? btnClassName :'bg-black'} h-9 rounded-md px-3 text-sm`}>
      <span>{btnText}</span>
    </button>
  </div>
);

const PlatformCard = () => {
  return (
    <div className='mt-8 container mx-auto w-full px-4 flex flex-col animate-slide-top [animation-delay:0.4s]'>
        {/* TODO: plaform card list */}
        <div className="grid grid-cols-2 md:gap-2">
            <div className="flex flex-col md:items-center gap-12 md:gap-16">
                <PlatformIconCard index={1} icon="/assets/logos/applestore.svg" name='App Store' desc="Think Different" btnText='获取' btnClassName="bg-[#4377EE] text-white"/>
                <PlatformIconCard index={2} icon="/assets/logos/docker.svg" name='Docker' desc="Accelerate how you build, share, and run applications" btnText='使用' btnClassName='bg-white font-black border shadow-sm'/>
                <PlatformIconCard index={1} icon="/assets/logos/google.svg" name='Web Page' desc="独立站 | Blog" btnText='访问' btnClassName='bg-[#8ACBFA] text-white border'/>
            </div>

            <div className="relative flex flex-col gap-20 md:gap-24 justify-center md:items-center">
                <PlatformIconCard index={4} icon="/assets/logos/github.svg" name='GitHub Respository' desc="闪耀的开源精神" btnText='Star' btnClassName='bg-black text-white'/>
                <PlatformIconCard index={4} icon="/assets/logos/music.l63.svg" name='网易云音乐' desc="注于发现与分享的音乐产品" btnText='打开' btnClassName='bg-[#C63520] text-white'/>
            </div>
        </div>

        <div className="mt-4 mb-4 text-slate-600 dark:text-white/70 text-center md:text-2xl">
            <p>记录每一份创造的喜悦</p>
        </div>
    </div>
  )
}

export default PlatformCard