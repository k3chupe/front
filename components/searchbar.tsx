"use client"; 

import { ChangeEvent, useState } from "react";
import Image from 'next/image';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (results: string) => void;
}


export default function SearchBar({ placeholder = "Szukaj...", onSearch }:SearchBarProps) {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (onSearch) {
      onSearch(value); // zwracamy wpisany tekst
    }
  };

  return (
    <div className="flex items-center bg-[#F4F2FF] rounded-md border border-gray-300 px-2 py-1 w-full max-w-sm">
      <Image src="/search.png" alt="Search Icon" width={20} height={20} />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="ml-2 flex-1 bg-transparent outline-none text-gray-700"
      />
    </div>
  );
}

