import { useEffect } from "react";
import ButtonNavBar from "./ButtonNavBar";


export default function Cabecalho({ pag,setPag }) {
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
    <header>
      <img src="pokeballLogo.png" alt="Pokéball Logo" className="img" />
      <div className="botoes">
        <ButtonNavBar onClick={() => mudarPag("page1")} setPag="1" />
        <ButtonNavBar onClick={() => mudarPag("page2")} setPag="2"/>
      </div>
    </header>
  );
}
