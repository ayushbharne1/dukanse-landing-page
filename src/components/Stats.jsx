import React from "react";

export default function Stats() {
  const stats = [
    { value: "XX,XXX+", label: "Happy Customers" },
    { value: "XX,XXX+", label: "Satisfied Kiranas" },
    { value: "XX,XX,XXX+", label: "Orders Delivered" },
  ];

  return (
    <section className="bg-white md:py-16 lg:py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-[#333333] ">
          <span >Your Daily Essentials.</span> <br /> Now Available Nearby.

        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-[#FFF7E6] flex flex-col justify-center items-center gap-3 rounded-[16px] shadow-sm opacity-100
                         w-[90%] sm:w-[320px] md:w-[357px] h-[180px] md:h-[196px] px-6 py-8"
            >
              <p className="text-4xl sm:text-5xl font-bold text-[#EC2D01]">{s.value}</p>
              <p className="mt-2 text-base sm:text-lg text-[#333333] font-semibold">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
