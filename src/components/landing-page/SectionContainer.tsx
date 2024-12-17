import React, { ReactNode } from "react";

interface ISectionContainer {
  children: ReactNode;
}

const SectionContainer = ({ children }: ISectionContainer) => {
  return (
    <div className="p-10 grid justify-center items-center gap-y-20">
      {children}
    </div>
  );
};

export default SectionContainer;
