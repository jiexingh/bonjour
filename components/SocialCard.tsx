import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface SocialCardProps {
  icon: string;
  title: string;
  subtitle: string;
  btnText: string;
  iconClassName?: string;
  buttonClassName?: string;
}

const SocialCard = ({
  icon,
  title,
  subtitle,
  btnText,
  iconClassName = '', // 默认值为空字符串
  buttonClassName = '', // 默认值为空字符串
}: SocialCardProps) => {
  return (
    <div className="flex flex-col items-start gap-2 border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-center items-center rounded-lg">
        <Image src={icon} width={30} height={30} alt={title} className={iconClassName} />
      </div>

      <p className="text-sm font-semibold">{title}</p>

      <p className="w-full truncate text-xs text-gray-600">{subtitle}</p>

      <div className="flex justify-center">
        <button
          className={cn('min-w-14 text-xs font-medium py-1 px-2 rounded-3xl', buttonClassName)}
          aria-label={btnText}
        >
          <span>{btnText}</span>
        </button>
      </div>
    </div>
  );
}

export default SocialCard;