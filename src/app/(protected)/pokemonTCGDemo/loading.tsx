import Image from "next/image";
import React from "react";
import gastly from "@/../public/gastly.gif";
const Loading = () => {
  return (
    <div className="flex h-screen">
      <Image
        src={gastly}
        alt="gastly"
        width={500}
        height={500}
        className="rounded-full m-auto"
      />
    </div>
  );
};

export default Loading;
