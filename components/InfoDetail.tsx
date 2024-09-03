"use client";

import React from 'react';
import Image from 'next/image';
import SocialCard from './SocialCard';
import { socialSnapList, workList } from '@/constants/index';
import WorkCard from './WorkCard';
import { cn } from '@/lib/utils';

interface InfoDetailProps {
    isResponsive?: boolean; // 可选属性
    concatList?: ConcatMeProps[];
    onConcatTap?: (index: number) => void; // 可选属性
}

const InfoDetail = ({ 
    isResponsive = false, 
    concatList, 
    onConcatTap 
}: InfoDetailProps) => {
    const descriptionLines = [
        '👻 躺平爱好者',
        '☁️ 旅游梦想家',
        '💻 Front-end development engineer'
    ];

    return (
        <div className="py-8 px-2 flex flex-col items-center w-full box-border animate-slide-top [animation-delay:0.65s]">
            <Image 
                src="/assets/avator/avator-1.jpeg" 
                width={100} 
                height={100} 
                alt="avator" 
                className="rounded-full object-cover shadow-md" 
            />
            <h1 className="mt-6 text-3xl font-medium tracking-tighter">HunterHan</h1>
            <p className="mt-2 w-full text-sm truncate text-center text-slate-600">Frontend / ios Developer / XR Content Creator</p>

            <div className="mt-2 text-sm text-center leading-relaxed description whitespace-pre-wrap">
                {descriptionLines.map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        {index < descriptionLines.length - 1 && <br />}
                    </React.Fragment>
                ))}
            </div>

            {concatList && concatList.length > 0 ? (
                <>
                    <p className="block-title">联系我</p>
                    <div className={isResponsive ? 'md_block_container' : 'block_container'}>
                        {concatList.map((icon, index) => (
                            <div key={index} className="flex justify-center items-center">
                                <div 
                                    onClick={() => onConcatTap?.(index)} 
                                    className="w-10 h-10 rounded-full border flex justify-center items-center cursor-pointer"
                                >
                                    <Image
                                        src={icon.src}
                                        width={20}
                                        height={20}
                                        alt={icon.alt}
                                        className="rounded-full overflow-clip" 
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : null}
          

            <p className="block-title">社交媒体</p>
            <div className={cn("w-full block-mt grid grid-cols-2 gap-2", isResponsive ? "md:grid-cols-4" : "")}>
                {socialSnapList.map(item => (
                    <SocialCard key={item.socialKey} {...item} />
                ))}
            </div>

            <p className="block-title">作品</p>
            <div className={cn("w-full block-mt flex flex-col gap-4", isResponsive ? "md:grid md:grid-cols-3" : "")}>
                {workList.map((work, index) => (
                    <WorkCard key={index} {...work} />
                ))}
            </div>
        </div>
    );
};

export default InfoDetail;