import { FaGoogle, FaStar } from "react-icons/fa";
import { ImQuotesRight } from "react-icons/im";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "Cudowne miejsce! Willa Bór to idealna baza wypadowa do zwiedzania Zakopanego. Pokoje czyste, przytulne, a gospodarze bardzo pomocni.",
      name: "Anna Kowalska",
    },
    {
      quote:
        "Świetna lokalizacja, blisko do Krupówek i szlaków. Atmosfera domowa, a kawa na tarasie z widokiem na góry – bezcenna!",
      name: "Piotr Nowak",
    },
    {
      quote:
        "Polecam z całego serca! Wszystko na najwyższym poziomie – od wyposażenia po obsługę. Na pewno wrócimy!",
      name: "Katarzyna Wiśniewska",
    },
    {
      quote:
        "Fantastyczne miejsce na rodzinny wypoczynek. Cisza, spokój i piękne widoki. Polecam każdemu!",
      name: "Marek Zieliński",
    },
    {
      quote:
        "Willa Bór to nasz drugi dom w Zakopanem. Już po raz trzeci tu wracamy i zawsze jest świetnie!",
      name: "Agnieszka Lewandowska",
    },
    {
      quote:
        "Cudowne miejsce! Willa Bór to idealna baza wypadowa do zwiedzania Zakopanego. Pokoje czyste, przytulne, a gospodarze bardzo pomocni.",
      name: "Anna Kowalska",
    },
    {
      quote:
        "Świetna lokalizacja, blisko do Krupówek i szlaków. Atmosfera domowa, a kawa na tarasie z widokiem na góry – bezcenna!",
      name: "Piotr Nowak",
    },
    {
      quote:
        "Polecam z całego serca! Wszystko na najwyższym poziomie – od wyposażenia po obsługę. Na pewno wrócimy!",
      name: "Katarzyna Wiśniewska",
    },
    {
      quote:
        "Fantastyczne miejsce na rodzinny wypoczynek. Cisza, spokój i piękne widoki. Polecam każdemu!",
      name: "Marek Zieliński",
    },
    {
      quote:
        "Willa Bór to nasz drugi dom w Zakopanem. Już po raz trzeci tu wracamy i zawsze jest świetnie!",
      name: "Agnieszka Lewandowska",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
        <div className="col-span-1 flex flex-col justify-around">
          <h4 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center md:text-left mb-2">
            Opinie naszych gości
          </h4>
          <p className="text-sm sm:text-base text-gray-600 text-center md:text-left">
            Twój głos ma znaczenie – podziel się wrażeniami z pobytu i pomóż
            innym odkryć wyjątkowy klimat Willi Bór!
          </p>
          <button className="bg-[#F0E2D7] text-xs sm:text-sm text-gray-800 px-3 sm:px-4 py-1 sm:py-2 rounded shadow hover:bg-[#B48E7B] hover:text-white transition flex items-center mx-auto md:mx-0">
            <FaGoogle className="mr-2 sm:mr-3" />
            Rezerwuj →
          </button>
        </div>

        <div className="col-span-1 md:col-span-3">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              }
            }}
            modules={[Pagination]}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#F0E2D7] p-4 sm:p-6 rounded-lg shadow-sm text-center h-full">
                  <div className="flex justify-center p-5">
                    <ImQuotesRight className="text-4xl" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 mb-3">
                    {testimonial.quote}
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-[#B48E7B]">
                    {testimonial.name} →
                  </p>
                  <p className="font-bold mt-5">
                    Bookings <span className="font-number">5.5</span>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;