import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerClose
} from "@/components/ui/drawer";
import Image from 'next/image';
import useCopyToClipboard from '@/lib/hooks/useCopyToClipboard';


interface PlatformDrawerProps {
  platformItem: ConcatMeProps | null;
  open: boolean;
  onOpenChange: (open: boolean) => void
}

const PlatformDrawer = ({platformItem, open, onOpenChange}: PlatformDrawerProps) => {
  const { copied, copy } = useCopyToClipboard();
  
  return (
     <Drawer open={open} onOpenChange={onOpenChange}>
     
      <DrawerContent>
        <div className="mx-auto w-full max-w-md">
          <DrawerHeader>
            <DrawerTitle>联系我</DrawerTitle>
            <DrawerDescription>请根据下方提示进行对应操作.</DrawerDescription>
          </DrawerHeader>

          <div className="p-4 pb-0">
            <div className="flex flex-col items-center">
              {
                platformItem && 
                platformItem.valueType == 'text' ? (<Image src={platformItem.src} width={30} height={30} alt={platformItem.alt}/>) :
                platformItem?.valueType == 'img' ? (<Image src={platformItem.value} width={120} height={120} alt={platformItem.alt} className="w-32 h-32 shadow-md rounded-md"/>)  : null
              }
               
              
              {
                platformItem?.valueType == 'text' ?
                (
                  <div className='mt-4 flex flex-col items-center'>
                     <p className='text-2xl'>{ platformItem?.alt}</p>
                      <p className='text-gray-500'>{ platformItem?.value }</p>
                  </div>
                ) :null
              }
              
            </div>
          </div>

          <DrawerFooter>
            {
              platformItem?.valueType == 'text' ? (<Button onClick={() => copy(platformItem.value)}>复制{copied? '成功':''}</Button>) : (
             <DrawerClose asChild>
                <Button>关闭</Button>
            </DrawerClose>)
            }
            
            <p className='text-sm text-center text-slate-500'>👻 复制内容到浏览器或使用对应软件搜索</p>        
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default PlatformDrawer
