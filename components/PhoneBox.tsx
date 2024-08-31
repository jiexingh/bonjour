import React from 'react'

type PhoneProps = {
    children?: React.ReactNode;
}

const PhoneBox = ({ children }:PhoneProps) => {
  return (
    <div className="relative">
        <div className=" w-[300px] h-[600px] rounded-[50px] border-4 border-black overflow-y-scroll remove-scrollbar">
        {/* tip circle */}
        <div className=" absolute top-2 left-[50%] translate-x-[-50%] rounded-full bg-black w-1/3 h-[26px]" />
        {/* actions btn */}
        <i className="phone-action-audio-btn top-[110px] h-[26px]" />
        <i className="phone-action-audio-btn top-[160px] h-[40px]" />
        <i className="phone-action-audio-btn top-[220px] h-[40px]" />
        <i className="phone-power-btn" />
        {children}
    </div>
    </div>
    
  )
}

export default PhoneBox