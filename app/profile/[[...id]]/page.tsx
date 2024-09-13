"use client";

import PlatformDrawer from '@/components/PlatformDrawer';
import ProfileCard from '@/components/ProfileCard';
import ThemeToggle from '@/components/ThemeToggle';
import { concatList } from '@/constants/index';
import React, { useEffect, useState, useCallback } from 'react';
import { HomeIcon, LinkIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import TabBar from '@/components/TabBar';
import { useSearchParams } from 'next/navigation';
import ConfirmDeleteDialog from '@/components/ConfirmDeleteDialog';
import FixedActionIcons, { ActionIcon, OnActionTapParams } from '@/components/FixedActionIcons';
import { buildUrlWithParams } from '@/lib/utils';
import useCopyToClipboard from '@/lib/hooks/useCopyToClipboard';
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const searchParams = useSearchParams();
  
  const userId = searchParams.get('userId');
  const bonjourId = searchParams.get('bonjourId');
  const sceneId = searchParams.get('sceneId');
  const currentUserId = '51f0193c-f035-57bc-bdc1-92aa4ec4a44c';
  
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [currentDrawerItem, setCurrentDrawerItem] = useState<ConcatMeProps | null>(null);
  const [openConfirmDialog, setOpenConfirmDialog] = useState<boolean>(false);
  const [toastShown, setToastShown] = useState<boolean>(false);

  const { copied, copy } = useCopyToClipboard();
  const { toast } = useToast();

  const handleOnOpenChange = (value: boolean) => {
    setOpenDrawer(value);
  };

  const handleConcatTap = (index: number) => {
    setCurrentDrawerItem(concatList[index]);
    setOpenDrawer(true);
  };

  const actionIcons: ActionIcon[] = [
    { icon: LinkIcon, action: 'copy', className: "size-2"},
   
  ];

  const userActionIcons:ActionIcon[] =[
     { icon: PencilIcon, action: 'edit', className: "size-2"},
    { icon: LinkIcon, action: 'copy', className: "size-2"},
    { icon: TrashIcon, action: 'delete', className: "size-2 text-red-500"}
  ];

  const handleActionTap = useCallback(({ actionItem }: OnActionTapParams) => {
    const { action } = actionItem;

    if (action === 'delete') {
      setOpenConfirmDialog(true);
    } else if (action === 'copy') {
      const { origin, pathname } = window.location;
      const searchParams = {
        userId,
        bonjourId,
        shareFromUserId: currentUserId,
        sceneId: 1001
      };
      const shareBasePath = `${origin}${pathname}`;
      const shareUrl = buildUrlWithParams(shareBasePath, searchParams);
      copy(shareUrl);
    }
  }, [userId, bonjourId, currentUserId, copy]);

  useEffect(() => {
    if (copied && !toastShown) {
      toast({ duration: 650, description: "当前链接复制成功" });
      setToastShown(true);
    }

    if (!copied) {
      setToastShown(false); // 允许再次显示
    }
  }, [copied, toast, toastShown]);

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

      {currentUserId === userId && <TabBar userId={currentUserId} />}

      <FixedActionIcons actionIcons={ currentUserId==userId ? userActionIcons: actionIcons} onActionTap={handleActionTap} />

      {openConfirmDialog && <ConfirmDeleteDialog open={openConfirmDialog} onOpenChange={setOpenConfirmDialog} />}
    </div>
  );
};

export default Profile;