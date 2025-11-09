import { Premiere } from "./Premiere";
import { Dates } from "./Dates";

export const Countdown = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden"
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

        <Premiere />

        <Dates />
      </div>
    </section>
  );
};
