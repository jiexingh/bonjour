"use client";

import PlatformDrawer from '@/components/PlatformDrawer';
import ProfileCard from '@/components/ProfileCard';
import { concatList } from '@/constants/index';
import React, { useState } from 'react'

const Profile = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [currentDrawerItem, setCurrentDrawerItem] = useState<ConcatMeProps | null>(null);

  const handleOnOpenChange = (value:boolean) =>{
    setOpenDrawer(value)
  }
  
  const handleConcatTap = (index:number)=>{
    setCurrentDrawerItem(concatList[index])
    setOpenDrawer(true)
  }
  
  return (
    <div className="container mx-auto">
      <PlatformDrawer platformItem={currentDrawerItem} open={openDrawer} onOpenChange={handleOnOpenChange}/>
      <ProfileCard isResponsive={true} concatList={concatList} onConcatTap={handleConcatTap}/>
    </div>
  )
}

export default Profile