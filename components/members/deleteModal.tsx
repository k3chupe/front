'use client'
import React, { useState } from 'react';

type DeleteModalProps = {
  onClose: () => void;
  onDelete: () => void;
  memberName: string;
};

export default function DeleteModal({ onClose, onDelete, memberName }: DeleteModalProps) {
  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div onClick={e => e.stopPropagation()} className="bg-white rounded-lg w-96">
        
        <div className='bg-[#F4F2FF] p-4 rounded-t-lg border border-gray-300'>
          <h2 className="text-xl text-[#6D5BD0]">Usuń członka</h2>
        </div>
        <div className='p-4'>
          <p className="mb-6 text-gray-700">
            Czy na pewno chcesz usunąć członka {memberName}?
          </p>
          <div className="flex justify-between">
            <button
              onClick={onDelete}
              className="bg-red-500 hover:bg-red-600 rounded-md px-4 py-2 text-white border cursor-pointer"
            >
              Usuń
            </button>
            <button
              onClick={onClose}
              className="bg-[#6D5BD0] hover:bg-[#F4F2FF] rounded-md px-4 py-2 text-white border border-[#6D5BD0] hover:text-[#6D5BD0] cursor-pointer"
            >
              Wróć
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
