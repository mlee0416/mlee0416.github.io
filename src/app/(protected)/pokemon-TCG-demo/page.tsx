import React from "react";
import Carousel from "@/components/ui/carousel/carousel";

const OPTIONS = {};
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const PokemonTCGDemo = () => {
  return (
    <>
      <Carousel slides={SLIDES} options={OPTIONS} />
    </>
  );
};

export default PokemonTCGDemo;
