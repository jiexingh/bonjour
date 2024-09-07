import React from 'react'

const SectionHelps = () => {
  return (
   <section className='mt-6 container mx-auto flex flex-col items-center tracking-wider animate-slide-top [animation-delay:0.5s]'>
        <h2 className='text-center text-highlight section-heading tracking-wider'>帮助你和世界建立连接</h2>

        <div className="p-6 indent-8 text-lg text-slate-600 dark:text-white/70 text-center">
            当然像我们这样有趣的人，在展示
            <br className="md:hidden"/>
            <span className='text-black dark:text-white'> 创造的作品</span> / <span className='text-black dark:text-white'>有趣的经历</span> / <span className='text-black dark:text-white'>专业的能力</span> 外，
            <br className="md:hidden"/>不会希望对世界展示的是，
            <br className="md:hidden"/><span className='text-black dark:text-white'>一份枯燥无趣又商业的简历,</span> 
            <br className="md:hidden"/>
            所以我们推荐并在程序中支持你为说明书<br className="md:hidden"/>添加更丰富的信息，
            <br className="md:hidden"/>
            让潜在的朋友知晓<span className='text-highlight'>你喜爱的事物，</span><br className="md:hidden"/> 包括但不限
        </div>
   </section>
  )
}

export default SectionHelps