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
      <div onClick={e => e.stopPropagation()} className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl text-[#6D5BD0] mb-4">Usuń członka</h2>
        <p className="mb-6 text-gray-700">
          Czy na pewno chcesz usunąć członka <strong>{memberName}</strong>?
        </p>
        <div className="flex justify-between">
          <button
            onClick={onDelete}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Usuń
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
          >
            Wróć
          </button>
        </div>
      </div>
    </div>
  );
}
