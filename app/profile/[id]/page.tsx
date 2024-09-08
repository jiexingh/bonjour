"use client";

import PlatformDrawer from '@/components/PlatformDrawer';
import ProfileCard from '@/components/ProfileCard';
import ThemeToggle from '@/components/ThemeToggle';
import { concatList } from '@/constants/index';
import React, { useState } from 'react';
import { HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import TabBar from '@/components/TabBar';
import { useParams } from 'next/navigation';
import ActionTabBar from '@/components/ActionTabBar';
import ConfirmDeleteDialog from '@/components/ConfirmDeleteDialog';

const Profile = () => {
  const currentUserId = '12345';
  const { id } = useParams(); 
  // TODO: 判断当前名片id 是否属于当前用户
  
  
  const [openDrawer, setOpenDrawer] = useState(false);
  const [currentDrawerItem, setCurrentDrawerItem] = useState<ConcatMeProps | null>(null);

  const handleOnOpenChange = (value: boolean) => {
    setOpenDrawer(value);
  };
  
  const handleConcatTap = (index: number) => {
    setCurrentDrawerItem(concatList[index]);
    setOpenDrawer(true);
  };

  const [openConfirmDialog, setOpenConfirmDialog] = useState(false)

  const handleOpenConfirmDialogChange = (value:boolean)=>{
    setOpenConfirmDialog(value)
  };

  const handleActionTabTap = ()=>{
    setOpenConfirmDialog(true)
  };
  
  return (
      <div className="container mx-auto min-h-screen"> {/* Ensure container has a height */}
        <div className="sticky backdrop-blur-sm top-0 p-5 flex justify-between items-center z-10"> {/* Add z-index and background */}
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
          currentUserId === id ? <TabBar /> : <ActionTabBar handleTabTap={handleActionTabTap}/>
        }

        {
         openConfirmDialog && <ConfirmDeleteDialog open={openConfirmDialog} onOpenChange={handleOpenConfirmDialogChange}/>
        }
      </div>
  );
};

export default Profile;