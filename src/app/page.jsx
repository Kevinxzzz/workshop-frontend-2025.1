"use client";
import { useState } from "react";
import Cabecalho from "@/components/Cabecalho";
import SearchCards from "@/components/SearchCards";
import CarouselCards from "@/components/CarouselCards";
import index from "@/service";

function HomePage(data) {
  const [pag, setPag] = useState("page1");
  
  return (
    <div>
      <Cabecalho setPag={setPag} />
      {pag === "page1" ? <CarouselCards /> : <SearchCards />}
    </div>
  );
}

export default HomePage;
