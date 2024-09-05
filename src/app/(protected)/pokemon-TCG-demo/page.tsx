import React from "react";
import Carousel from "@/components/ui/carousel/carousel";

const OPTIONS = {};
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const PokemonTCGDemo = () => {
  return (
    <div>
      <Carousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default PokemonTCGDemo;
