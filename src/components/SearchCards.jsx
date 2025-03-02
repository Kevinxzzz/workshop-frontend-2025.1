'use client'
import React, { useEffect, useState } from "react";

export default function SearchCards() {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState('');

  const url = "https://api.pokemontcg.io/v2/cards/";

  useEffect(() => {
    const getCards = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();

        console.log("Data fetched:", data);

        if (data?.data && Array.isArray(data.data)) {
          setCards(data.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getCards();
  }, []);

  // Filtrando os cards com base no nome e outros critérios de pesquisa
  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div role="status" className="flex justify-center items-center h-full">
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
    <div className="main-container p-8">
      <h1 className="font-bold text-4xl mb-8 text-white">Search Pokémon Cards</h1>

      {/* Campo de Pesquisa */}
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="p-2 px-4 rounded-xl text-zinc-400 font-bold w-60 mb-4"
        placeholder="Search Pokémon card"
      />

      {/* Contêiner com Scroll */}
      <div className="flex flex-wrap items-center gap-8 overflow-y-auto max-h-[500px] scroll-container">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <div
              key={card.id}
              className="card flex-shrink-0 bg-white shadow-md rounded-lg"
              style={{ width: "200px" }}
            >
              <img
                src={card.images.small}
                className="card-img-top object-cover h-40 w-full"
                alt={card.name}
              />
              <div className="card-body p-4">
                <h5 className="card-title text-center font-semibold">{card.name}</h5>
                <ul className="text-sm">
                  <li>Type: {card.types ? card.types.join(", ") : "N/A"}</li>
                  <li>Subtype: {card.subtypes ? card.subtypes.join(", ") : "N/A"}</li>
                  <li>Level: {card.level || "N/A"}</li>
                  <li>HP: {card.hp || "N/A"}</li>
                  <li>Rarity: {card.rarity}</li>
                </ul>
              </div>
            </div>
          ))
        ) : (
          <p>No cards found.</p>
        )}
      </div>
    </div>
  );
}
