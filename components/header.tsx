import React from 'react'
import Image from 'next/image';

function header() {
  return (
        <div className="flex justify-start">
            <Image src="/HRownik 1.png" alt="Logo" width={50} height={50} />
            <div className="flex, flex-col pl-2 text-[#6D5BD0]">
              <h1 className="text-l font-bold">Aplikacja dla</h1>
              <h1 className="text-l font-bold">Organizacji studenckich</h1>
            </div>
          </div>
  )
}

export default header