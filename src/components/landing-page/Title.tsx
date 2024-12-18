import React from "react";
import { LinearGradient } from "react-text-gradients";

interface ITitle {
  title: string;
  id: string;
}

const Title = ({ title, id }: ITitle) => {
  return (
    <LinearGradient
      gradient={["to left", "#17acff ,#ff68f0"]}
      className="text-5xl font-semibold text-center"
      id={id}
    >
      {title}
    </LinearGradient>
  );
};

export default Title;
