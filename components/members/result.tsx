import React from 'react'
import Image from 'next/image';

interface ResultProps {
  indeks?: number,
  imie?: string,
  nazwisko?: string,
  email?: string,
  telefon?: number,
  sekcje?: string,
  projekty?: string,
  kierunek?: string,
}

function result({indeks, imie, nazwisko, email, telefon, sekcje, projekty, kierunek}: ResultProps) {
  return (
    <div className="border-b border-gray-200">
      <div className="p-2 px-4 grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr_1fr_auto] items-center gap-2 text-[#6E6893] min-w-[1000px]">
        <div>
          <div className='text-[#25213B] text-md'>{imie} {nazwisko}</div>
          <div>{email}</div>
        </div>
        <div className='text-sm'>{indeks}</div>
        <div className='text-sm'>{telefon}</div>
        <div className='bg-[#CDFFCD] mr-auto px-1 rounded-[100px] flex items-center gap-1 text-sm pr-2'>
          <div className="w-[6px] h-[6px] bg-[#007F00] rounded-full"></div>
          {sekcje}      
        </div>
        <div className='bg-[#E6E6F2] mr-auto px-1 rounded-lg flex items-center gap-1 text-sm pr-2'>
          <div className="w-[6px] h-[6px] bg-[#4A4AFF] rounded-full"></div>
          Projekty koła
        </div>
        <div className='bg-[#FFD9D6] mr-auto px-1 rounded-lg flex items-center gap-1 text-sm pr-2'>
          <div className="w-[6px] h-[6px] bg-[#FF6053] rounded-full"></div>
          Kierunek
        </div>
        <div>
          <div>Zaktualizowano:</div> 
          <div>data</div> 
        </div>

        <div className='pl-4 flex ml-auto items-center justify-end gap-4 min-w-[100px]'>
          <Image src="/pen.png" alt="Search Icon" width={20} height={20} className='cursor-pointer transition duration-200 hover:brightness-60'/>
          <Image src="/trash.png" alt="Search Icon" width={20} height={20} className='cursor-pointer transition duration-200 hover:brightness-60'/>
        </div>

      </div>
    </div>
  )
}

export default result