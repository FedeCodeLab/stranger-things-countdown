"use client";

import { TimeLeft } from "@/types/premiere.types";
import { useEffect, useState } from "react";
import { CountdownSkeleton } from "./CountdownSkeleton";

export const Premiere = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      setMounted(true);
      const targetDate = new Date("2025-11-26T20:00:00-05:00").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return <CountdownSkeleton />;
  }

  return (
    <div
      className="grid grid-cols-4 gap-4 mb-12"
      aria-live="polite"
      aria-label="Tiempo restante para el estreno"
    >
      {[
        { value: timeLeft.days, label: "DÍAS" },
        { value: timeLeft.hours, label: "HORAS" },
        { value: timeLeft.minutes, label: "MINUTOS" },
        { value: timeLeft.seconds, label: "SEGUNDOS" },
      ].map((item, idx) => (
        <div
          key={idx}
          className="border-2 border-[#FF1744] p-4 md:p-8 bg-black bg-opacity-50 backdrop-blur-sm hover:shadow-lg transition-all flex justify-center items-center flex-col"
          style={{
            boxShadow: "0 0 20px rgba(255, 23, 68, 0.5)",
          }}
        >
          <div
            className="text-2xl md:text-5xl font-bold lg:mb-2"
            style={{
              color: "#FF1744",
            }}
          >
            {String(item.value).padStart(2, "0")}
          </div>
          <div className="text-xs md:text-sm tracking-widest text-gray-400">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};
