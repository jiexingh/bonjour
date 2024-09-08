"use client"
import React from 'react'
import { TrashIcon, ShareIcon } from '@heroicons/react/24/outline';

type TabItem = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // SVG 图标组件类型
  text: string;
  className: string;
};

const tabs: TabItem[] = [
  {
    icon:  ShareIcon,
    text: 'share',
    className: "size-6"
  },
  {
    icon:  TrashIcon,
    text: 'delete',
    className: "size-6 text-red-500"
  }
]

const ActionTabBar = ({handleTabTap}:{handleTabTap:(text:string)=>void}) => {
  return (
    <div className="sticky z-10 bottom-6 flex justify-center py-6 px-4">
        <div className="w-full backdrop-blur-sm rounded-2xl py-4 flex justify-around items-center border">
            {tabs.map((tabItem) => {
            const IconComponent = tabItem.icon;

            return (
                <div key={tabItem.text} onClick={()=> handleTabTap(tabItem.text)} className="flex flex-col items-center cursor-pointer">
                    <IconComponent className={`h-8 w-8 ${tabItem.className}`}/>
                {/* <span className="text-sm">{tabItem.text}</span> */}
                </div>
            );
            })}
        </div>
    </div>
  )
}

export default ActionTabBar