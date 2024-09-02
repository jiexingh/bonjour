import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const SocialCard = ({icon, title, subtitle, btnText, iconClassName, buttonClassName}: SocialCardProps) => {
  return (
    <div className="flex flex-col items-start gap-2 border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className={cn("flex justify-center items-center rounded-lg", iconClassName )}>
            <Image src={icon} width={30} height={30} alt={title} />
        </div>

        <p className="text-sm">{ title }</p>

        <p className="w-full truncate text-xs text-gray-600">{ subtitle }</p>
      
        <div className="flex justify-center">
            <button className={cn("min-w-14 text-xs font-medium py-1 px-2 rounded-3xl", buttonClassName)}>
                <span>{btnText}</span>
            </button>
        </div>
    </div>
  )
}

export default SocialCard