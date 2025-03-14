"use client";
import React, { useEffect, useState } from "react";
import { getCards } from "@/service";

export default function SearchCards() {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");



  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      try {

        const data= await getCards();


        if (data?.data && Array.isArray(data.data)) {
          setCards(data.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);


  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div role="status" className="flex justify-center items-center h-screen w-screen transform translate-y-[-60px]">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      {/* Search Field */}
      <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 mb-6 text-center">
        Search Pokémon Cards
      </h1>

      {/* Search Input */}
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 px-4 rounded-xl text-gray-100 font-bold w-60 mb-4"
        placeholder="Search by card name..."
      />

      {/* Scrollable Cards Container */}
      <div className="flex flex-wrap justify-center items-center gap-8 overflow-y-auto max-h-[500px] w-full">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <div
              key={card.id}
              className="card flex-shrink-0 bg-gradient-to-br from-[#333333] via-[#555555] to-[#777777] w-[250px] shadow-lg rounded-xl"
            >
              <img
                src={card.images.small}
                className="card-img-top object-cover h-40 w-full rounded-t-xl"
                alt={card.name}
              />
              {/* Degradê para a área de informações */}
              <div className="card-body p-6 bg-gradient-to-r from-[#333333] via-[#555555] to-[#777777] rounded-b-xl shadow-lg">
                <h5 className="card-title text-center font-semibold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white via-white-800 to-gray-400 mb-4">
                  {card.name}
                </h5>
                <ul className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-gray-600 space-y-2">
                  <li className="flex justify-between">
                    <span className="font-medium text-gray-300">Type:</span>
                    <span className="text-gray-200">
                      {card.types ? card.types.join(", ") : "N/A"}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium text-gray-300">Subtype:</span>
                    <span className="text-gray-200">
                      {card.subtypes ? card.subtypes.join(", ") : "N/A"}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium text-gray-300">Level:</span>
                    <span className="text-gray-200">{card.level || "N/A"}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium text-gray-300">HP:</span>
                    <span className="text-gray-200">{card.hp || "N/A"}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium text-gray-300">Rarity:</span>
                    <span className="text-gray-200">{card.rarity}</span>
                  </li>
                </ul>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No cards found</p>
        )}
      </div>
    </div>
  );
}