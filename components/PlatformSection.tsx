import React from 'react'
import Image from 'next/image'

const PlatformSection = () => {
  return (
    <section className='container mx-auto px-4 flex flex-col items-center md:grid md:grid-cols-3 md:gap-2 animate-slide-top [animation-delay:0.35s]'>
        <div className="flex flex-col items-center py-8 gap-2 text-slate-600 dark:text-white/70">
            <div className="flex flex-row items-center">
            <span>会使用</span> 
                <Image src="/assets/logos/github.svg" width={18} height={18} alt="github" className="size-6 mx-2"/> 
                <span>上传开源工具</span>
            </div>

            <div className="flex flex-row items-center">
                <span>在</span> 
                <Image src="/assets/logos/applestore.svg" width={20} height={20} alt="github" className="size-8 mx-2"/> 
                <span>上架应用</span>
            </div>

            <div className="flex flex-row items-center">
                <span>在</span>
                <Image src="/assets/logos/youtube.svg" width={18} height={18} alt="douban" className="size-6 mx-2"/>
                <Image src="/assets/logos/icons8-x.svg" width={18} height={18} alt="douban" className="size-6 mx-2"/>
                   <span>分享经验、思考和有趣的经历</span>
            </div>

            <div className="flex flex-row items-center">
                <span>在 </span>
                 <Image src="/assets/logos/douban.svg" width={18} height={18} alt="douban" className="size-6 mx-2"/> 
                 <span>记录喜爱的电影书籍</span> 
            </div>

            <div className="flex flex-row items-center">
                <span>在</span>
                 <Image src="/assets/logos/applemusic.svg" width={18} height={18} alt="applemusic" className="size-6 mx-2"/>
                 <Image src="/assets/logos/music.l63.svg" width={18} height={18} alt="music l63" className="size-6 mx-2"/>  
                 <span>收听喜爱的专辑</span> 
            </div>

            <div className="flex flex-row items-center">
                <span>游戏数据被保存在</span>
                  <Image src="/assets/logos/steam.svg" width={18} height={18} alt="steam" className="size-6 mx-2"/>
                     <span>中</span>
            </div>
        </div>

        <div className="flex flex-col items-center md:justify-center">
            <p>于是我们开发了 </p>
            <h1 className='text-3xl md:text-4xl font-medium mt-8 mb-8 animate-slide-top'>👋🏻 Bonjour!</h1>
            <p className=' text-highlight'>一份数字名片 / 说明书</p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 text-center md:justify-center">
            <p>希望帮助你<span className=' mx-2 text-highlight'>简单快速</span>地整理信息</p>
            <p>为<span className=' mx-2 text-highlight'>潜在的朋友 / 合作方</span></p>
            <p>提供<span className=' mx-2 text-highlight'>了解你的窗口</span></p>
        </div>
    </section>
  )
}

export default PlatformSection