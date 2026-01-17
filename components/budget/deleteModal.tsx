"use client";
import React from "react";

type DeleteModalProps = {
  name: string;
  onClose: () => void;
  onDelete: () => void;
};

function DeleteModal({ name, onClose, onDelete }: DeleteModalProps) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg w-[360px]"
      >
        <div className="bg-[#F4F2FF] p-4 rounded-t-lg border border-gray-300">
          <h2 className="text-xl text-[#6D5BD0]">
            Usuń pozycję budżetu
          </h2>
        </div>

        <div className="p-4">
          <p className="text-[#6E6893] mb-6">
            Czy na pewno chcesz usunąć:
            <br />
            <span className="font-semibold text-[#25213B]">
              {name}
            </span>
            ?
          </p>

          <div className="flex justify-between">
            <div
              onClick={onDelete}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 text-white rounded-md cursor-pointer"
            >
              Usuń
            </div>

            <div
              onClick={onClose}
              className="bg-[#6D5BD0] hover:bg-[#F4F2FF] px-4 py-2 text-white rounded-md border border-[#6D5BD0] hover:text-[#6D5BD0] cursor-pointer"
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
