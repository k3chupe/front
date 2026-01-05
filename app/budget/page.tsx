"use client";
import SearchBar from '@/components/searchbar'
import React, { useState } from 'react'
import Image from 'next/image';

function page() {
    const data = ["Jan", "Anna", "Piotr", "Kasia"];
    const [searchText, setSearchText] = useState("");

    const filtered = data.filter(name =>
      name.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleSearch = (value: string) => {
    setSearchText(value);
    console.log("Wpisany tekst:", value);
  };

  return (
    <div className='bg-white text-[#6D5BD0] h-screen flex flex-col'>
      <div className='w-100 p-4 flex w-full justify-between'>
      <SearchBar placeholder="Szukaj w bazie członków..." onSearch={handleSearch} />
      <div className='bg-[#6D5BD0] hover:bg-[#F4F2FF] rounded-md px-4 py-2 text-white border border-[#6D5BD0] hover:text-[#6D5BD0] cursor-pointer'>
        Dodaj Kwotę
      </div>
      </div>  
      <div className=" border border-gray-300 bg-[#F4F2FF] 
      grid grid-cols-[50%_50%] items-center text-sm text-[#6E6893]">
        <div className='flex flex-col border-r'> 
          <div className='justify-center flex py-4'>
            Przychody
          </div>  
          <div className=' px-4 grid grid-cols-[25%_25%_25%_25%] border-t border-gray-300 p-2 text-sm text-[#6E6893] items-center'>
            <div>
              Kwota
            </div>
            <div>
              Nazwa
            </div>
            <div>
              Osoba Odpowiedzialna
            </div>
            <div>
              data dodania
            </div>
          </div>
        </div> 
        <div className='flex flex-col border-l'> 
          <div className='justify-center flex py-4'>
            Wydatki
          </div>  
          <div className='px-4 grid grid-cols-[25%_25%_25%_25%] border-t border-gray-300 p-2 text-sm text-[#6E6893] items-center'>
            <div>
              Kwota
            </div>
            <div>
              Nazwa
            </div>
            <div>
              Osoba Odpowiedzialna
            </div>
            <div>
              data dodania
            </div>
          </div> 
        </div> 
        <div></div>
      </div>  
       <div className='flex flex-1 border border-gray-300 '>
        <div className='flex-1 flex justify-start items-center border-r px-4'>
          pierwza kolumna
        </div>
        <div className='flex-1 flex justify-end items-center px-4 border-l'>
          druga kolumna
        </div>
      </div>
      <div className="px-4 py-4 border-b border-x border-gray-300 bg-[#F4F2FF] items-center text-sm text-[#6E6893] flex gap-15">
        <div className='flex ml-auto items-center '>
          wierwsze na strone: 10
        </div>
        <div>
          1-10 z 100
        </div>
        <div className='flex items-center gap-8'>
          <Image src="/left.png" alt="Search Icon" width={5} height={5} className='cursor-pointer transition duration-200 hover:brightness-60'/>
          <Image src="/right.png" alt="Search Icon" width={5} height={5} className='cursor-pointer transition duration-200 hover:brightness-60'/>
        </div>
      </div>
    </div>
  )
}

export default page