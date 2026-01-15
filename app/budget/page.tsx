"use client";

import SearchBar from "@/components/searchbar";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Result from "@/components/budget/result";
import AddModal from "@/components/budget/addModal";

export default function Page() {
  const [searchText, setSearchText] = useState("");
  const [income, setIncome] = useState("");
  const [przychody, setPrzychody] = useState<any[]>([]);
  const [wydatki, setWydatki] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);


  const loadPrzychody = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/przychody/");
      const data = await res.json();
      setPrzychody(data.results || []);
    } catch (err) {
      console.error(err);
    }
  };

  const loadWydatki = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/wydatki/");
      const data = await res.json();
      setWydatki(data.results || []);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    loadPrzychody();
    loadWydatki();
  }, []);



  const handleSearch = (value: string) => {
    setSearchText(value);
  };


  return (
    <div className="bg-white text-[#6D5BD0] h-screen flex flex-col rounded-lg border border-gray-300">

      <div className="p-4 flex justify-between items-center">
        <SearchBar
          placeholder="Szukaj w budżecie..."
          onSearch={handleSearch}
        />
        <div className="bg-[#6D5BD0] hover:bg-[#F4F2FF] rounded-md px-4 py-2 text-white border border-[#6D5BD0] hover:text-[#6D5BD0] cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          Dodaj kwotę
        </div>
      </div>

      <div className="flex flex-1 border-t border-gray-300">

        <div className="w-1/2 border-r border-gray-300 flex flex-col">
          <div className="py-4 text-center font-medium bg-[#F4F2FF] border-b border-gray-300">
            Przychody
          </div>
          <div className="overflow-x-auto flex-1">
            <div className="min-w-[700px]">

              <div className="grid grid-cols-[1fr_1fr_1fr_1fr_0.5fr] px-4 py-2 border-b border-gray-300 text-sm text-[#6E6893]">
                <div>Kwota</div>
                <div>Nazwa</div>
                <div>Osoba odpowiedzialna</div>
                <div>Data dodania</div>
              </div>

              {przychody.map(item => (
                <Result
                  key={item.id}
                  kwota={item.kwota}
                  nazwa={item.nazwa}
                  osoba={`${item.osoba_dane.imie} ${item.osoba_dane.nazwisko}`}
                  data={item.data}
                />
              ))}


            </div>
          </div>
        </div>

        <div className="w-1/2 border-l border-gray-300 flex flex-col">
          <div className="py-4 text-center font-medium bg-[#F4F2FF] border-b border-gray-300">
            Wydatki
          </div>
          <div className="overflow-x-auto flex-1">
            <div className="min-w-[700px]">

              <div className="grid  grid-cols-[1fr_1fr_1fr_1fr_0.5fr] px-4 py-2 border-b border-gray-300 text-sm text-[#6E6893]">
                <div>Kwota</div>
                <div>Nazwa</div>
                <div>Osoba odpowiedzialna</div>
                <div>Data dodania</div>
              </div>

              {wydatki.map(item => (
                <Result
                  key={item.id}
                  kwota={item.kwota}
                  nazwa={item.nazwa}
                  osoba={`${item.osoba_dane.imie} ${item.osoba_dane.nazwisko}`}
                  data={item.data}
                />
              ))}


            </div>
          </div>
        </div>

      </div>

      <div className="px-4 py-4 border-t border-gray-300 bg-[#F4F2FF] flex items-center text-sm text-[#6E6893]">
        <div className="ml-auto">Wiersze na stronę: 10</div>
        <div className="mx-6">1–10</div>
        <div className="flex gap-6">
          <Image
            src="/left.png"
            alt="prev"
            width={5}
            height={5}
            className="cursor-pointer hover:brightness-75"
          />
          <Image
            src="/right.png"
            alt="next"
            width={5}
            height={5}
            className="cursor-pointer hover:brightness-75"
          />
        </div>
      </div>
      {isOpen && (
        <AddModal
              onClose={() => {
                setIsOpen(false);
              }}
        />
      )}
    </div>
  );
}
