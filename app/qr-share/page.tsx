"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { HomeIcon, LinkIcon } from '@heroicons/react/24/outline';
import FixedActionIcons, { ActionIcon, OnActionTapParams } from '@/components/FixedActionIcons';
import ProfileUserInfo from '@/components/ProfileUserInfo';
import ShareQRCode from '@/components/ShareQRCode';
import TabBar from '@/components/TabBar';
import ThemeToggle from '@/components/ThemeToggle';
import { useToast } from '@/hooks/use-toast';
import useCopyToClipboard from '@/lib/hooks/useCopyToClipboard';
import { buildUrlWithParams } from '@/lib/utils';
import { ScenceCode } from '@/constants';

const actionIcons: ActionIcon[] = [
  { icon: LinkIcon, action: 'copy', className: "size-2" },
];

const QrShare: React.FC = () => {
  const [qrStringValue, setQrStringValue] = useState<string>("");
  const currentUserId = '51f0193c-f035-57bc-bdc1-92aa4ec4a44c';
  const bonjourId ='13d22b2a-ca6f-5ed3-8238-b24b8b1076d3';
  const { copied, copy } = useCopyToClipboard();
  const { toast } = useToast();
  const toastShown = useRef<boolean>(false);

  const generateShareUrl = useCallback(() => {
    const { origin } = window.location;
    const searchParams = {
      userId: currentUserId,
      bonjourId,
      fromUserId: currentUserId,
      sceneCode: ScenceCode.COPY
    };
    return buildUrlWithParams(`${origin}/profile`, searchParams);
  }, [currentUserId]);

  const handleActionTap = useCallback(({ actionItem }: OnActionTapParams) => {
    if (actionItem.action === 'copy') {
      const shareUrl = generateShareUrl();
      copy(shareUrl);
    }
  }, [copy, generateShareUrl]);

  useEffect(() => {
    // 生成并设置二维码的字符串值
    const shareUrl = generateShareUrl();
    setQrStringValue(shareUrl);
  }, [generateShareUrl]);

  useEffect(() => {
    if (copied && !toastShown.current) {
      toast({ duration: 650, description: "当前链接复制成功" });
      toastShown.current = true;
    } else if (!copied) {
      toastShown.current = false; // 允许再次显示
    }
  }, [copied, toast]);

  return (
    <div className='container mx-auto h-screen overflow-clip'>
      <div className="sticky backdrop-blur-sm top-0 p-5 flex justify-between items-center z-10">
        <Link href="/" className='p-2 rounded-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center cursor-pointer shadow-md'>
          <HomeIcon className='size-6' />
        </Link>
        <ThemeToggle />
      </div>

      <div className="min-h-screen px-2 pt-4 flex flex-col items-center gap-4 animate-slide-top">
        <ProfileUserInfo />
        {qrStringValue ? <ShareQRCode value={qrStringValue} /> : <p>loading...</p>}
      </div>

      <FixedActionIcons 
        actionIcons={actionIcons} 
        onActionTap={handleActionTap} 
      />

      <TabBar />
    </div>
  );
}

export default QrShare;