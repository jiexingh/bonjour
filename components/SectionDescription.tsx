
const SectionDescription = () => {
  return (
    <section className='py-8 container tracking-wider mx-auto flex flex-col gap-6 items-center animate-slide-top [animation-delay:0.3s]'>
        <p className="text-slate-600 text-2xl">Bounjour! 有一个<span className='text-highlight'>愿景</span></p>
        <div className="mt-4 flex flex-col items-center gap-1">
            <p className='section-heading max-w-[220px] '>帮助创造者👻</p>
            <p className='section-heading'>遇见更多 <span className="text-highlight">同样有趣</span> 或 </p>
            <p className="section-heading text-highlight">手握机会的人</p>
        </div>

        <div className="text-center">
            <p>但要先告诉世界你是谁</p>
            <p>需要一份让潜在朋友、合作方了解你的</p>
            <p className='text-highlight'>说明书 📖</p>
        </div>

        <div className="text-center text-slate-600">
            <p>而这份说明书的要素已被 <span className="text-black dark:text-white">隐藏性</span> 存放在互联网</p>
            <p>只是<span className="text-black dark:text-white">被社交媒体分散各地</span></p>
            <p>导致你无法 <span className="text-black dark:text-white">快速、精准、完整</span> 地向外分享</p>
        </div>

        <div className="text-center">
            <p className=' text-lg font-medium'>就像一位<span className='text-highlight'>独立开发者</span>🧑🏻‍💻</p>
        </div>
    </section>
  )
}

export default SectionDescription