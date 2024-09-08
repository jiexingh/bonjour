import { animate, motion,useMotionTemplate, useMotionValue, ValueAnimationTransition } from 'framer-motion';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

const WorkCard = ({ icon, name, links, description }:WorkCardCardProps) => {
//    const cardRef = useRef<HTMLDivElement>(null);

//     const xPercentage = useMotionValue(50);
//     const yPercentage = useMotionValue(0);
//     // [mask-image:radial-gradient(80px_80px_at_0%_0%,black,transparent)]
//     const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black,transparent)`


//     const animationCircumFerenceCard = ()=>{
//        if(!cardRef.current) return

//         const { width, height} = cardRef.current?.getBoundingClientRect();
//         const circumference = width * 2 + height * 2;

//         const times = [
//             0, 
//             width / circumference,
//             (width + height) / circumference,
//             (width * 2 + height) / circumference,
//             1
//         ];

//         const options: ValueAnimationTransition = {
//             times,
//             duration: 4,
//             repeat: Infinity,
//             ease: 'linear',
//             repeatType: 'loop'
//         };

//         animate(xPercentage,[0, 100, 100, 0, 0],options);
//         animate(yPercentage,[0, 0, 100, 100, 0],options);
//     }

//     useEffect(()=>{
//  animationCircumFerenceCard()
//     },[])

    return (
        <div
       
        className="relative flex flex-col items-start gap-2 border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* <motion.div 
            style={
                {
                    maskImage
                }
            } className=" absolute inset-0 -m-px border border-[#A369FF] rounded-lg" /> */}
          
            <div className="flex justify-center items-center border rounded-lg p-2">
                <Image src={icon} width={30} height={30} alt={name} className='mix-blend-overlay'/>
                </div>

                <h3 className="text-lg font-semibold">{name}</h3>

                <p className='w-full line-clamp-2 text-xs text-gray-600'>{description}</p>

                <div className="w-full flex justify-end">
                    <Link href={links} className='flex flex-row items-center gap-1 focus:ring-highlight underline hover:no-underline focus:outline-none focus:ring-2'>
                        <Image src="/assets/logos/browser.svg" width={16} height={16} alt='browser' className='text-white'/>
                        <span className='text-black dark:text-white font-medium underline-offset-4'>访问</span>
                    </Link>
            </div>
        </div>
    );
};
export default WorkCard;