import React from 'react'
import Image from 'next/image';

type resultProps = {
  kwota: string,
  nazwa: string,
  osoba: string,
  data: string
}

function result({kwota, nazwa, osoba, data}: resultProps) {
  return (
  <div className="px-4 p-2 border-b border-gray-300 bg-white 
    grid grid-cols-[1fr_1fr_1fr_1fr_0.5fr] items-center text-sm text-[#6E6893]">
    <div className='flex flex-col  justify-center'>
      <div className=''>{kwota} zl</div> 
      <div >PLN</div> 
    </div>
    <div className='flex items-center'>{nazwa}</div> 
    <div className='flex flex-col '>
      <div className=''>{osoba}</div> 
    </div>
    <div className='flex items-center '>{new Date(data).toLocaleDateString("pl-PL")}</div> 
    <div className='flex ml-auto items-center gap-4'>
      <Image src="/pen.png" alt="Search Icon" width={20} height={20} className='cursor-pointer transition duration-200 hover:brightness-60'/>
      <Image src="/trash.png" alt="Search Icon" width={20} height={20} className='cursor-pointer transition duration-200 hover:brightness-60'/>
    </div>
  </div>  
  )
}

export default result