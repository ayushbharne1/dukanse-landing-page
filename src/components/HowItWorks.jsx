import React from "react";
// Import the images from the assets folder
import step1Image from "../assets/iMockup - Google Pixel 8 Pro.png";
import step2Image from "../assets/iMockup - Google Pixel 8 Pro (1).png";
import step3Image from "../assets/iMockup - Google Pixel 8 Pro (2).png";

export default function HowItWorks() {
  const steps = [
    {
      step: "STEP 1",
      title: "Add items from your Local Dukaan.",
      // Use the imported image variable
      imgSrc: step1Image,
    },
    {
      step: "STEP 2",
      title: "Choose Pickup & SAVE 25% using your Gullak Coins",
      // Use the imported image variable
      imgSrc: step2Image,
    },
    {
      step: "STEP 3",
      title: "Pay. Pickup. SAVE. Repeat.",
      // Use the imported image variable
      imgSrc: step3Image,
    },
  ];

  return (
    // Changed bg-white to bg-black
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Inverted colors: bg-white and text-black */}
        <span className="inline-block bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-sm font-medium">
          How to Buy?

        </span>
        {/* Changed text-gray-900 to text-white */}
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Simple Steps To Buy Grocery
        </h2>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
  {steps.map((item) => (
    <div
      key={item.step}
      className="overflow-hidden rounded-2xl bg-[#FEBC1D] p-8 text-center flex flex-col"
    >
      {/* Top section */}
      <div className="flex-grow">
        <span className="inline-block rounded-full bg-white px-4 py-1 text-[20px] font-bold text-red-500">
          {item.step}
        </span>
        <h3 className="mt-4 text-[20px] font-bold text-black/80">{item.title}</h3>
      </div>

      {/* Image fixed at bottom */}
      <div className="mt-6 -mb-8">
        <img
          src={item.imgSrc}
          alt={item.title}
          className="w-full block rounded-b-2xl"
          onError={(e) => (e.target.src = "https://placehold.co/300x500")}
        />
      </div>
    </div>
  ))}
</div>



      </div>
    </section>
  );
}