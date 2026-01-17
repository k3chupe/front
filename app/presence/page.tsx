"use client";
import SearchBar from '@/components/searchbar'
import React, { useState } from 'react'
import Image from 'next/image';
import Result from '@/components/presence/result';

const spotkania = [
  {
    id: 1,
    nazwa: "spot",
    data: "16.04.2004",
  },
  {
    id: 2,
    nazwa: "spot2",
    data:"16.04.2004",
  },
  {
    id: 3,
    nazwa: "spot2",
    data:"16.04.2004",
  }
]

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
    <div className='bg-white text-[#6D5BD0] flex flex-col rounded-lg border border-gray-300'>
      <div className='w-100 p-4 flex w-full justify-between'>
      <SearchBar placeholder="Szukaj w bazie członków..." onSearch={handleSearch} />
        <div className='bg-[#6D5BD0] hover:bg-[#F4F2FF] rounded-md px-4 py-2 text-white border border-[#6D5BD0] hover:text-[#6D5BD0] cursor-pointer'>
          Dodaj Tabele
        </div>
      </div>  
      <div className="overflow-x-auto">
        <div className="min-w-max">
          <div className={`flex px-4 py-2 gap-2 border-b border-gray-300 bg-[#F4F2FF] text-sm text-[#6E6893] items-center`}>
            <div className='w-40'>Imie i nazwisko</div> 
              { spotkania.map(item => (
                <div key={item.id} className='w-flex items-center justify-center'>wpisz date</div> 
              ))}
            </div>  
          <div className="flex-1 flex flex-col overflow-auto">
            <div className=' overflow-auto flex flex-col flex-1'>
                  <Result spotkania={spotkania}/>
            </div>
          </div>
        </div>
      </div>
        <div className="px-4 py-4 border-t border-gray-300 rounded-b-lg bg-[#F4F2FF] items-center text-sm text-[#6E6893] flex gap-15">
          <div className='flex ml-auto items-center '>
            wierwsze na strone: 10
          </div>
          <div>
            
          </div>
          <div className='flex items-center gap-8'>
            <Image src="/left.png" alt="Search Icon" width={5} height={5}  className='cursor-pointer transition duration-200 hover:brightness-60'/>
            <Image src="/right.png" alt="Search Icon" width={5} height={5}  className='cursor-pointer transition duration-200 hover:brightness-60'/>
          </div>
        </div> 
    </div>
  )
}

export default page