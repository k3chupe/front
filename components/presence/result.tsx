import React from 'react'

type ResultProps = {
  spotkania: {
    id: number;
    nazwa: string;
    data: string;
  }[];
};

function result({spotkania}: ResultProps) {
  return (
        <div className="">
          <div className="flex p-2 px-4 border-b border-gray-200 text-[#6E6893] items-center">
            <div className='w-40'>
              <div className='text-[#25213B] text-md'>Imie</div>
              <div>email</div>
            </div>
            { spotkania.map(item => (
              <div key={item.id} 
                className='pt-1  w-20'>
                <input type="checkbox" />
              </div>
            ))}
            <div className='flex items-center justify-center'>
              <input type="checkbox" />
            </div>
          </div>
        </div>
  )
}

export default result