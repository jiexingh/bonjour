"use client"
import ProfileUserInfo from '@/components/ProfileUserInfo';
import ShareQRCode from '@/components/ShareQRCode';
import TabBar from '@/components/TabBar';
import ThemeToggle from '@/components/ThemeToggle';
import { HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react'

const QrShare = () => {
  // TODO: 替换新的二维码生成参数
  const qrStringValue = '123455'

  return (
    <div className='container mx-auto h-screen overflow-clip'>
      <div className="sticky backdrop-blur-sm top-0 p-5 flex justify-between items-center z-10"> {/* Add z-index and background */}
        <Link href="/" className='p-2 rounded-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center cursor-pointer shadow-md'>
          <HomeIcon className='size-6' />
        </Link>
        <ThemeToggle />
      </div>

      <div className="min-h-screen px-2 py-8 flex flex-col items-center gap-10 animate-slide-top">
        <ProfileUserInfo />

        <ShareQRCode value={qrStringValue}/>
      </div>

      <TabBar/>
    </div>
  )
}

export default QrShare