import { GoPerson } from "react-icons/go";
import w1 from "../../assets/img/w1.png";
import w2 from "../../assets/img/w2.png";
import w3 from "../../assets/img/w3.png";

const rooms = [
  {
    img: w1,
    cls: "pb-5 border-b-4",
    people: "1/2",
    icons: 2,
    rooms: 15,
    title: "Pokoje jedno/dwuosobowe",
    desc: "Idealny na romantyczny weekend lub spokojny reset w duecie. Wysokie łóżko, przytulna przestrzeń i kojąca cisza – wszystko, czego potrzeba, by zwolnić tempo i naprawdę się zrelaksować.",
  },
  {
    img: w2,
    cls: "pt-5 border-t-4",
    people: "3",
    icons: 3,
    rooms: 4,
    title: "Pokoje trzyosobowe",
    desc: "Gdy podróżujesz z rodziną lub paczką przyjaciół – ten pokój daje przestrzeń do wspólnego śmiechu, rozmów i odpoczynku. Jasne wnętrza i komfortowe aranżacje tworzą przyjazną, domową atmosferę.",
  },
  {
    img: w3,
    cls: "pb-5 border-b-4",
    people: "4",
    icons: 4,
    rooms: 2,
    title: "Pokoje czteroosobowe",
    desc: "Dużo miejsca, wygoda i swoboda – idealne dla większych ekip. Można się tu rozgościć, spędzać razem wieczory i planować wspólne wyprawy bez poczucia, że komuś brakuje przestrzeni.",
  },
];

const TopProducts = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <p className="font-playfair text-2xl sm:text-3xl text-center md:text-left mb-2">
        Co oferujemy naszym gościom?
      </p>
      <p className="w-full md:w-7/12 text-center md:text-left mb-8 sm:mb-10 text-gray-600 text-sm sm:text-base">
        Przytulne wnętrza, zapach świeżej pościeli i przestrzeń, w której
        odpoczywa się z przyjemnością – dokładnie tak, jak lubisz.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 sm:gap-5 border-b-4 border-[#DDD5CD] pb-6"
          >
            <img
              src={room.img}
              alt={room.title}
              className={`${room.cls} border-[#B48E7B] w-full h-auto`}
            />

            <div className="flex justify-between items-center text-xs sm:text-sm text-gray-700">
              <span className="font-number text-xl sm:text-2xl text-[#B48E7B]">
                {room.people}{" "}
                <span className="inline-flex items-center gap-1">
                  {Array.from({ length: room.icons }).map((_, i) => (
                    <GoPerson key={i} size={14} />
                  ))}
                </span>
              </span>
              <span>
                <span className="font-number text-xl sm:text-2xl text-[#B48E7B]">
                  {room.rooms}
                </span>{" "}
                Pokoje
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-semibold font-playfair">
              {room.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">{room.desc}</p>

            <div className="mt-auto mb-4 sm:mb-5">
              <a
                href="#"
                className="text-xs sm:text-sm text-[#B48E7B] font-medium hover:underline"
              >
                Czytaj więcej →
              </a>
            </div>
            <div className="flex justify-end">
              <button className="relative cursor-pointer bg-[#F0E2D7] text-xs sm:text-sm text-gray-800 px-3 sm:px-4 py-1 sm:py-2 rounded-xl shadow overflow-hidden group">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Rezerwuj →
                </span>
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="absolute bg-black rounded-full scale-0 group-hover:scale-125 transition-transform duration-500 origin-center w-full h-0 pt-[100%]"></span>
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
