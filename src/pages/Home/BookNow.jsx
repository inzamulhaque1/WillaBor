import { FaArrowRight, FaCalendarAlt, FaStar } from "react-icons/fa";
import room from "../../assets/img/room.png";

const BookNow = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 ">
      <div className="grid md:grid-cols-2">
        <div className="col-span-1 flex justify-center flex-col">
          <div>
            <h4 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center md:text-left mb-2">
              Komfort, relaks i piękne widoki czekają na Ciebie!{" "}
            </h4>
            <p className="text-sm sm:text-base text-gray-600 text-center md:text-left">
              Zatrzymaj się w miejscu, które zapewnia spokój i pachnie świeżym,
              górskim powietrzem. Willa Bór to więcej niż nocleg – to ciepło,
              wygoda i przestrzeń, w której naprawdę się odpoczywa. Zarezerwuj
              swój pobyt i pozwól, by Zakopane zauroczyło Cię od pierwszego
              poranka.
            </p>
          </div>
          <div className="flex mt-5 flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <div className="">
              <div className="flex items-center border border-[#B48E7B] rounded-lg overflow-hidden">
                <FaCalendarAlt className="text-[#B48E7B] ml-2" />
                <input
                  type="text"
                  placeholder="Data wyjazdu"
                  className="text-[#B48E7B] bg-transparent px-2 py-2 placeholder-[#B48E7B] focus:outline-none w-36 sm:w-44"
                />
              </div>
            </div>
            <div className="">
              <div className="flex items-center border border-[#B48E7B] rounded-lg overflow-hidden">
                <FaCalendarAlt className="text-[#B48E7B] ml-2" />
                <input
                  type="text"
                  placeholder="Data wyjazdu"
                  className="text-[#B48E7B] bg-transparent px-2 py-2 placeholder-[#B48E7B] focus:outline-none w-36 sm:w-44"
                />
              </div>
            </div>
            <FaArrowRight className="text-[#B48E7B] hidden sm:inline-block" />
            <button className="bg-black text-[#e0c7ba] px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition-colors w-fit">
              Rezerwuj
            </button>
          </div>
          <div className=" mt-5 flex items-center gap-1 text-[#B48E7B] text-xs sm:text-sm">
            <span className="">G</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-[#B48E7B]" />
              ))}
            </div>
            <span className="">4,6 (674 opinii)</span>
          </div>
        </div>

        <div className="col-span-1">
          <img src={room} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BookNow;
