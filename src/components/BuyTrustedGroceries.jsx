import React, { useRef } from "react";

import foodItem from "../assets/food item.png";
import fruitItem from "../assets/fruit item.png";
import fruitItem1 from "../assets/fruit item3.png";
import fruitItem2 from "../assets/fruit item2.png";

export default function BuyTrustedGroceries() {
  const groceries = [
    { imgSrc: foodItem, name: "Groceries" },
    { imgSrc: fruitItem, name: "Fruits" },
    { imgSrc: fruitItem1, name: "Fresh Vegetables" },
    { imgSrc: fruitItem2, name: "Medicines" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="text-center">
        <span className="inline-block bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-sm font-medium">
          Grocery Categories
        </span>
        <h2 className="text-4xl font-bold text-gray-900 mt-4">
          Choose from a wide range of Daily Essentials

        </h2>
      </div>

      {/* Scrollable Image Grid */}
      <div
        className="mt-12  py-2 flex gap-6 overflow-x-scroll scrollbar-hide scroll-smooth px-4"
        style={{
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {groceries.map((g, index) => (
          <div
            key={index}
            className="min-w-[20%] flex-shrink-0 text-center hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-md">
              <img
                src={g.imgSrc}
                alt={g.name}
                className="w-[360px] h-[400px] lg:w-[500px] object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mt-4">
              {g.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
