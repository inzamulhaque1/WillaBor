import { FaArrowLeftLong } from "react-icons/fa6";
import y1 from "../../assets/img/y1.png";
import y2 from "../../assets/img/y2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Rooms = () => {
  return (
    <div className="w-full h-[500px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 relative">
      <div className="grid grid-cols-1 gap-6 sm:gap-8 items-center">
        <div className="flex relative">
          {/* Left side - Text section (unchanged) */}
          <div className="flex pt-28 items-center justify-around text-center md:text-left z-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-playfair text-gray-800 mb-4 w-1/2">
              Zobacz nasze wnętrza i poczuj klimat domu.
            </h2>
            <span className="text-gray-500 text-sm flex items-center px-4 py-2 bg-[#F0E2D7] rounded-md">
              <FaArrowLeftLong className="text-black" />
            </span>
          </div>

          {/* Swiper with overlap fixes */}
          <div className="absolute hidden md:block left-1/2 w-full -translate-x-1/4 z-20 ">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              centeredSlides={true}
              className="mySwiper"
            >
              {[y1, y2, y1, y2, y1, y2, y1, y2, y1, y2, y1, y2].map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`Room ${i+1}`}
                    className="w-full h-auto rounded-2xl shadow-sm"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Critical overlapping styles */}
      <style jsx global>{`
        .mySwiper {
          overflow: visible !important;
        }
        .mySwiper .swiper-slide {
          transition: transform 0.3s ease;
          transform-origin: center left;
        }
        .mySwiper .swiper-slide-active {
          transform: scale(1.1);
          z-index: 30 !important;
        }
      `}</style>
    </div>
  );
};

export default Rooms;