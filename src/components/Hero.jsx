import React, { useState } from "react";
import bgImage from "../assets/top.png";
import phoneMockup from "../assets/mobile-screen.png";
import googlePlayBadge from "../assets/google-play-badge.png";
import appStoreBadge from "../assets/app-store-badge.png";
import logo from "../assets/Logo-dukhanse.png";

// --- ICONS ---
const MenuIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const XIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// --- MAIN HERO SECTION ---
export default function Hero() {
  return (
    <div className="relative overflow-visible pb-[280px] sm:pb-[300px] md:pb-[340px] scroll-smooth">
      <section
        id="hero"
        className="relative min-h-[90vh] flex flex-col items-center justify-center bg-cover bg-center text-gray-900 px-4 sm:px-6 lg:rounded-br-[50px] lg:rounded-bl-[50px] rounded-bl-[25px] rounded-br-[25px] "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Hero Content */}
        <div className="relative z-30 flex flex-col items-center text-center max-w-[95%] sm:max-w-2xl md:max-w-6xl mt-16 sm:-mt-40 lg:-mt-48">
          {/* Headline */}
          <img src={logo} alt="" className="w-56 md:w-86 lg:w-84" />
          <div
            className="
            flex 
            items-center 
            justify-between 
            lg:py-6 
            py-2
            md:justify-center
            md:space-x-10
            text-center
          "
          >
            <h1 className="text-2xl lg:text-5xl text-[#333333] font-bold">
              {" "}
              Pickup from DukaanSe & SAVE 25%. Humesha!
            </h1>
          </div>
          <h1 className="text-[12px] sm:text-[36px] md:text-[48px] lg:text-xl lg:font-normal lg:-mt-5 leading-tight mb-4 lg:mb-4 text-[#333333] lg:tracking-wider">
            Order from your nearby Kirana stores & save with your Gullak coins.
          </h1>

          {/* Subtext */}
          <p className="text-[16px] sm:text-[18px] md:text-[25px] lg:text-3xl lg:font-medium font-medium -mt-2 lg:mt-1 text-[#333333] mb-6 tracking-wide">
            <span >Kahin aur se loge toh mehenga padega.</span> <br />
            <i>Order karo <span className="text-red-500">GharSe</span> aur <span className="text-red-500">SAVE</span> karo <span className="text-red-500"> DukaanSe.</span> </i> <br /> <i>Aaj hi Download karein.</i>
          </p>

          {/* App Store Badges */}
          <div className="flex  sm:flex-row gap-4 sm:gap-5 justify-center items-center mb-8">
            <img
              src={googlePlayBadge}
              alt="Get it on Google Play"
              className="w-[150px] sm:w-[170px] md:w-[190px] lg:w-[200px] h-auto cursor-pointer hover:scale-105 transition-transform drop-shadow-lg"
            />
            <img
              src={appStoreBadge}
              alt="Download on the App Store"
              className="w-[150px] sm:w-[170px] md:w-[190px] lg:w-[200px] h-auto cursor-pointer hover:scale-105 transition-transform drop-shadow-lg"
            />
          </div>

          {/* Tagline */}
          {/* <p className="text-[16px] sm:text-[18px] md:text-[22px] text-[#333333] -mt-1 sm:-mt-3">
            For Customers. For Shops. One Seamless Shopping Experience.
          </p> */}
        </div>

        {/* Phone Mockup (Half inside / Half outside background) */}
        <img
          src={phoneMockup}
          alt="App Mockup"
          className="
            absolute
            bottom-[-175px] sm:bottom-[-200px] md:bottom-[-240px] lg:bottom-[-270px]
            left-1/2 -translate-x-1/2
            w-[350px] sm:w-[380px] md:w-[480px] lg:w-[620px]
            h-auto object-contain z-20
            transition-all duration-300
          "
        />
      </section>
    </div>
  );
}
