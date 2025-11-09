"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown = () => {
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

  if (!mounted) return null;

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden"
      aria-label="Stranger Things Season 5 Premiere Countdown"
    >
      <div className="absolute inset-0 -z-10 from-red-900 via-red-950 to-black opacity-60" />

      <div className="absolute inset-0 bg-black -z-10">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 0, 127, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 127, 0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h1
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-4"
            style={{
              color: "#FF1744",
              textShadow:
                "0 0 20px rgba(255, 23, 68, 0.8), 0 0 40px rgba(200, 0, 0, 0.6)",
            }}
            aria-label="Stranger Things"
          >
            STRANGER
          </h1>
          <h2
            className="text-6xl md:text-8xl font-bold tracking-tighter"
            style={{
              color: "#FF1744",
              textShadow:
                "0 0 20px rgba(255, 23, 68, 0.8), 0 0 40px rgba(200, 0, 0, 0.6)",
            }}
          >
            THINGS
          </h2>
        </div>

        <p className="text-xl md:text-2xl mb-16 text-gray-300 font-light tracking-widest">
          SEASON 5: THE FINAL SEASON
        </p>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
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
              className="border-2 border-[#FF1744] p-6 md:p-8 bg-black bg-opacity-50 backdrop-blur-sm hover:shadow-lg transition-all"
              style={{
                boxShadow: "0 0 10px rgba(255, 23, 68, 0.5)",
              }}
            >
              <div
                className="text-4xl md:text-5xl font-bold mb-2"
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

        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Próxima en Netflix:{" "}
          <span className="font-bold text-[#FF1744]">26 de noviembre</span>
        </p>
      </div>
    </section>
  );
};
