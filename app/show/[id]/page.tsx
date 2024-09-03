"use client";

import InfoDetail from '@/components/InfoDetail'
import { concatList } from '@/constants/index';
import React from 'react'

const page = () => {
   const handleConcatTap = (index:number)=>{
      console.log("TODO: 联系我 当前索引",index)
      console.log(concatList[index])
   }
  return (
    <div className="container mx-auto">
      <InfoDetail isResponsive={true} concatList={concatList} onConcatTap={handleConcatTap}/>
    </div>
  )
}

export default page