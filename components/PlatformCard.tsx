import React from 'react'
import Image from 'next/image'


interface PlatformIconCardProps {
  index: number; // 接收索引作为属性
}

const PlatformIconCard: React.FC<PlatformIconCardProps> = ({ index }) => (
  <div className={`flex max-w-sm bg-white flex-col gap-6 border rounded-3xl p-4 transform ${index % 2 === 1 ? '-rotate-6' : 'rotate-6'}`}>
    <Image src="/assets/logos/github.svg" width={30} height={30} alt="github" />

    <div>
      <p>GitHub Repository</p>
      <p className='text-sm text-slate-600'>闪耀的开源精神</p>
    </div>
    
    <button className="h-9 rounded-md px-3 bg-black text-white text-sm">
      <span>Star</span>
    </button>
  </div>
);

const PlatformCard = () => {
  return (
    <div className='mt-8 container mx-auto w-full flex flex-col px-12 animate-slide-top [animation-delay:0.4s]'>
        {/* TODO: plaform card list */}
        <div className="grid grid-cols-2">
            <div className="flex flex-col gap-12">
                <PlatformIconCard index={1} />
                <PlatformIconCard index={2} />
                <PlatformIconCard index={1} />
            </div>

            <div className="relative flex flex-col gap-20 justify-center">
                <PlatformIconCard index={4} />
                <PlatformIconCard index={4} />
            </div>
        </div>

        <div className="mt-4 mb-4 text-slate-600 text-center">
            <p>记录每一份创造的喜悦</p>
        </div>
    </div>
  )
}

export default PlatformCard