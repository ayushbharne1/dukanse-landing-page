import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white ">
     
      <div className=" bg-[#FFF7E6] py-3">
        <div className="w-full flex items-center justify-center lg:gap-6 gap-2 mb-2 ">
          <a href="#" className="text-blue-500 hover:underline text-sm lg:text-lg">Terms & Condition</a>
          <a href="#" className="text-blue-500 hover:underline text-sm lg:text-lg">Privacy Policy</a>
          <a href="#" className="text-blue-500 hover:underline text-sm lg:text-lg">Cancellation  & Refund</a>
        </div>
        <p className="text-center text-[16px] font-medium text-[#333333]">© 2025 Dukaanseसे. All rights reserved.</p>
      </div>
    </footer>
  );
}
