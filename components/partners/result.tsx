import React from 'react'
import Image from 'next/image';

function result() {
  return (
                <div className="px-4 p-2 border-b border-gray-200 text-[#6E6893]
              grid grid-cols-[40px_15%_10%_10%_10%_15%_15%_auto] items-center  ">
                <div className='pt-1'>
                  <input type="checkbox" />
                </div>
                <div className='text-[#25213B] text-md'>firma</div>
                <div className='text-sm'>telefon</div>
                <div className='text-sm'>e-mail</div>
                <div className='bg-[#CDFFCD] mr-auto px-1 rounded-[100px] flex items-center gap-1 text-sm pr-2'>
                  <div className="w-[6px] h-[6px] bg-[#007F00] rounded-full"></div>
                  czekamy
                </div>
                <div>
                  <div className='text-[#25213B] text-md'>Imie</div>
                  <div>email</div>
                </div>
                <div>
                  <div className='text-[#25213B] text-md'>$200</div>
                  <div>USD</div>
                </div>
    
                <div className='flex ml-auto items-center gap-4'>
                  <Image src="/pen.png" alt="Search Icon" width={20} height={20} className='cursor-pointer transition duration-200 hover:brightness-60'/>
                  <Image src="/trash.png" alt="Search Icon" width={20} height={20} className='cursor-pointer transition duration-200 hover:brightness-60'/>
                </div>
    
                </div>
  )
}

export default result