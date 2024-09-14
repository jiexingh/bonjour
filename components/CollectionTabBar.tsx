"use client";

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { sleep } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const CollectionTabBar = () => {
    const [isVisible, setIsVisible] = useState(true); // 默认显示
    const timeoutRef = useRef<NodeJS.Timeout | null>(null); // 使用 ref 存储 timeoutId

    const handleScroll = useCallback(() => {
        if (isVisible) {
            setIsVisible(false); // 用户滚动时隐藏组件
        }

        // 清理之前的定时器
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // 在用户停止滚动后显示组件
        timeoutRef.current = setTimeout(() => {
            setIsVisible(true); // 停止滚动后显示组件
        }, 500); // 设置静止时间
    }, [isVisible]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [handleScroll]);
    
    const { toast } = useToast();
    const router = useRouter();
    
    const handleClick = async ()=>{
        const timeout = 650;
        toast({ duration: timeout, description: "保存名片夹成功" });
        await sleep(timeout);
        console.log('保存到名片夹')
        router.replace('/collections')
    }

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : '200%' }} // 根据 isVisible 控制 Y 轴位置
            transition={{ duration: 0.5, ease: "easeInOut" }} // 动画效果
            className="fixed container mx-auto z-10 bottom-6 flex justify-center py-6 px-4"
        >
            <div onClick={()=> handleClick()} className="w-full backdrop-blur-sm rounded-2xl py-4 flex justify-around items-center border">
                <Button>👉 保存到名片夹</Button>
            </div>
        </motion.div>
    );
};

export default CollectionTabBar;