"use client";
import React, { useEffect, useState } from "react";

type ModalProps = {
  onClose: () => void;
  mode: "add" | "edit";
  partner?: any;
};

function AddPartnerModal({ onClose, mode, partner }: ModalProps) {
  const [nazwa, setNazwa] = useState("");
  const [numerTelefonu, setNumerTelefonu] = useState<number | "">("");
  const [email, setEmail] = useState("");
  const [osobaOdpowiedzialna, setOsobaOdpowiedzialna] = useState<number | "">("");
  const [przychod, setPrzychod] = useState<number | "">("");
  const [odpowiedz, setOdpowiedz] = useState<number | "">("");
  const [opis, setOpis] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});
  const [isLoading, setIsLoading] = useState(false);

  const payload = {
    nazwa,
    numer_telefonu: numerTelefonu === "" ? null : numerTelefonu,
    e_mail: email,
    osoba_odpowiedzialna:
      osobaOdpowiedzialna === "" ? null : osobaOdpowiedzialna,
    przychod: przychod === "" ? null : przychod,
    odpowiedz: odpowiedz === "" ? null : odpowiedz,
    opis,
  };

  const addPartner = async () => {
    try {
      setIsLoading(true);
      setErrors({});
      const res = await fetch("http://localhost:8000/api/partnerzy/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) return setErrors(data);
      onClose();
    } finally {
      setIsLoading(false);
    }
  };

  const editPartner = async () => {
    if (!partner?.id) return;
    try {
      setIsLoading(true);
      setErrors({});
      const res = await fetch(
        `http://localhost:8000/api/partnerzy/${partner.id}/`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const data = await res.json();
      if (!res.ok) return setErrors(data);
      onClose();
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (mode === "edit" && partner) {
      setNazwa(partner.nazwa ?? "");
      setNumerTelefonu(partner.numer_telefonu ?? "");
      setEmail(partner.e_mail ?? "");
      setOsobaOdpowiedzialna(partner.osoba_odpowiedzialna ?? "");
      setPrzychod(partner.przychod ?? "");
      setOdpowiedz(partner.odpowiedz ?? "");
      setOpis(partner.opis ?? "");
    }
  }, [mode, partner]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white flex flex-col p-6 rounded-lg w-[420px]"
      >
        <h2 className="text-xl mb-4 text-[#6D5BD0]">
          {mode === "add" ? "Dodaj partnera" : "Edytuj partnera"}
        </h2>

        <input
          type="text"
          placeholder="Nazwa"
          className="border border-gray-300 rounded p-2 mt-2 w-full"
          value={nazwa}
          onChange={(e) => setNazwa(e.target.value)}
        />
        {errors.nazwa && (
          <p className="text-red-500 text-sm">{errors.nazwa.join(" ")}</p>
        )}

        <input
          type="number"
          placeholder="Numer telefonu"
          className="border border-gray-300 rounded p-2 mt-2 w-full"
          value={numerTelefonu}
          onChange={(e) =>
            setNumerTelefonu(e.target.value === "" ? "" : Number(e.target.value))
          }
        />
        {errors.numer_telefonu && (
          <p className="text-red-500 text-sm">{errors.numer_telefonu.join(" ")}</p>
        )}

        <input
          type="text"
          placeholder="E-mail"
          className="border border-gray-300 rounded p-2 mt-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.e_mail && (
          <p className="text-red-500 text-sm">{errors.e_mail.join(" ")}</p>
        )}

        <input
          type="number"
          placeholder="Osoba odpowiedzialna (ID)"
          className="border border-gray-300 rounded p-2 mt-2 w-full"
          value={osobaOdpowiedzialna}
          onChange={(e) =>
            setOsobaOdpowiedzialna(
              e.target.value === "" ? "" : Number(e.target.value)
            )
          }
        />
        {errors.osoba_odpowiedzialna && (
          <p className="text-red-500 text-sm">
            {errors.osoba_odpowiedzialna.join(" ")}
          </p>
        )}

        <input
          type="number"
          placeholder="Przychód"
          className="border border-gray-300 rounded p-2 mt-2 w-full"
          value={przychod}
          onChange={(e) =>
            setPrzychod(e.target.value === "" ? "" : Number(e.target.value))
          }
        />
        {errors.przychod && (
          <p className="text-red-500 text-sm">{errors.przychod.join(" ")}</p>
        )}

        <input
          type="number"
          placeholder="Odpowiedź (ID)"
          className="border border-gray-300 rounded p-2 mt-2 w-full"
          value={odpowiedz}
          onChange={(e) =>
            setOdpowiedz(e.target.value === "" ? "" : Number(e.target.value))
          }
        />
        {errors.odpowiedz && (
          <p className="text-red-500 text-sm">{errors.odpowiedz.join(" ")}</p>
        )}

        <textarea
          placeholder="Opis"
          className="border border-gray-300 rounded p-2 mt-2 w-full"
          value={opis}
          onChange={(e) => setOpis(e.target.value)}
        />
        {errors.opis && (
          <p className="text-red-500 text-sm">{errors.opis.join(" ")}</p>
        )}

        <div className="flex w-full justify-between mt-4">
          <div
            onClick={() => (mode === "add" ? addPartner() : editPartner())}
            className="bg-[#6D5BD0] hover:bg-[#F4F2FF] rounded-md px-4 py-2 text-white border border-[#6D5BD0] hover:text-[#6D5BD0] cursor-pointer"
          >
            {isLoading ? "Ładowanie..." : mode === "add" ? "Dodaj" : "Zapisz"}
          </div>
          <div
            onClick={() => onClose()}
            className="bg-[#6D5BD0] hover:bg-[#F4F2FF] rounded-md px-4 py-2 text-white border border-[#6D5BD0] hover:text-[#6D5BD0] cursor-pointer"
          >
            Wróć
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPartnerModal;
