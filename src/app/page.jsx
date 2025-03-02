"use client";
import PagPrincipal from "@/components/PagPrincipal";
import PagSecundaria from "@/components/PagSecundaria";
import { useState, useEffect } from "react";

function HomePage() {
  const [pag, setPag] = useState("page1");
  const mudarPag = (pagina) => {
    setPag(pagina);
  };

  useEffect(() => {
    if (pag === "page1") {
      console.log("Página 1");
    } else {
      console.log("Página 2");
    }
  }, [pag]);

  return (
    <div>
      {/* Cabeçalho */}

      <header>
        <img src="pokeballLogo.png" alt="Pokéball Logo" className="img" />

        <div className="botoes">
          <button
            onClick={() => setPag("page1")}
            className="text-white bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 
            font-medium rounded-full w-10 h-10 text-center inline-flex items-center justify-center me-2 dark:bg-black dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            1
          </button>
          <button
            onClick={() => setPag("page2")}
            className="text-white bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 
            font-medium rounded-full w-10 h-10 text-center inline-flex items-center justify-center me-2 dark:bg-black dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            2
          </button>
        </div>
      </header>
      {/* /cabeçalho */}
      <main  className="imageFundo">
        {pag === "page1" ? <PagPrincipal /> : <PagSecundaria  />}
      </main>
    </div>
  );
}

export default HomePage;
