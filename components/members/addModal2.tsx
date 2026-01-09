'use client'
import Image from 'next/image';
import React from 'react'
import { useState, useEffect } from 'react';
import Select from '../select';

type ModalProps = {
  onClose: () => void;
  name: string;
  onAdd: (nazwa: string, opis: string) => void;

};


function addModal({onClose, name, onAdd}: ModalProps) {
  const [nazwa, setNazwa] = useState("");
  const [opis, setOpis] = useState("");
  return (
    <div onClick={() => onClose()} className='fixed bg-black/50 inset-0 flex justify-center items-center'>
      <div className='bg-white flex flex-col p-6 rounded-lg' onClick={(e) => e.stopPropagation()}>
        <h2 className='text-xl mb-4 text-[#6D5BD0]'>{name}</h2>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="nazwa" 
            className="border border-gray-300 rounded p-2 mt-2 w-full"
            value={nazwa}
            onChange={(e) => setNazwa(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="opis" 
            className="border border-gray-300 rounded p-2 mt-2 w-full"
            value={opis}
            onChange={(e) => setOpis(e.target.value)}
          />
        </div>
        <div className='flex w-full justify-between mt-2'>
          <div onClick={() =>onAdd(nazwa, opis)} className='bg-[#6D5BD0] hover:bg-[#F4F2FF] rounded-md px-4 py-2 text-white border border-[#6D5BD0] hover:text-[#6D5BD0] cursor-pointer'>
              dodaj
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