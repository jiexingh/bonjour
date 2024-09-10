import React from 'react'
import { Button } from './ui/button'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

const CallAction = () => {
    const router = useRouter();

    const handleBtnTap = ()=> {
        router.push('/edit')
    }
  return (
    <section className='flex flex-col items-center gap-6 bg-gradient-to-b from-white dark:from-black to-[#D2DCFF] pt-24 pb-20'>
        <div className="container px-4 text-center">
            <h2 className='section-heading leading-8'>更多伙伴正在加入...</h2>
            <p className='mt-2 text-secondary-color'>试想有一个社区,充满和你我一样，年轻、有创造力、有活力的个体</p>
        </div>
       
        <Button onClick={()=> handleBtnTap()} size="lg" className=''>
           <span>免费入驻</span>
           <ArrowRightIcon className=" ml-2 size-4"/>
        </Button> 
    </section>
  )
}

export default CallAction