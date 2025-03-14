export default function ListCards({cards, search}){
    const filteredCards = cards.filter((card) =>
        card.name.toLowerCase().includes(search.toLowerCase())
      );
     
    return(
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
    );
}