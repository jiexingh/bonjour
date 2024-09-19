import Image from 'next/image';
import React from 'react'
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

const testimonailsList = [
  {
    id: '66a9dce0-ce02-568c-8bcd-f9affcf81fcf',
    avator: 'https://images.pexels.com/photos/3369526/pexels-photo-3369526.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    name: 'Lou Robinson',
    short: 'Frontent',
    desc: '我是当前项目的Web开发者'
  },
  {
    id: '7fba5968-1dc7-5835-b209-ea5893ab5ff8',
    avator: 'https://images.pexels.com/photos/28167650/pexels-photo-28167650.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    name: 'Nannie Burgess',
    short: 'biggest 创始人',
    desc: '已经付费,很惊艳的产品,向璞玉一样有想象力。'
  },
  {
    id: '9caef366-8ddc-51e6-b2cc-f91201928abb',
    avator: 'https://images.pexels.com/photos/14573486/pexels-photo-14573486.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    name: 'Alfred Porter',
    short: 'Founder',
    desc: '设计优雅、顺畅，是愿意分享的数字名片。'
  },
  {
    id: 'bbe2ca07-63a4-5aa1-8433-ada90c39aa6f',
    avator: 'https://images.pexels.com/photos/27967038/pexels-photo-27967038.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    name: 'Jeremiah Casey',
    short: 'orange 科技创始人',
    desc: '年轻人的第一张名片，有点酷。'
  },
  {
    id: 'e7c6d6a4-9855-5365-9522-d452e5c93932',
    avator: 'https://images.pexels.com/photos/17522554/pexels-photo-17522554.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    name: 'Matthew Maxwell',
    short: 'guide 科技创始人',
    desc: '让名片传递变得酷起来'
  },
  {
    id: '5613e1c9-b86d-5bd1-a91f-113c6949e655',
    avator: 'https://images.pexels.com/photos/18037979/pexels-photo-18037979.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    name: 'Oscar Brooks',
    short: 'massage 编辑',
    desc: '连接现实与虚拟，为创造者打造 未来式 名片'
  },
  {
    id: 'ea82b518-b7d8-5921-9301-088e86361334',
    avator: 'https://images.pexels.com/photos/27798313/pexels-photo-27798313.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    name: 'Augusta Wong',
    short: '知名AI 分享博主',
    desc: '是我用过最惊艳的数字名片产品。'
  },
  {
    id: '7d780041-b8a7-56c3-8765-7b07a8879b2d',
    avator: 'https://images.pexels.com/photos/28209510/pexels-photo-28209510.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    name: 'Francisco Garner',
    short: 'cause Lab Founder',
    desc: '非常 cool 的科技时尚单品。'
  },
  {
    id: '601ccf54-ea79-5505-9095-54604c0a3df7',
    avator: 'https://images.pexels.com/photos/19119918/pexels-photo-19119918.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    name: 'Eugene Reynolds',
    short: 'said Founder',
    desc: 'tell lie silver transportation then early loose wrote dried pocket balloon please double cast cow depth solid poetry easier it offer establish drew trail'
  }
];

const firstColumn = testimonailsList.slice(0,3);
const secondColumn = testimonailsList.slice(3,6);
const thirdColumn = testimonailsList.slice(6,9);

const TestimonailsColumn = (
  props: 
  {
      className?: string;
      testimonails: typeof testimonailsList;
      duration?: number;
  }
) =>{
  return (
    <div className={props.className}>
      <motion.div animate={
        {
          translateY: "-50%"
        }
      } 
      transition={
        {
          duration: props.duration || 10,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop'
        }
      }
      className="flex flex-col gap-6 pb-6 cursor-pointer">
        {
          [...new Array(2)].fill(0).map((_,index)=>(
            <React.Fragment key={index}>
              {
                props.testimonails.map(({id,avator,name,short,desc})=>(
                  <div key={id} className="px-8 py-10 flex flex-col items-start gap-2  border border-solid rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <Image src={avator} alt={name} width={48} height={48} className=' rounded-lg size-12 object-cover'/>
                    <div className="text-left">
                      <h2 className='font-medium tracking-tight leading-5'>{name}</h2>
                      <p className='text-gray-600 tracking-tight leading-5'>{short}</p>
                    </div> 
                    <p className='text-left text-sm w-full line-clamp-2'>{desc}</p>
                  </div>
                ))
              }
            </React.Fragment>
          ))
        }
      </motion.div>
    </div>
  )
}

const Testimonials = () => {
  return (
    <section className=''>
        <div className='container mx-auto text-center'>
          <div className="">
            <h2>😎 Bonjour 的酷朋友们</h2>
            <p>*排名不分先后，都是我们的好朋友</p>
          </div>
          <div className="mt-6 flex lg:grid lg:grid-cols-3 lg:p-4 justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
              <TestimonailsColumn testimonails={firstColumn} duration={15}/>
              <TestimonailsColumn testimonails={secondColumn} className='hidden md:block' duration={19}/>
              <TestimonailsColumn testimonails={thirdColumn} className='hidden lg:block' duration={17}/>
          </div>
         
        </div>
    </section>
  )
}

export default Testimonials