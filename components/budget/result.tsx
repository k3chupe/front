import React from 'react'
import Image from 'next/image';

function result() {
  return (
        <div className="px-4 p-2 border-b border-gray-300 bg-white 
              grid grid-cols-[20%_20%_20%_20%_auto] items-center text-sm text-[#6E6893]">
                <div className='flex flex-col  justify-center'>
                  <div className=''>5000 zl</div> 
                  <div >PLN</div> 
                </div>
                <div className='flex items-center'>Od dziekana</div> 
                <div className='flex flex-col '>
                  <div className=''>5000 zl</div> 
                  <div >PLN</div> 
                </div>
                <div className='flex items-center '>02.03.2025</div> 
                <div className='flex ml-auto items-center gap-4'>
                  <Image src="/pen.png" alt="Search Icon" width={20} height={20} className='cursor-pointer transition duration-200 hover:brightness-60'/>
                  <Image src="/trash.png" alt="Search Icon" width={20} height={20} className='cursor-pointer transition duration-200 hover:brightness-60'/>
                </div>
              </div>  
  )
}

export default result