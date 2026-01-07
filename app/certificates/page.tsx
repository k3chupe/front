"use client";
import SearchBar from '@/components/searchbar'
import React, { useState } from 'react'
import Image from 'next/image';
import { useDropzone } from "react-dropzone";

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

    const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: { "image/*": [] },
  });

  return (
    <div className='bg-white rounded-lg text-[#6D5BD0] h-screen flex flex-col rounded-lg border border-gray-300'>
 


        <div className="flex-1 flex flex-col overflow-auto grid grid-cols-[35%_65%] rounded-t-lg">
          <div className=' p-8 grid grid-rows-2 '>
            <div className=' bg-white flex flex-col rounded-lg border border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='p-4'>
                <p className='pb-2 font-semibold text-lg'>Krok 1:</p>
                <p className=' font-semibold text-lg'>Dodaj certyfikat</p>
            </div>   
            <div
                {...getRootProps()}
                className=" p-6 rounded-lg text-center h-full items-center justify-center flex flex-col cursor-pointer "
            >
                <input {...getInputProps()} />
                
                {/* Warunkowe renderowanie obrazka lub tekstu */}
                {acceptedFiles[0] ? (
                    <img
                        src={URL.createObjectURL(acceptedFiles[0])}
                        className="mt-4 max-h-60 mx-auto"
                        alt="uploaded"
                    />
                ) : (
                    <div className='flex items-center justify-center gap-4'>
                        <Image src="/drop.png" alt="Search Icon" width={20} height={20} />
                        <p className=" text-[#8B83BA]">Dodaj</p>
                    </div>

                )}
            </div>
            <div className='flex justify-end m-4'>
                <Image src="/check.png" alt="Search Icon" width={30} height={30} />
            </div>
            </div>
            <div className='bg-white mt-4 rounded-lg border border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <div className='p-4'>
                    <p className='pb-2 font-semibold text-lg'>Krok 2:</p>
                    <p className=' font-semibold text-lg'>Wybierz dla której grupy chcesz wygenerować certyfikat</p>
                </div>   
                <div className='flex justify-end m-4'>
                    <Image src="/check.png" alt="Search Icon" width={30} height={30} />
                </div>
                </div>
          </div>
          <div className=' p-8 '>
            <div className=' h-full w-full bg-white rounded-lg border border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300'>

            </div>
          </div>
        </div>

        <div className="px-4 py-4  bg-[#F4F2FF] items-center text-sm text-[#6E6893] flex gap-15 border-t border-gray-300 rounded-b-lg">
 
        </div>
        
 
    </div>
  )
}

export default page