import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CiBowlNoodles, CiWifiOn } from "react-icons/ci";
import { FaCar } from "react-icons/fa";
import { GiWindow } from "react-icons/gi";
import { MdOutlineTableBar } from "react-icons/md";
import { RiUserAddLine } from "react-icons/ri";

const Feature = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
      <p className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center md:text-left mb-4 sm:mb-6 md:mb-10">
        Kluczowe udogodnienia
      </p>

      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-4">
        <div className="flex justify-center items-center p-2 sm:p-4 border-r-2 sm:border-r-2 border-[#B48E7B]">
          <div className="text-[#B48E7B] flex flex-col items-center px-2 sm:px-4">
            <RiUserAddLine className="text-2xl sm:text-3xl md:text-4xl mb-1" />
            <p className="text-xs sm:text-sm text-center">Różnorodność pokoi</p>
          </div>
        </div>

        <div className="flex justify-center items-center p-2 sm:p-4 border-r-2 sm:border-r-2 border-[#B48E7B]">
          <div className="text-[#B48E7B] flex flex-col items-center px-2 sm:px-4">
            <GiWindow className="text-2xl sm:text-3xl md:text-4xl mb-1" />
            <p className="text-xs sm:text-sm text-center">Prywatne łazienki</p>
          </div>
        </div>

        <div className="flex justify-center items-center p-2 sm:p-4 border-r-2 sm:border-r-2 border-[#B48E7B]">
          <div className="text-[#B48E7B] flex flex-col items-center px-2 sm:px-4">
            <CiBowlNoodles className="text-2xl sm:text-3xl md:text-4xl mb-1" />
            <p className="text-xs sm:text-sm text-center">Wyjątkowe śniadania bufetowe</p>
          </div>
        </div>

        <div className="flex justify-center items-center p-2 sm:p-4 border-r-2 sm:border-r-2 border-[#B48E7B]">
          <div className="text-[#B48E7B] flex flex-col items-center px-2 sm:px-4">
            <MdOutlineTableBar className="text-2xl sm:text-3xl md:text-4xl mb-1" />
            <p className="text-xs sm:text-sm text-center">Ogród</p>
          </div>
        </div>

        <div className="flex justify-center items-center p-2 sm:p-4 border-r-2 sm:border-r-2 border-[#B48E7B]">
          <div className="text-[#B48E7B] flex flex-col items-center px-2 sm:px-4">
            <AiOutlineHome className="text-2xl sm:text-3xl md:text-4xl mb-1" />
            <p className="text-xs sm:text-sm text-center">Plac zabaw</p>
          </div>
        </div>

        <div className="flex justify-center items-center p-2 sm:p-4 border-r-2 sm:border-r-2 border-[#B48E7B]">
          <div className="text-[#B48E7B] flex flex-col items-center px-2 sm:px-4">
            <FaCar className="text-2xl sm:text-3xl md:text-4xl mb-1" />
            <p className="text-xs sm:text-sm text-center">Bezpłatny parking</p>
          </div>
        </div>

        <div className="flex justify-center items-center p-2 sm:p-4">
          <div className="text-[#B48E7B] flex flex-col items-center px-2 sm:px-4">
            <CiWifiOn className="text-2xl sm:text-3xl md:text-4xl mb-1" />
            <p className="text-xs sm:text-sm text-center">Wi-Fi</p>
          </div>
        </div>

        <div className="flex justify-center items-center p-2 sm:p-4">
          <button className="bg-[#F0E2D7] text-xs sm:text-sm text-gray-800 px-2 sm:px-3 py-1 sm:py-2 rounded-xs shadow hover:bg-[#B48E7B] hover:text-white transition animate-bounceX">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;