import React from 'react'
import Image from 'next/image';

const ProfileUserInfo = () => {
    const descriptionLines = [
        '👻 躺平爱好者',
        '☁️ 旅游梦想家',
        '💻 Front-end development engineer'
    ];
  return (
    <div className='w-full flex flex-col items-center'>
        <Image
            src="/assets/avator/avator-1.jpeg" 
            width={100} 
            height={100} 
            alt="avator" 
            className="rounded-full object-cover shadow-md" 
        />
        <h1 className="mt-6 text-3xl font-medium tracking-tighter">HunterHan</h1>
        <p className="mt-2 w-full text-sm truncate text-center text-secondary-color">Frontend / ios Developer / XR Content Creator</p>
    
        <div className="mt-2 text-sm text-center leading-relaxed description whitespace-pre-wrap">
            {descriptionLines.map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    {index < descriptionLines.length - 1 && <br />}
                </React.Fragment>
            ))}
        </div>
    </div>
  )
}

export default ProfileUserInfo