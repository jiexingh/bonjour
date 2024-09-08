"use client";

import PlatformDrawer from '@/components/PlatformDrawer';
import ProfileCard from '@/components/ProfileCard';
import ThemeToggle from '@/components/ThemeToggle';
import { concatList } from '@/constants/index';
import React, { useState } from 'react';
import { HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import TabBar from '@/components/TabBar';
import { useSearchParams } from 'next/navigation'; // Import useSearchParams
import ActionTabBar from '@/components/ActionTabBar';
import ConfirmDeleteDialog from '@/components/ConfirmDeleteDialog';

const Profile = () => {
  // TODO: 替换成真正的用户id
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId'); // 获取 userId
  const sceneId = searchParams.get('sceneId'); // 获取 来源 sceneId 二维码 sceneId
  const currentUserId = '51f0193c-f035-57bc-bdc1-92aa4ec4a44c';
  console.log('sceneId',sceneId)


  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [currentDrawerItem, setCurrentDrawerItem] = useState<ConcatMeProps | null>(null);

  const handleOnOpenChange = (value: boolean) => {
    setOpenDrawer(value);
  };

  const handleConcatTap = (index: number) => {
    setCurrentDrawerItem(concatList[index]);
    setOpenDrawer(true);
  };

  const [openConfirmDialog, setOpenConfirmDialog] = useState<boolean>(false);

  const handleOpenConfirmDialogChange = (value: boolean) => {
    setOpenConfirmDialog(value);
  };

  const handleActionTabTap = (actionText:string) => {
    console.log('----handleActionTabTap-actionText--',actionText)
    switch (actionText) {
      case 'delete':
        setOpenConfirmDialog(true);
        break;
      case 'share':
        const {origin,pathname} = window.location
       const sharePath = `${origin}${pathname}`;
       console.log('sharePath',sharePath)
        break
    }
   
  };

  return (
    <div className="container mx-auto min-h-screen">
      <div className="sticky backdrop-blur-sm top-0 p-5 flex justify-between items-center z-10">
        <Link href="/" className='p-2 rounded-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center cursor-pointer shadow-md'>
          <HomeIcon className='size-6' />
        </Link>
        <ThemeToggle />
      </div>

      <PlatformDrawer 
        platformItem={currentDrawerItem} 
        open={openDrawer} 
        onOpenChange={handleOnOpenChange} 
        aria-labelledby="drawer-title" 
      />
      <ProfileCard 
        isResponsive={true} 
        concatList={concatList} 
        onConcatTap={handleConcatTap} 
      />

      {
        currentUserId === userId ? <TabBar userId={currentUserId}/> : <ActionTabBar handleTabTap={handleActionTabTap}/>
      }

      {
        openConfirmDialog && <ConfirmDeleteDialog open={openConfirmDialog} onOpenChange={handleOpenConfirmDialogChange}/>
      }
    </div>
  );
};

export default Profile;