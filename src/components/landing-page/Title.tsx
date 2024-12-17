import React from "react";

interface ITitle {
  title: string;
  id: string;
}

const Title = ({ title, id }: ITitle) => {
  return (
    <h1 className="text-5xl font-semibold text-center" id={id}>
      {title}
    </h1>
  );
};

export default Title;
