import React from 'react'

type PhoneProps = {
    children?: React.ReactNode;
}

const PhoneBox = ({ children }:PhoneProps) => {
  return (
    <div className="relative">
        <div className="dark:border-white/70 w-[300px] h-[600px] rounded-[50px] border-4 border-black overflow-y-scroll remove-scrollbar">
        {/* top circle */}
        <div className=" absolute top-2 left-[50%] translate-x-[-50%] rounded-full bg-black dark:border-white/70 w-1/3 h-[26px] flex items-center justify-end">
          <i className="relative right-6 bg-green-500 z-10 w-1 h-1 rounded-full"/>
        </div>
        {/* actions btn */}
        <i className="phone-action-audio-btn top-[110px] h-[26px]" />
        <i className="phone-action-audio-btn top-[160px] h-[40px]" />
        <i className="phone-action-audio-btn top-[220px] h-[40px]" />
        <i className="phone-power-btn"/>
        {children}
    </div>
    </div>
    
  )
}

export default PhoneBox