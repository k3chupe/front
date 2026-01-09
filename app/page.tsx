"use client";
import SearchBar from '@/components/searchbar'
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Result from '@/components/members/result';
import AddModal from '@/components/members/addModal';

function page() {
  const [members, setMembers] = useState<any[]>([]);
  const [searchText, setSearchText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 10;


  useEffect(() => {
  fetch("http://localhost:8000/api/lista-czlonkow/")
    .then(res => res.json())
  .then(data => {
    setMembers(data.results || []);
  })
    .catch(err => console.error("Błąd pobierania:", err));
  }, []);

  const filtered = members.filter(member =>
    `${member.czlonek_imie} ${member.czlonek_nazwisko}`
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const pageResults = filtered.slice(startIndex, endIndex);

  const handleSearch = (value: string) => {
    setSearchText(value);
    console.log("Wpisany tekst:", value);
  };

  const handleNext = () => {
    if(endIndex < filtered.length){
      setPage(prev => prev + 1)
    }
  }

  const handlePrev = () => {
    if(page > 1){
      setPage(prev => prev - 1)
    }
  }

  return (
    <div className='bg-white text-[#6D5BD0] h-screen flex flex-col rounded-lg border border-gray-300'>
      <div className='w-100 p-4 flex w-full justify-between'>
      <SearchBar placeholder="Szukaj w bazie członków..." onSearch={handleSearch} />
      <div onClick={() =>setIsOpen(true)} className='bg-[#6D5BD0] hover:bg-[#F4F2FF] rounded-md px-4 py-2 text-white border border-[#6D5BD0] hover:text-[#6D5BD0] cursor-pointer'>
        Dodaj członka
      </div>
      </div>  
      <div className="px-4 p-2 border-y border-gray-300 bg-[#F4F2FF] 
      grid grid-cols-[40px_15%_10%_10%_10%_15%_15%_15%_auto] items-center text-sm text-[#6E6893]">
          <div className='pt-1'>
            <input type="checkbox" />
          </div>
          <div className=''>Imie i nazwisko</div> 
          <div className=''>indeks</div> 
          <div>Telefon</div> 
          <div>Sekcje</div> 
          <div>Projekty</div> 
          <div>Kierunek</div> 
          <div></div>
          <div className='flex ml-auto items-center'>
            <Image src="/more.png" alt="Search Icon" width={6} height={20} className='cursor-pointer transition duration-200 hover:brightness-60'/>
          </div>
      </div>  

        <div className="flex-1 flex flex-col overflow-auto">
            {pageResults.map((member, index) => (
            // <div key={index} className="grid grid-cols-[40px_15%_10%_10%_10%_15%_15%_15%_auto] p-2 border-b border-gray-200">
            //   <input type="checkbox" />
            //   <div>{member.czlonek_imie} {member.czlonek_nazwisko}</div>
            //   <div>{member.indeks}</div>
            //   <div>{member.telefon || "-"}</div>
            //   <div>{member.sekcja_nazwa || "-"}</div>
            //   <div>{member.projekt_nazwa || "-"}</div>
            //   <div>{member.kierunek_nazwa || "-"}</div>
            //   <div>...</div>
              <Result 
              key={index} 
              indeks={member.indeks} 
              imie={member.czlonek_imie} 
              nazwisko={member.czlonek_nazwisko} 
              email={member.email} telefon={member.telefon} 
              sekcje={member.sekcja_nazwa} 
              projekty={member.projekt_nazwa} 
              kierunek={member.kierunek_nazwa}
              />
            // </div>
            ))}
        </div>
        <div className="px-4 py-4 border-t border-gray-300 rounded-b-lg bg-[#F4F2FF] items-center text-sm text-[#6E6893] flex gap-15">
          <div className='flex ml-auto items-center '>
            wierwsze na strone: 10
          </div>
          <div>
            {1+(page-1)*10}-{10+(page-1)*10}
          </div>
          <div className='flex items-center gap-8'>
            <Image src="/left.png" alt="Search Icon" width={5} height={5} onClick={handlePrev} className='cursor-pointer transition duration-200 hover:brightness-60'/>
            <Image src="/right.png" alt="Search Icon" width={5} height={5} onClick={handleNext} className='cursor-pointer transition duration-200 hover:brightness-60'/>
          </div>
        </div>
        
      {isOpen && <AddModal onClose={() => setIsOpen(false)} />}
    </div>
  )
}

export default page