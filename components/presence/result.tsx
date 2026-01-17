import React from 'react'

type ResultProps = {
  spotkania: {
    id: number;
    nazwa: string;
    data: string;
  }[];
  czlonek_imie: string;
  czlonek_email: string;
};

function result({spotkania, czlonek_imie, czlonek_email}: ResultProps) {
  return (
        <div className="">
          <div className="flex p-2 px-4 border-b border-gray-200 text-[#6E6893] items-center">
            <div className='w-60'>
              <div className='text-[#25213B] text-md'>{czlonek_imie}</div>
              <div>{czlonek_email}</div>
            </div>
            { spotkania.map(item => (
              <div key={item.id} 
                className='pt-1  w-30 flex justify-center '>
                <input type="checkbox" />
              </div>
            ))}
          </div>
        </div>
  )
}

export default result