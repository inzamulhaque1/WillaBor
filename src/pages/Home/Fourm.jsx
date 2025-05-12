import React from "react";

const Fourm = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 ">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair text-gray-800 mb-2">
          Masz jakieś pytania?
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Skontaktuj się z formularza kontaktowego
        </p>
      </div>

      <form className="space-y-6 sm:space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-4">
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <input
                type="text"
                placeholder="Imię"
                className="w-full p-3 border border-[#D4C4B0] rounded-lg text-[#D4C4B0] focus:outline-none focus:ring-1 focus:ring-[#B48E7B]"
              />
              <input
                type="text"
                placeholder="Nazwisko"
                className="w-full p-3 border border-[#D4C4B0] rounded-lg text-[#D4C4B0] focus:outline-none focus:ring-1 focus:ring-[#B48E7B]"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-[#D4C4B0] rounded-lg text-[#D4C4B0] focus:outline-none focus:ring-1 focus:ring-[#B48E7B]"
            />
          </div>

          <div className="md:col-span-1">
            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full h-full p-3 border border-[#D4C4B0] rounded-lg text-[#D4C4B0] focus:outline-none focus:ring-1 focus:ring-[#B48E7B] resize-none"
            ></textarea>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="newsletter"
              className="w-4 h-4 border border-[#D4C4B0] rounded mt-1"
            />
            <label
              htmlFor="newsletter"
              className="text-sm sm:text-base text-[#B48E7B] px-3"
            >
              Zapisz mnie do newslettera i wyrażam zgodę na otrzymywanie
              informacji o promocjach
            </label>
          </div>
          <button
            type="submit"
            className="px-20 py-2 bg-[#F0E2D7] text-gray-800 rounded-lg hover:bg-[#B48E7B] hover:text-white transition"
          >
            Wyślij
          </button>
        </div>
      </form>
    </div>
  );
};

export default Fourm;
