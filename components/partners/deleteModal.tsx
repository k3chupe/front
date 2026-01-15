"use client";
import React from "react";

type DeleteModalProps = {
  partnerName: string;
  onClose: () => void;
  onDelete: () => void;
};

function DeleteModal({ partnerName, onClose, onDelete }: DeleteModalProps) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg w-[360px]"
      >
        <div className='bg-[#F4F2FF] p-4 rounded-t-lg border border-gray-300'>

        <h2 className="text-xl text-[#6D5BD0]">
          Usuń partnera
        </h2>
        </div>
        <div className="p-4">
            <p className="text-[#6E6893] mb-6">
            Czy na pewno chcesz usunąć partnera:
            <br />
            <span className="font-semibold text-[#25213B]">
                {partnerName}
            </span>
            ?
            </p>

            <div className="flex justify-between">
            <div
                onClick={onDelete}
              className="bg-red-500 hover:bg-red-600 rounded-md px-4 py-2 text-white border cursor-pointer"
            >
                Usuń
            </div>

            <div
                onClick={onClose}
                className="bg-[#6D5BD0] hover:bg-[#F4F2FF] rounded-md px-4 py-2 text-white border border-[#6D5BD0] hover:text-[#6D5BD0] cursor-pointer"
            >
                Anuluj
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
