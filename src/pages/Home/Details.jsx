// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import z1 from "../../assets/img/z1.png";
import z3 from "../../assets/img/z3.png";
import z2 from "../../assets/img/z2.png";
import z4 from "../../assets/img/z4.png";
import z5 from "../../assets/img/z5.png";
import z6 from "../../assets/img/z6.png";
import z7 from "../../assets/img/z7.png";
import z8 from "../../assets/img/z8.png";

const Details = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isExiting, setIsExiting] = useState(false);

  const locations = [
    {
      id: 1,
      name: "DWORZEC PKP/PKS",
      distance: "250M",
      description: "Główny dworzec kolejowy i autobusowy w Zakopanem, dogodny punkt komunikacyjny dla podróżnych.",
      imageUrl: z1,
      borderW: "w-3/7",
      author: 'zakopane.naszemiasto.pl',
      title: 'Dworzec pkp/pks'
    },
    {
      id: 2,
      name: "RÓWNIEŃ KRUPOWA",
      distance: "650M",
      description: "Popularne miejsce spotkań i wydarzeń plenerowych w centrum Zakopanego.",
      imageUrl: z2,
      borderW: "w-3/6",
      author: 'zakopane.naszemiasto.pl',
      title: 'Dworzec pkp/pks'
    },
    {
      id: 3,
      name: "KRUPÓWKI",
      distance: "850M",
      description: "Główna ulica handlowa i turystyczna Zakopanego, pełna sklepów, restauracji i atrakcji.",
      imageUrl: z3,
      borderW: "w-3/8",
      author: 'zakopane.naszemiasto.pl',
      title: 'Dworzec pkp/pks'
    },
    {
      id: 4,
      name: "ANTAŁÓWKA",
      distance: "1,1KM",
      description: "Świetny punkt widokowy i miejsce na lekki spacer – idealne na złapanie oddechu i kilka pięknych zdjęć. Szczególnie polecana na poranny rozruch albo złotą godzinę z aparatem.",
      imageUrl: z4,
      borderW: "w-4/9",
      author: 'zakopane.naszemiasto.pl',
      title: 'Dworzec pkp/pks'
    },
    {
      id: 5,
      name: "PARK IMIENIA PREZYDENTA RP LECHA KACZYŃSKIEGO",
      distance: "300M",
      description: "Park miejski upamiętniający prezydenta RP, miejsce odpoczynku i rekreacji.",
      imageUrl: z5,
      borderW: "w-5/7",
      author: 'zakopane.naszemiasto.pl',
      title: 'Dworzec pkp/pks'
    },
    {
      id: 6,
      name: "TERMY ZAKOPIAŃSKIE",
      distance: "600M",
      description: "Kompleks basenów termalnych oferujący relaks i wypoczynek w ciepłych wodach geotermalnych.",
      imageUrl: z6,
      borderW: "w-3/6",
      author: 'zakopane.naszemiasto.pl',
      title: 'Dworzec pkp/pks'
    },
    {
      id: 7,
      name: "BUBULA BISTRO",
      distance: "150M",
      description: "Przytulna restauracja serwująca dania kuchni regionalnej i międzynarodowej.",
      imageUrl: z7,
      borderW: "w-2/5",
      author: 'zakopane.naszemiasto.pl',
      title: 'Dworzec pkp/pks'
    },
    {
      id: 8,
      name: "PARK MIEJSKI IM. MARSAŁKA JÓZEFA PIŁSUDSKIEGO",
      distance: "1,2KM",
      description: "Zabytkowy park miejski, idealne miejsce na spacery i odpoczynek wśród zieleni.",
      imageUrl: z8,
      borderW: "w-7/10",
      author: 'zakopane.naszemiasto.pl',
      title: 'Dworzec pkp/pks'
    }
  ];

  const handleLocationClick = (location) => {
    if (selectedLocation && location.id === selectedLocation.id) {
      // If the same location is clicked, trigger the exit animation
      setIsExiting(true);
      setTimeout(() => {
        setSelectedLocation(null);
        setIsExiting(false);
      }, 500); // Match the animation duration (0.5s)
    } else {
      // If a new location is clicked, set it immediately
      setSelectedLocation(location);
      setIsExiting(false);
    }
  };

  return (
    <div className="py-6">
      <div className="">
        <div className="flex flex-col md:flex-row">
          {/* Left side - List of locations (original design) */}
          <div className="w-full md:w-1/2">
            <h2 className="w-8/12 mx-auto font-serif text-xl sm:text-2xl md:text-3xl mb-8">
              Co znajduje się w pobliżu Willi Bór?
            </h2>
            
            <div className="space-y-4">
              {locations.map((location) => (
                <div key={location.id}>
                  <div className="flex w-8/12 mx-auto">
                    <span 
                      className="text-[#B48E7B] text-base sm:text-lg mr-2 cursor-pointer"
                      onClick={() => handleLocationClick(location)}
                    >→</span>
                    <p 
                      className="text-[#B48E7B] text-sm sm:text-base flex-1 cursor-pointer"
                      onClick={() => handleLocationClick(location)}
                    >
                      {location.name} - {location.distance}
                    </p>
                  </div>
                  <div className={`border-b ${location.borderW} mt-2`}></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side - Location details card (only shows when a location is selected) */}
          <div className="w-[500px] px-4 mt-8 md:mt-0">
            {selectedLocation && (
              <div 
                className="bg-[#F0E2D7] rounded-lg shadow-md overflow-hidden"
                style={{
                  animation: isExiting ? 'slideOutRight 0.5s ease-in forwards' : 'slideInRight 0.5s ease-out forwards',
                }}
                key={selectedLocation.id} // Key to force re-render and reset animation
              >
                <div className="h-56 bg-gray-100">
                  <img 
                    src={selectedLocation.imageUrl} 
                    alt={selectedLocation.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xs text-[#B48E7B] mb-2">
                    {selectedLocation.author}
                  </h3>
                  <p className="font-playfair text-3xl py-5">{selectedLocation.title}</p>
                  <p className="text-gray-700 mb-6">
                    {selectedLocation.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Inline CSS for animations */}
      <style>
        {`
          @keyframes slideInRight {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slideOutRight {
            from {
              transform: translateX(0);
              opacity: 1;
            }
            to {
              transform: translateX(100%);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Details;