'use client'
import Image from 'next/image';
import React from 'react'
import { useState, useEffect } from 'react';
import Select from '../select';

type ModalProps = {
  onClose: () => void
};

function addModal({onClose}: ModalProps) {
  const [selectedNazwa, setSelectedNazwa] = useState("");
  const [selectedKwota, setSelectedKwota] = useState<number | "">("");
  const [selectedSekcja, setSelectedSekcja] = useState<number | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});
  const [isLoading, setIsLoading] = useState(false);

  const options = [{nazwa: "Przychód", id: 1}, {nazwa:"Wydatek", id: 2}];

  return (
    <div onClick={() => onClose()} className='fixed bg-black/50 inset-0 flex justify-center items-center'>
      <div className='bg-white flex flex-col p-6 rounded-lg' onClick={(e) => e.stopPropagation()}>
        <h2 className='text-xl mb-4 text-[#6D5BD0]'>
          Dodaj nową pozycje
        </h2>
        <Select
        label="Wybierz typ"
        options={options.map(s => ({
            label: s.nazwa,
            value: s.id
        }))}
        value={selectedSekcja}
        onChange={setSelectedSekcja}
        />
        <input 
        type="number" 
        placeholder="Wpisz kwotę" 
        className="border border-gray-300 rounded p-2 mt-2 w-full"
        value={selectedKwota}
        onChange={(e) =>
            setSelectedKwota(
            e.target.value === "" ? "" : Number(e.target.value)
            )
        }
        />
        {errors.indeks && <p className="text-red-500 text-sm mt-1">{errors.indeks.join(" ")}</p>}


        <input 
        type="text"
        placeholder="Podaj nazwę" 
        className="border border-gray-300 rounded p-2 mt-2 w-full"
        value={selectedNazwa}
        onChange={(e) =>
            setSelectedNazwa(e.target.value)
        }      
        />
        {errors.telefon && <p className="text-red-500 text-sm mt-1">{errors.telefon.join(" ")}</p>}

        <Select
        label="Wybierz typ"
        options={options.map(s => ({
            label: s.nazwa,
            value: s.id
        }))}
        value={selectedSekcja}
        onChange={setSelectedSekcja}
        />

        <div className='flex w-full justify-between mt-2'>
          <div 
            className='bg-[#6D5BD0] hover:bg-[#F4F2FF] rounded-md px-4 py-2 text-white border border-[#6D5BD0] hover:text-[#6D5BD0] cursor-pointer'
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
            ) : (
              <div>Dodaj</div>
            )}
          </div>
          <div onClick={() =>onClose()} className='bg-[#6D5BD0] hover:bg-[#F4F2FF] rounded-md px-4 py-2 text-white border border-[#6D5BD0] hover:text-[#6D5BD0] cursor-pointer'>
              wróć
          </div>
        </div>
      </div>
    </div>
  )
}

export default addModal