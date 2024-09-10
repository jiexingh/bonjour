import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-white/70 text-sm py-10 text-center'>
        <div className='container mx-auto flex flex-col items-center'>
          <div className="flex items-center gap-2">
            <Image src='/assets/logos/bonjour-logo.svg' width={40} height={40} alt='bonjour'/>
            <p className='text-xl'>Bonjour!</p>
          </div>
        <p>&copy; 2024 HunterHan. All Right</p>
        </div>
    </footer>
   
  )
}

export default Footer