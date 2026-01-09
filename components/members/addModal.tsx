import React from 'react'

type ModalProps = {
  onClose: () => void;
};



function addModal({onClose}: ModalProps) {
  return (
    <div onClick={() => onClose()} className='fixed bg-black/50 inset-0 flex justify-center items-center'>
        <div className='bg-white flex flex-col p-6 rounded-lg' onClick={(e) => e.stopPropagation()}>
            <h2 className='text-xl mb-4 text-[#6D5BD0]'>Dodaj nowego członka</h2>
            <div className='flex w-full justify-between'>
                <div onClick={() =>onClose()} className='bg-[#6D5BD0] hover:bg-[#F4F2FF] rounded-md px-4 py-2 text-white border border-[#6D5BD0] hover:text-[#6D5BD0] cursor-pointer'>
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