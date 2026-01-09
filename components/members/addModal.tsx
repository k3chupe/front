'use client'
import Image from 'next/image';
import React from 'react'
import { useState, useEffect } from 'react';
import Select from '../select';
import AddModal2 from './addModal2';

type ModalProps = {
  onClose: () => void;
};

type Kierunek = {
  id: number;
  nazwa: string;
  opis: string;
};

type Projekt = {
  id: number;
  nazwa: string;
  opis: string;
};

type Sekcje = {
  id: number;
  nazwa: string;
  opis: string;
};




function addModal({onClose}: ModalProps) {
  const [openKierunekSelect, setOpenKierunekSelect] = useState(false);
  const [isKierunekModalOpen, setIsKierunekModalOpen] = useState(false);
  const [isSekcjaModalOpen, setIsSekcjaModalOpen] = useState(false);
  const [isProjektModalOpen, setIsProjektModalOpen] = useState(false);

  const [selectedKierunek, setSelectedKierunek] = useState("");
  const [selectedSekcja, setSelectedSekcja] = useState("");
  const [selectedProjekt, setSelectedProjekt] = useState("");
  const [kierunki, setKierunki] = useState<string[]>([]);
  const [projekty, setProjekty] = useState<string[]>([]);
  const [sekcje, setSekcje] = useState<string[]>([]);

  const addKierunek = async (nazwa: string, opis: string) => {
  try {
    const res = await fetch("http://localhost:8000/api/kierunki/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nazwa, opis }),
    });

    if (!res.ok) throw new Error("Błąd dodawania kierunku");

    const data = await res.json();
    
    setKierunki((prev) => [...prev, data.nazwa]);
    setIsKierunekModalOpen(false); 
  } catch (err) {
    console.error(err);
  }
};

const addSekcja = async (nazwa: string, opis: string) => {
  try {
    const res = await fetch("http://localhost:8000/api/sekcje/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nazwa, opis }),
    });

    if (!res.ok) throw new Error("Błąd dodawania kierunku");

    const data = await res.json();
    
    setSekcje((prev) => [...prev, data.nazwa]);
    setIsSekcjaModalOpen(false);
  } catch (err) {
    console.error(err);
  }
};

const addProjekt = async (nazwa: string, opis: string) => {
  try {
    const res = await fetch("http://localhost:8000/api/projekty/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nazwa, opis }),
    });

    if (!res.ok) throw new Error("Błąd dodawania kierunku");

    const data = await res.json();
    
    setProjekty((prev) => [...prev, data.nazwa]);
    setIsProjektModalOpen(false); 
  } catch (err) {
    console.error(err);
  }
};

const addMember = async (imie: string, nazwisko: string, indeks: number, telefon: number, sekcja: string, projekt: string, kierunek: string) => {
  try {
    const res = await fetch("http://localhost:8000/api/projekty/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({imie, nazwisko, indeks, telefon, sekcja, projekt, kierunek}),
    });

    if (!res.ok) throw new Error("Błąd dodawania kierunku");

    const data = await res.json();
   
    setProjekty((prev) => [...prev, data.nazwa]);
    setIsProjektModalOpen(false); 
  } catch (err) {
    console.error(err);
  }
};



  useEffect(() => {
    fetch("http://localhost:8000/api/kierunki/")
      .then((res) => res.json())
      .then((data) => {
        const names = data.results.map((k: Kierunek) => k.nazwa);
        setKierunki(names);
      })
      .catch((err) => console.error("Błąd pobierania kierunków:", err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/api/projekty/")
    .then((res) => res.json())
    .then((data) =>{
      const names = data.results.map((p: Projekt) => p.nazwa);
      setProjekty(names);
    })
    .catch((err) => console.error("Błąd pobierania projektów:", err))
   }, []);

    useEffect(() => {
    fetch("http://localhost:8000/api/sekcje/")
    .then((res) => res.json())
    .then((data) =>{
      const names = data.results.map((s: Sekcje) => s.nazwa);
      setSekcje(names);
    })
    .catch((err) => console.error("Błąd pobierania projektów:", err))
   }, []);
  return (
    <div onClick={() => onClose()} className='fixed bg-black/50 inset-0 flex justify-center items-center'>
      <div className='bg-white flex flex-col p-6 rounded-lg' onClick={(e) => e.stopPropagation()}>
        <h2 className='text-xl mb-4 text-[#6D5BD0]'>Dodaj nowego członka</h2>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Imię" 
            className="border border-gray-300 rounded p-2 mt-2 w-full"
          />
          <input 
            type="text" 
            placeholder="Nazwisko" 
            className="border border-gray-300 rounded p-2 mt-2 w-full"
          />
        </div>

        <input 
          type="text" 
          placeholder="Indeks" 
          className="border border-gray-300 rounded p-2 mt-2 w-full"
        />

        <input 
          type="text" 
          placeholder="Numer telefonu" 
          className="border border-gray-300 rounded p-2 mt-2 w-full"
        />
        <Select
          label="Wybierz sekcję"
          options={sekcje}
          value={selectedSekcja}
          onChange={(v) => setSelectedSekcja(v)}
          onAddNew={() => setIsSekcjaModalOpen(true)}
        />
          <Select
          label="Wybierz projekt"
          options={projekty}
          value={selectedProjekt}
          onChange={(v) => setSelectedProjekt(v)}
          onAddNew={() => setIsProjektModalOpen(true)}
        />
          <Select
          label="Wybierz kierunek"
          options={kierunki}
          value={selectedKierunek}
          onChange={(v) => setSelectedKierunek(v)}
          onAddNew={() => setIsKierunekModalOpen(true)}
        />
        <div className='flex w-full justify-between mt-2'>
          <div onClick={() =>onClose()} className='bg-[#6D5BD0] hover:bg-[#F4F2FF] rounded-md px-4 py-2 text-white border border-[#6D5BD0] hover:text-[#6D5BD0] cursor-pointer'>
              dodaj
          </div>
          <div onClick={() =>onClose()} className='bg-[#6D5BD0] hover:bg-[#F4F2FF] rounded-md px-4 py-2 text-white border border-[#6D5BD0] hover:text-[#6D5BD0] cursor-pointer'>
              wróć
          </div>
        </div>
      </div>
      {isKierunekModalOpen && <AddModal2 onAdd={addKierunek} name='Dodaj nowy Kierunek' onClose={() => setIsKierunekModalOpen(false)} />}
      {isProjektModalOpen && <AddModal2 onAdd={addProjekt} name='Dodaj nowy Projekt' onClose={() => setIsProjektModalOpen(false)} />}
      {isSekcjaModalOpen && <AddModal2 onAdd={addSekcja} name='Dodaj nową sekcje' onClose={() => setIsSekcjaModalOpen(false)} />}
    </div>
  )
}

export default addModal