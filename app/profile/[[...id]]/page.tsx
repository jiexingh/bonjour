"use client";

import React, { useEffect, useState, useCallback, useRef, lazy, Suspense } from 'react';
import PlatformDrawer from '@/components/PlatformDrawer';
import ProfileCard from '@/components/ProfileCard';
import ThemeToggle from '@/components/ThemeToggle';
import { concatList, ScenceCode } from '@/constants/index';
import { HomeIcon, LinkIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import ConfirmDeleteDialog from '@/components/ConfirmDeleteDialog';
import FixedActionIcons, { ActionIcon, OnActionTapParams } from '@/components/FixedActionIcons';
import { buildUrlWithParams, sleep } from '@/lib/utils';
import useCopyToClipboard from '@/lib/hooks/useCopyToClipboard';
import { useToast } from '@/hooks/use-toast';

// 动态导入组件
const TabBar = lazy(() => import('@/components/TabBar'));
const CollectionTabBar = lazy(() => import('@/components/CollectionTabBar'));

interface DynamicActionBarProps {
    currentUserId: string;
    userId: string;
    bonjourId: string;
    isLoading: boolean;
    isCollected: boolean;
    sceneCode: ScenceCode | null;
}

const DynamicActionBar: React.FC<DynamicActionBarProps> = ({
    currentUserId,
    userId,
    bonjourId,
    isLoading,
    isCollected,
    sceneCode,
}) => {
    const shouldShowCollectionTabBar = () => {
        return (
            !isLoading &&
            !isCollected &&
            currentUserId !== userId &&
            String(sceneCode) === String(ScenceCode.COPY)
        );
    };

    if (currentUserId === userId) {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <TabBar userId={userId} bonjourId={bonjourId} />
            </Suspense>
        );
    }

    if (shouldShowCollectionTabBar()) {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <CollectionTabBar />
            </Suspense>
        );
    }

    return null; // 如果没有条件满足，返回 null
};

const Profile: React.FC = () => {
    const searchParams = useSearchParams();
    const userId = searchParams.get('userId') || '';
    const bonjourId = searchParams.get('bonjourId') || '';
    const currentUserId = '51f0193c-f035-57bc-bdc1-92aa4ec4a44c';

    const [isLoading, setIsLoading] = useState(true);
    const [isCollected, setIsCollected] = useState(false);
    const sceneCode = searchParams.get('sceneCode') as ScenceCode | null;

    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const [currentDrawerItem, setCurrentDrawerItem] = useState<ConcatMeProps | null>(null);
    const [openConfirmDialog, setOpenConfirmDialog] = useState<boolean>(false);
    const toastShown = useRef<boolean>(false);
    
    const { copied, copy } = useCopyToClipboard();
    const { toast } = useToast();

    const handleOnOpenChange = (value: boolean) => setOpenDrawer(value);

    const handleConcatTap = (index: number) => {
        setCurrentDrawerItem(concatList[index]);
        setOpenDrawer(true);
    };

    const actionIcons: ActionIcon[] = [
        { icon: LinkIcon, action: 'copy', className: 'size-2' },
    ];

    const userActionIcons: ActionIcon[] = [
        { icon: PencilIcon, action: 'edit', className: 'size-2' },
        { icon: LinkIcon, action: 'copy', className: 'size-2' },
        { icon: TrashIcon, action: 'delete', className: 'size-2 text-red-500' },
    ];

    const userCollectedActionIcons: ActionIcon[] = [
        { icon: LinkIcon, action: 'copy', className: 'size-2' },
        { icon: TrashIcon, action: 'delete', className: 'size-2 text-red-500' },
    ];

    const handleActionTap = useCallback(({ actionItem }: OnActionTapParams) => {
        const { action } = actionItem;

        if (action === 'delete') {
            setOpenConfirmDialog(true);
        } else if (action === 'copy') {
            const { origin, pathname } = window.location;
            const searchParams = { 
                userId, 
                fromUserId: currentUserId,
                bonjourId, 
                sceneCode: ScenceCode.COPY 
            };
            const shareUrl = buildUrlWithParams(`${origin}${pathname}`, searchParams);
            copy(shareUrl);
        }
    }, [userId, currentUserId, copy]);

    useEffect(() => {
        const fetchData = async () => {
            await sleep(300);
            setIsLoading(false);
            // 随机设置 isCollected 为 true 或 false
            const randomValue = Math.random() >= 0.5; // 50% 概率
            setIsCollected(randomValue);
        };

        fetchData();
    }, []); 

    useEffect(() => {
        if (copied && !toastShown.current) {
            toast({ duration: 650, description: '当前链接复制成功' });
            toastShown.current = true;
        } else if (!copied) {
            toastShown.current = false; // 允许再次显示
        }
    }, [copied, toast]);

    return (
        <div className="container mx-auto min-h-screen">
            <div className="sticky backdrop-blur-sm top-0 p-5 flex justify-between items-center z-10">
                <Link href="/" className="p-2 rounded-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center cursor-pointer shadow-md">
                    <HomeIcon className="size-6" />
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

            {/* 动态操作tabbar */}
            <DynamicActionBar 
                userId={userId} 
                currentUserId={currentUserId} 
                bonjourId={bonjourId} 
                isLoading={isLoading} 
                isCollected={isCollected} 
                sceneCode={sceneCode}
            />

            {/* 悬浮操作 */}
            <FixedActionIcons
                actionIcons={currentUserId === userId ? userActionIcons : isCollected ? userCollectedActionIcons : actionIcons}
                onActionTap={handleActionTap}
            />

            {/* 删除确认弹窗 */}
            {openConfirmDialog && (
                <ConfirmDeleteDialog 
                    open={openConfirmDialog} 
                    onOpenChange={setOpenConfirmDialog} 
                />
            )}
        </div>
    );
};

export default Profile;