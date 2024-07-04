"use client";
import React from "react";
import { getPokedex } from "./utils/api";

interface IPaginationProps {
  count: number;
  next: string;
  previous: string;
}
const Pagination = ({ count, next, previous }: IPaginationProps) => {
  const nextClick = async () => {
    console.log("click", next);
    await getPokedex(next);
  };
  return (
    <div>
      {next && <button onClick={nextClick}>Next</button>}
      {previous && <button onClick={nextClick}>Previous</button>}
    </div>
  );
};

export default Pagination;
