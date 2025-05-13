import { useState } from "react";
import p1 from "../../assets/img/p1.png";
import p2 from "../../assets/img/p2.png";
import p3 from "../../assets/img/p3.png";
import p4 from "../../assets/img/p4.png";
import p5 from "../../assets/img/p5.png";

const cards = [
  {
    title: "Wygodne łóżka",
    desc: "Po dniu na szlaku nie ma nic lepszego niż zanurzyć się w miękkiej pościeli. U nas śpi się błogo – jak w chmurze, tylko bliżej Tatr.",
    img: p1,
  },
  {
    title: "Przytulna atmosfera",
    desc: "Idealne miejsce, by poczuć się jak w domu – ciepło, komfortowo i spokojnie.",
    img: p2,
  },
  {
    title: "Blisko natury",
    desc: "Otoczona zielenią, nasza willa pozwala się wyciszyć i odpocząć od zgiełku miasta.",
    img: p3,
  },
  {
    title: "Nowoczesne udogodnienia",
    desc: "Wszystko, czego potrzebujesz – szybkie WiFi, smart TV, wygodne biurko.",
    img: p4,
  },
  {
    title: "Lokalizacja",
    desc: "W samym centrum Zakopanego, a mimo to spokojnie i cicho.",
    img: p5,
  },
];

const Products = () => {
  const [active, setActive] = useState(0);

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActive((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#f5f0eb] rounded-3xl p-6 md:p-12 mx-auto ">
      <p className="font-playfair text-3xl mb-8 text-center md:text-left w-full md:w-10/12 mx-auto">
        Za co doceniają Nas Goście?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#ECE6E1] p-6 md:p-8 rounded-3xl">
        {/* Text Section */}
        <div className="flex flex-col justify-between h-full space-y-6">
          {/* Numbered Dots */}
          <div className="flex flex-wrap gap-2 mb-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`text-sm w-6 h-6 rounded-full border ${
                  active === index
                    ? "bg-[#B48E7B] text-white"
                    : "text-[#B48E7B]"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-semibold font-playfair mb-3">
              {cards[active].title}
            </h2>

            <p className="text-sm text-gray-700 mb-6 max-w-md">
              {cards[active].desc}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="border animate-bounceX border-[#B48E7B] text-[#B48E7B] px-4 py-1 rounded-xl hover:bg-[#B48E7B] hover:text-white transition-all"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="border animate-bounceX border-[#B48E7B] text-[#B48E7B] px-4 py-1 rounded-xl hover:bg-[#B48E7B] hover:text-white transition-all"
            >
              →
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="p-0 md:p-10">
          <img
            src={cards[active].img}
            alt={cards[active].title}
            className="rounded-3xl w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
