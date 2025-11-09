"use client";

import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  src: string;
}

export const Modal = ({ isOpen, onClose, title, src }: ModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-neutral-800/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 text-white text-3xl z-10 cursor-pointer hover:bg-neutral-800 size-8 rounded-sm flex items-center justify-center"
        onClick={onClose}
        aria-label="Cerrar modal"
      >
        ×
      </button>
      <div
        className="relative size-[90%] max-w-full max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={src.replace("embed/", "embed/").concat("?autoplay=1")}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
};
