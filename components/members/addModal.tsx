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
  const [isKierunekModalOpen, setIsKierunekModalOpen] = useState(false);
  const [isSekcjaModalOpen, setIsSekcjaModalOpen] = useState(false);
  const [isProjektModalOpen, setIsProjektModalOpen] = useState(false);

  const [selectedImie, setSelectedImie] = useState("");
  const [selectedNazwisko, setSelectedNazwisko] = useState("");
const [selectedIndeks, setSelectedIndeks] = useState<number | "">("");
const [selectedTelefon, setSelectedTelefon] = useState<number | "">("");


  const [selectedMail, setSelectedMail] = useState("");
  const [selectedKierunek, setSelectedKierunek] = useState<number | null>(null);
  const [selectedSekcja, setSelectedSekcja] = useState<number | null>(null);
  const [selectedProjekt, setSelectedProjekt] = useState<number | null>(null);
  const [kierunki, setKierunki] = useState<Kierunek[]>([]);
  const [projekty, setProjekty] = useState<Projekt[]>([]);
  const [sekcje, setSekcje] = useState<Sekcje[]>([]);
  
const addMember = async () => {
  try {
    const payload = {
      imie: selectedImie,
      nazwisko: selectedNazwisko,
      e_mail: selectedMail,
      indeks: selectedIndeks || null,
      telefon: selectedTelefon || null,
      kierunek: selectedKierunek,
      sekcja: selectedSekcja,
      projekt: selectedProjekt,
    };

    const res = await fetch("http://localhost:8000/api/czlonkowie/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error(err);
      return;
    }

    onClose();
  } catch (err) {
    console.error(err);
  }
};


  const addKierunek = async (nazwa: string, opis: string) => {
  try {
    const res = await fetch("http://localhost:8000/api/kierunki/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        nazwa,
        opis 
        }),
    });

    if (!res.ok) throw new Error("Błąd dodawania kierunku");

    const data = await res.json();
    
    setKierunki(prev => [...prev, data]);
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
    
    setSekcje(prev => [...prev, data]);
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
    
    setProjekty(prev => [...prev, data]);
    setIsProjektModalOpen(false); 
  } catch (err) {
    console.error(err);
  }
};



  useEffect(() => {
    fetch("http://localhost:8000/api/kierunki/")
      .then(res => res.json())
      .then(data => setKierunki(data.results))
      .catch((err) => console.error("Błąd pobierania kierunków:", err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/api/projekty/")
      .then(res => res.json())
      .then(data => setProjekty(data.results))
      .catch(err => console.error(err));
  }, []);


  useEffect(() => {
    fetch("http://localhost:8000/api/sekcje/")
      .then(res => res.json())
      .then(data => setSekcje(data.results))
      .catch(err => console.error(err));
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
            value={selectedImie}
            onChange={(e) => setSelectedImie(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Nazwisko" 
            className="border border-gray-300 rounded p-2 mt-2 w-full"
            value={selectedNazwisko}
            onChange={(e) => setSelectedNazwisko(e.target.value)}
          />
        </div>
          <input 
            type="text" 
            placeholder="e-mail" 
            className="border border-gray-300 rounded p-2 mt-2 w-full"
            value={selectedMail}
            onChange={(e) => setSelectedMail(e.target.value)}
          />

        <input 
           type="number" 
          placeholder="Indeks" 
          className="border border-gray-300 rounded p-2 mt-2 w-full"
          value={selectedIndeks}
          onChange={(e) =>
            setSelectedIndeks(
              e.target.value === "" ? "" : Number(e.target.value)
            )
          }
        />

        <input 
          type="tel"
          placeholder="Numer telefonu" 
          className="border border-gray-300 rounded p-2 mt-2 w-full"
          value={selectedTelefon}
          onChange={(e) =>
            setSelectedTelefon(
              e.target.value === "" ? "" : Number(e.target.value)
            )
          }      
        />
        <Select
          label="Wybierz sekcję"
          options={sekcje.map(s => ({
            label: s.nazwa,
            value: s.id
          }))}
          value={selectedSekcja}
          onChange={setSelectedSekcja}
          onAddNew={() => setIsSekcjaModalOpen(true)}
        />

          <Select
            label="Wybierz projekt"
            options={projekty.map(p => ({
              label: p.nazwa,
              value: p.id
            }))}
            value={selectedProjekt}
            onChange={setSelectedProjekt}
            onAddNew={() => setIsProjektModalOpen(true)}
          />

          <Select
            label="Wybierz kierunek"
            options={kierunki.map(k => ({
              label: k.nazwa,
              value: k.id
            }))}
            value={selectedKierunek}
            onChange={setSelectedKierunek}
            onAddNew={() => setIsKierunekModalOpen(true)}
          />

        <div className='flex w-full justify-between mt-2'>
          <div onClick={() =>{
            onClose();
            addMember();
          }} 
            className='bg-[#6D5BD0] hover:bg-[#F4F2FF] rounded-md px-4 py-2 text-white border border-[#6D5BD0] hover:text-[#6D5BD0] cursor-pointer'>
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