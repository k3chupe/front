"use client";
import SearchBar from '@/components/searchbar'
import React, { useState } from 'react'

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
    <div className='bg-white text-[#6D5BD0]'>
      <div className='w-100 p-4 flex w-full justify-between'>
      <SearchBar placeholder="Szukaj w bazie członków..." onSearch={handleSearch} />
      <div className='bg-[#6D5BD0] hover:bg-[#F4F2FF] rounded-md px-4 py-2 text-white border border-[#6D5BD0] hover:text-[#6D5BD0] cursor-pointer'>
        Dodaj członka
      </div>
      </div>  
      <div className="mt-4">
        {/* <ul>
          {filtered.map((name, i) => (
            <li key={i}>{name}</li>
          ))}
        </ul> */}
      </div>  
      <div>
        
      </div>  
    </div>
  )
}

export default page