import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";

export default function PokemonCarousel() {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);

  const url = "https://api.pokemontcg.io/v2/cards/";

  useEffect(() => {
    const getCards = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Fetched Data:", data);

        if (data?.data && Array.isArray(data.data)) {
          setCards(data.data.slice(0, 10)); // Pegando apenas os 10 primeiros
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getCards();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <span className="text-xl font-semibold">Carregando...</span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full"
      >
        {cards.length > 0 ? (
          cards.map((card) => (
            <SwiperSlide key={card.id} className="flex justify-center">
              <img
                src={card.images?.large || "/fallback.png"}
                alt="Pokemon"
                className="object-contain rounded-lg w-full h-96"
              />
            </SwiperSlide>
          ))
        ) : (
          <p className="text-center p-4">Nenhum card encontrado.</p>
        )}
      </Swiper>
    </div>
  );
}