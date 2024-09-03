import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WorkCard = ({ icon, name, links, description }:WorkCardCardProps) => {
    return (
        <div className="flex flex-col items-start gap-2 border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-center items-center border rounded-lg p-2">
            <Image src={icon} width={30} height={30} alt={name} className='mix-blend-overlay'/>
            </div>

            <h3 className="text-lg font-semibold">{name}</h3>

            <p className='w-full line-clamp-2 text-xs text-gray-600'>{description}</p>

            <div className="w-full flex justify-end">
                <Link href={links} className='flex flex-row items-center gap-1 focus:ring-highlight underline hover:no-underline focus:outline-none focus:ring-2'>
                    <Image src="/assets/logos/browser.svg" width={16} height={16} alt='browser'/>
                    <span className='text-black font-medium underline-offset-4'>访问</span>
                </Link>
            </div>
        </div>
    );
};
export default WorkCard;