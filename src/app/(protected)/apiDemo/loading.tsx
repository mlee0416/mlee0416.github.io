import Image from "next/image";
import React from "react";
import snorlax from "@/../public/snorlax.gif";
const Loading = () => {
  return (
    <div>
      <Image src={snorlax} alt="snorlax" width={500} height={500} />
    </div>
  );
};

export default Loading;
