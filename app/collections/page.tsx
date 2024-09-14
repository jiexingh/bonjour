"use client";
import TabBar from '@/components/TabBar';
import ThemeToggle from '@/components/ThemeToggle';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const collectionList = [
  {
    bonjourId:'13d22b2a-ca6f-5ed3-8238-b24b8b1076d3',
    userId: '51f0193c-f035-57bc-bdc1-92aa4ec4a44c',
    avator: '/assets/avator/avator-1.jpeg',
    name: 'Cynthia Rodgers',
    short: 'Frontend / iOS Developer / XR Content Creator',
    desc: ['👻 躺平爱好者','☁️ 旅游梦想家','💻 Front-end development engineer']
  },
  {
    bonjourId:'e6c59f36-944b-5734-abba-98d69352b8a4',
    userId: 'e85deac4-03dc-5854-8662-d73104242696',
    avator: 'https://images.pexels.com/photos/18037979/pexels-photo-18037979.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    name: 'Maurits Bausenhart',
    short: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    desc: ['XR 创意开发','知名艺术家']
  },
  {
    bonjourId:'aefbe568-9c86-59fb-9a0d-8b50a670846d',
    userId: 'a0e33d49-0323-5dc8-8ca1-a29879118f01',
    avator: 'https://images.pexels.com/photos/19315760/pexels-photo-19315760.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    name: 'Blanche Norris',
    short: 'Lorem ipsum dolor sit,',
    desc: ['']
  },
  {
    bonjourId:'d0aa04ce-f0c3-51f2-981f-183121109876',
    userId: '9776b3a0-31f1-5bf4-b4ba-17816807c164',
    avator: 'https://images.pexels.com/photos/19119918/pexels-photo-19119918.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    name: 'Leonard Chambers',
    short: 'Lorem ipsum dolor sit,',
    desc: ['Lorem ipsum dolor sit,','Lorem ipsum dolor']
  },
  {
    bonjourId:'2a024246-1871-57a7-b127-eeb369a84e91',
    userId: '5e68e35e-1376-5486-b227-35a220beadde',
    avator: 'https://images.pexels.com/photos/19050854/pexels-photo-19050854.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    name: 'Edgar McDonald',
    short: 'Lorem ipsum dolor sit,',
    desc: ['Lorem ipsum dolor sit,','Lorem ipsum dolor']
  },
  {
    bonjourId:'983a2949-1502-5896-a261-b03516bbeb95',
    userId: '208084a8-d7cc-53d5-9fe7-34066d0b6a60',
    avator: 'https://images.pexels.com/photos/27060162/pexels-photo-27060162.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    name: 'Guzman',
    short: 'Lorem ipsum dolor sit,',
    desc: ['Lorem ipsum dolor sit,','Lorem ipsum dolor']
  },
  {
    bonjourId:'46ed1e4c-3b57-5378-a9df-5a726bb12b66',
    userId: 'cfcc7749-501a-5e38-866f-ad3822cd671b',
    avator: 'https://images.pexels.com/photos/27635097/pexels-photo-27635097.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    name: 'Edgar',
    short: 'Lorem ipsum dolor sit,',
    desc: ['Lorem ipsum dolor sit,','Lorem ipsum dolor']
  }
]

const Collections = () => {
  const router = useRouter();

  const handleItemTap = (index:number)=>{
    const {userId, bonjourId} = collectionList[index];
    router.replace(`/profile?userId=${userId}&bonjourId=${bonjourId}`);
  };

  return (
    <div className='container mx-auto min-h-screen'>
      <div className="container sticky z-20 top-0 backdrop-blur-sm p-2 flex justify-between items-center">
        <Link href="/" >
          <p className='text-xl md:text-2xl font-medium animate-slide-top'>👋🏻 Bonjour!</p>   
        </Link>
        <ThemeToggle />
      </div>
  
      <div className="min-h-screen p-5 animate-slide-top">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {collectionList.map((collection, index) => (
            <div onClick={()=> handleItemTap(index)} key={collection.userId} className="flex flex-col items-start gap-2 border rounded-2xl p-4 shadow-sm hover:shadow-md cursor-pointer">
              <Image src={collection.avator} alt='avator' width={60} height={60} className="size-16 rounded-full object-cover" />

              <p className='w-full font-bold truncate'>{ collection.name }</p>
              <p className='w-full truncate text-sm'>{ collection.desc }</p>
              <p className='w-full truncate text-sm'>{ collection.desc.join(',') }</p>
            </div>
          ))}
        </div>
      </div>
      <TabBar />
    </div>
  );
};

export default Collections;