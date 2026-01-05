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
          Dodaj Tabele
        </div>
      </div>  
      <div className="px-4 p-2 border border-gray-300 bg-[#F4F2FF] 
      grid grid-cols-[40px_15%_15%_15%_15%_15%_15%] items-center text-sm text-[#6E6893]">
          <div className='pt-1'>
            <input type="checkbox" />
          </div>
          <div className=''>Imie i nazwisko</div> 
          <div className='flex items-center justify-center'>data</div> 
          <div className='flex items-center justify-center'>wpisz date</div> 
          <div className='flex items-center justify-center'>wpisz date</div> 
          <div className='flex items-center justify-center'> wpisz date</div> 
          <div className='flex items-center justify-center'>wpisz date</div> 
          <div></div>
      </div>  

      <div className="flex-1 flex flex-col overflow-auto">

        <div className="flex flex-col flex-1 overflow-auto ">
          <div className="p-2 px-4 border-b-2 border-gray-200 text-[#6E6893]
            grid grid-cols-[40px_15%_15%_15%_15%_15%_15%] items-center border-x-2">
            <div className='pt-1'>
              <input type="checkbox" />
            </div>
            <div>
              <div className='text-[#25213B] text-md'>Imie</div>
              <div>email</div>
            </div>
            <div className='flex items-center justify-center'>
              <input type="checkbox" />
            </div>
            <div className='flex items-center justify-center'>
              <input type="checkbox" />
            </div>
            <div className='flex items-center justify-center'>
              <input type="checkbox" />
            </div>
            <div className='flex items-center justify-center'>
              <input type="checkbox" />
            </div>
            <div className='flex items-center justify-center'>
              <input type="checkbox" />
            </div>
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
        
        {/* {filtered.map((name, index) => (
          <div key={index} className="p-2 border-b border-gray-200">
            {name}

          </div>
        ))} */}
      </div>  
    </div>
  )
}

export default page