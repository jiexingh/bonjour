"use client"
import React from 'react'
import { QrCodeIcon, WalletIcon} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

type TabItem = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // SVG 图标组件类型
  text: string;
  link: string;
};

const tabs: TabItem[] = [
  {
    icon: QrCodeIcon,
    text: 'qr-share',
    link: '/qr-share'
  },
  {
    icon: WalletIcon,
    text: 'wallets',
    link: '/wallets'
  }
]

const TabBar = () => {
    const router = useRouter();
    const bonjourId = '123456';
    const userId = 'userid_123'

    const handleTabItemTap = (tabItem:TabItem) => {
        router.push(`${tabItem.link}?userId=${userId}&bonjourId=${bonjourId}`)
    };

  return (
    <div className="sticky z-10 bottom-6 flex justify-center py-6 px-4">
        <div className="w-full backdrop-blur-sm rounded-2xl py-4 flex justify-around items-center border">
            {tabs.map((tabItem) => {
            const IconComponent = tabItem.icon;

            return (
                <div key={tabItem.text} onClick={() => handleTabItemTap(tabItem)} className="flex flex-col items-center cursor-pointer">
                    <IconComponent className="h-8 w-8" />
                {/* <span className="text-sm">{tabItem.text}</span> */}
                </div>
            );
            })}
        </div>
    </div>
  )
}

export default TabBar