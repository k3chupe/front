'use client';

import Image from "next/image";
import { useState } from "react";

type CustomSelectProps = {
  label: string;
  options: string[];
  onAddNew?: () => void;
  onChange?: (value: string) => void;
  value?: string;
};

export default function CustomSelect({ label, options, onAddNew, onChange, value }: CustomSelectProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full mt-2">
      <div
        className="border border-gray-300 rounded p-2 cursor-pointer bg-white flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <span>{value ? value : label}</span>

        <Image
          src="/down-arrow.png"
          alt="down"
          width={10}
          height={10}
          className="w-4 h-4 opacity-60"
        />
      </div>

      {open && (
        <div className="absolute w-full border bg-white rounded shadow z-10">
          {options.map((opt) => (
            <div
              key={opt}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onChange?.(opt);
                setOpen(false);
              }}
            >
              {opt}
            </div>
          ))}

          {onAddNew && (
            <div
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
              onClick={() => {
                onAddNew();
                setOpen(false);
              }}
            >
              <Image src="/add.png" width={14} height={14} alt="add" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
