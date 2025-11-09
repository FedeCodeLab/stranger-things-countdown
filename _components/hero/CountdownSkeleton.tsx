export const CountdownSkeleton = () => {
  return (
    <div
      className="grid grid-cols-4 gap-4 mb-12"
      aria-label="Cargando contador"
    >
      {["DÍAS", "HORAS", "MINUTOS", "SEGUNDOS"].map((label, idx) => (
        <div
          key={idx}
          className="border-2 border-[#FF1744] p-4 md:p-8 bg-black bg-opacity-50 backdrop-blur-sm"
          style={{
            boxShadow: "0 0 20px rgba(255, 23, 68, 0.5)",
          }}
        >
          <div className="flex justify-center items-center mb-2">
            <div
              className="h-8 md:h-12 w-12 md:w-20 rounded animate-pulse"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255, 23, 68, 0.3) 0%, rgba(255, 23, 68, 0.5) 50%, rgba(255, 23, 68, 0.3) 100%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 1.5s infinite",
              }}
            />
          </div>

          <div className="text-xs md:text-sm tracking-widest text-gray-400 text-center">
            {label}
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
};
