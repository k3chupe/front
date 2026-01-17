import React from 'react'
import Image from 'next/image';

type ResultProps = {
  item: any;
  onDelete: (item: any) => void;
  loadPage: () => void;
};

function result({ item, onDelete, loadPage }: ResultProps) {
  return (
  <div className="px-4 p-2 border-b border-gray-300 bg-white 
    grid grid-cols-[1fr_1fr_1fr_1fr_0.5fr] items-center text-sm text-[#6E6893]">
    <div className='flex flex-col  justify-center'>
      <div className=''>{item.kwota} zl</div> 
      <div >PLN</div> 
    </div>
    <div className='flex items-center'>{item.nazwa}</div> 
    <div className='flex flex-col '>
      <div className=''>{item.osoba_dane.imie} {item.osoba_dane.nazwisko}</div> 
    </div>
    <div className='flex items-center '>{new Date(item.data).toLocaleDateString("pl-PL")}</div> 
    <div className='flex ml-auto items-center gap-4'>
      <Image src="/trash.png" alt="Search Icon" width={20} height={20} className='cursor-pointer transition duration-200 hover:brightness-60'
      onClick={() => {
        onDelete(item);
        loadPage()
      }}
      />
    </div>
  </div>  
  )
}

export default result