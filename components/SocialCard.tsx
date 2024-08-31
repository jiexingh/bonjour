import Image from 'next/image'
import React from 'react'

const SocialCard = () => {
  return (
    <div className="flex flex-col gap-2 border rounded-lg p-4">
        <Image src="/assets/logos/github.svg" width={30} height={30} alt="github"/>
        <p>GitHub</p>
        <p className='text-sm font-thin'>github.com</p>

        <button className="flex justify-center items-center bg-black  text-white text-sm px-10 py-2 rounded-full">
            <span>Follow</span>
        </button>
    </div>
  )
}

export default SocialCard