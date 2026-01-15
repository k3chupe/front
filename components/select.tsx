'use client';

import Image from "next/image";
import { useState } from "react";

type SelectOption = {
  label: string;
  value: number;
};

type CustomSelectProps = {
  label: string;
  options: SelectOption[];
  onAddNew?: () => void;
  onChange?: (value: number) => void;
  value?: number | null;
};

export default function CustomSelect({
  label,
  options,
  onAddNew,
  onChange,
  value
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);

  const selectedLabel =
    options.find(opt => opt.value === value)?.label;

  return (
    <div className="relative w-full mt-2">
      <div
        className="border c rounded p-2 cursor-pointer bg-white flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <span>{selectedLabel || label}</span>

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
          {options.map(opt => (
            <div
              key={opt.value}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onChange?.(opt.value);
                setOpen(false);
              }}
            >
              {opt.label}
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
              <span>Dodaj nowy</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
