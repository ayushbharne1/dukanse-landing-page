import React from "react";
import appMockups from "../assets/mobile-grp.png";
import googlePlayBadge from "../assets/google-play-badge.png";
import appStoreBadge from "../assets/app-store-badge.png";

export default function CTA() {
  return (
    <section className="relative pt-36 pb-16 text-center bg-transparent">
      {/* Phone Mockup */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl px-4">
        <img
          src={appMockups}
          alt="App Mockup"
          className="h-72 sm:h-96 w-auto object-contain mx-auto"
        />
      </div>

      {/* White Container */}
      <div className="container mx-auto max-w-7xl px-4">
        <div className="bg-white rounded-t-[3rem] sm:rounded-t-[5rem] pt-56 pb-16 ">
          {/* Text */}
          <p className="font-semibold mx-auto max-w-md text-[20px] text-[#333333] px-4 -mt-24 md:mt-2 lg:-mt-1">
            Download the App & SAVE 25% Today!

          </p>

          {/* App Store Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 px-4">
            <a href="#" aria-label="Get it on Google Play">
              <img
                src={googlePlayBadge}
                alt="Get it on Google Play"
                className="h-12 w-auto sm:h-14"
              />
            </a>
            <a href="#" aria-label="Download on the App Store">
              <img
                src={appStoreBadge}
                alt="Download on the App Store"
                className="h-12 w-auto sm:h-14"
              />
            </a>
          </div>

          {/* Contact */}
          <div className="mt-8">
            <p className="text-[#333333] text-[20px] font-normal">Feel free reach us at:</p>
            <a
              href="mailto:contact@dukaanse.com"
              className="mt-2 inline-block rounded-full bg-[#F2F2F2] px-6 py-2 font-normal text-[#333333] transition"
            >
              support@dukaanseindia.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
