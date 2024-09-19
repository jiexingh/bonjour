"use client";

import ProfileEditDialog from '@/components/ProfileEditDialog';
import ThemeToggle from '@/components/ThemeToggle';
import { concatList, socialSnapList, workList } from '@/constants';
import { ChevronLeftIcon, PencilIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const Edit = () => {
    const { bonjourId } = useParams<{ bonjourId: string }>();
    const [profile, setProfile] = useState({
        userName: '' // 确保使用正确的键
    });
    const [openEditDialog, setOpenEditDialog] = useState<boolean>(false);

    // 检查 bonjourId 是否存在
    if (!bonjourId) {
        return <>请提供合法 ID</>;
    }

    const handleOnOpenEditDialogChange = () => {
        setOpenEditDialog(prev => !prev);
    };

    const handleAvatarTap = () => {
        console.log('头像点击');
    };

    const handleProfileEditTap = (field: string) => {
        console.log('用户信息编辑', field);
        setOpenEditDialog(true);
    };

    const renderProfileField = (label: string, value: string, field: string) => (
        <div onClick={() => handleProfileEditTap(field)} className="flex items-center justify-between p-2 cursor-pointer">
            <span className='text-lg'>{label}</span>
            <div className="flex items-center gap-2">
                <span className='truncate max-w-64 md:max-w-sm text-secondary-color'>{value}</span>
                <ChevronRightIcon className='w-4 h-4' />
            </div>
        </div>
    );

    return (
        <div className="container mx-auto min-h-screen pb-20">
            <div className="sticky backdrop-blur-sm top-0 p-5 flex justify-between items-center z-10">
                <button 
                    onClick={() => window.history.back()} 
                    className="p-2 rounded-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center cursor-pointer shadow-md"
                    aria-label="Go back"
                >
                    <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <ThemeToggle />
            </div>

            <div className='flex flex-col items-center w-full self-center px-6 gap-6 animate-slide-top'>
                <div className="w-28 h-28 rounded-full shadow-md flex justify-center items-center relative"> 
                    <Image
                        src="/assets/avator/avator-1.jpeg" 
                        width={112} 
                        height={112} 
                        alt="avator" 
                        className="rounded-full object-cover hover:scale-105"
                    />
                    <div onClick={handleAvatarTap} className="flex justify-center items-center p-2 rounded-full bg-white dark:bg-gray-700 cursor-pointer absolute z-10 shadow-md right-1 -bottom-1">
                        <PencilIcon className='w-3 h-3' />
                    </div> 
                </div>

                <div className="w-full overflow-hidden max-w-4xl dark:border py-3 pl-3 divide-y rounded-2xl shadow-md hover:shadow-xl">
                    {renderProfileField('名字', profile.userName || '呜呼～', 'userName')}
                    {renderProfileField('补充', '🤌爽了爽了', 'short')}
                    {renderProfileField('介绍', '☁️旅游梦想家 💪运动爱好者 前端拼图小崽子', 'desc')}
                </div>

                <div className="w-full overflow-hidden max-w-4xl dark:border py-2 pl-2 divide-y rounded-2xl shadow-md hover:shadow-xl">
                    <div onClick={() => handleProfileEditTap('uniLink')} className="flex items-center justify-between p-2">
                        <span className='text-lg'>专属链接</span>
                        <div className="flex items-center gap-2">
                            <span className='truncate max-w-56 md:max-w-sm lg:max-w-md xl:max-w-lg text-secondary-color'>https://bonjour-indol.vercel.app/9162e90f-e9fc-513f-a67c-3a3fb6ce7a25</span>
                            <ChevronRightIcon className='w-4 h-4' />
                        </div>
                    </div>
                </div>

                <div className="w-full overflow-hidden max-w-4xl dark:border py-2 pl-2 divide-y rounded-2xl shadow-md hover:shadow-xl">
                    <p className='p-2 text-lg'>联系方式</p>
                    <div className="flex items-center px-2 py-4 gap-3 flex-wrap gap-y-3">
                        {concatList.map(({ socialKey, alt, src }) => (
                            <div key={socialKey} className="p-2 rounded-full border flex justify-center items-center">
                                <Image src={src} width={24} height={24} alt={alt} className="svg-icon-img" />
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-between p-2 cursor-pointer">
                        <span>编辑({concatList.length})</span>
                        <ChevronRightIcon className='w-4 h-4' />
                    </div>
                </div>

                <div className="w-full overflow-hidden max-w-4xl dark:border py-2 pl-2 divide-y rounded-2xl shadow-md hover:shadow-xl">
                    <p className='p-2 text-lg'>社交媒体</p>
                    <div className="flex items-center px-2 py-4 gap-3 flex-wrap gap-y-3">
                        {socialSnapList.map(({ socialKey, icon, title }) => (
                            <div key={socialKey} className="rounded-lg flex justify-center items-center cursor-pointer">
                                <Image src={icon} width={36} height={36} alt={title} />
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-between p-2 cursor-pointer">
                        <span>编辑({socialSnapList.length})</span>
                        <ChevronRightIcon className='w-4 h-4' />
                    </div>
                </div>

                <div className="w-full overflow-hidden max-w-4xl dark:border py-2 pl-2 divide-y rounded-2xl shadow-md hover:shadow-xl">
                    <p className='p-2 text-lg'>作品</p>
                    <div className="flex items-center px-2 py-4 gap-3 flex-wrap gap-y-3">
                        {workList.map((item, index) => (
                            <div key={index} className="rounded-lg flex justify-center items-center cursor-pointer">
                                <Image src={item.icon} width={48} height={48} alt={item.name} className='w-10 h-10 object-cover rounded-lg' />
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-between p-2 cursor-pointer">
                        <span>编辑({workList.length})</span>
                        <ChevronRightIcon className='w-4 h-4' />
                    </div>
                </div>
            </div>

            {openEditDialog && <ProfileEditDialog open={openEditDialog} onOpenChange={handleOnOpenEditDialogChange} initialName={profile.userName} />}
        </div>
    );
};

export default Edit;