import HeartIcon from '@/components/Icons/HeartIcon'
import React from 'react'

export default function First() {
  return (
    <div className="p-5">
        <div className="border-4 h-[560px] border-white"> 
            <div className="text-center pt-5">
               <h1 className="text-white text-8xl uppercase"> Happy Birthday </h1>
               <h2 className="text-white text-xl uppercase">To</h2>
               <h3 className="text-white text-2xl uppercase">My Dear Pondatti <HeartIcon className="w-5 h-5"/></h3>
            </div>
        </div>
    </div>
  )
}
