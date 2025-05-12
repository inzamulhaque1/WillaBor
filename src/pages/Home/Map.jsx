import React from "react";

const Map = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-bold font-playfair text-gray-800 mb-6 text-center">
        Znajdź nas
      </h2>
      <div className="rounded-xl overflow-hidden shadow-lg relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.1234567890123!2d19.948999999999997!3d50.061999999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b1234567890%3A0x123456789abcdef!2sWilla%20B%C3%B3r!5e0!3m2!1sen!2spl!4v1234567890123!5m2!1sen!2spl"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa lokalizacji Willa Bór"
          className="w-full"
        ></iframe>
        <div>
          <button className="bg-black absolute top-5 right-5 rounded-xl  text-xs sm:text-sm text-[#F0E2D7] px-3 sm:px-4 py-1 sm:py-2  shadow hover:bg-[#B48E7B] hover:text-white transition">
            Rezerwuj →
          </button>
        </div>
      </div>
      <div className="mt-6 text-center text-gray-600">
        <p className="text-lg font-medium">Willa Bór</p>
        <p className="mt-2">ul. Przykładowa 123, 34-500 Zakopane</p>
        <p className="mt-1">+48 123 456 789</p>
      </div>
    </div>
  );
};

export default Map;
