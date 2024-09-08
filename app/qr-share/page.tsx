"use client"
import ProfileUserInfo from '@/components/ProfileUserInfo';
import ShareQRCode from '@/components/ShareQRCode';
import TabBar from '@/components/TabBar';
import ThemeToggle from '@/components/ThemeToggle';
import { HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const QrShare = () => {
  const [qrStringValue, setQrStringValue] = useState("");

  useEffect(() => {
    // 在客户端获取当前url 拼接 scencId
    if (typeof window !== 'undefined') {
      setQrStringValue(`${window.location.href.replace('localhost','192.168.1.6')}&sceneId=10000`)
    }
  }, [qrStringValue]);

  return (
    <div className='container mx-auto h-screen overflow-clip'>
      <div className="sticky backdrop-blur-sm top-0 p-5 flex justify-between items-center z-10"> {/* Add z-index and background */}
        <Link href="/" className='p-2 rounded-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center cursor-pointer shadow-md'>
          <HomeIcon className='size-6' />
        </Link>
        <ThemeToggle />
      </div>

      <div className="min-h-screen px-2 pt-4 flex flex-col items-center gap-4 animate-slide-top">
        <ProfileUserInfo />

        {qrStringValue ? <ShareQRCode value={qrStringValue}/>:(
          <p>loading...</p>
        )}
      </div>

      <TabBar/>
    </div>
  )
}

export default QrShare