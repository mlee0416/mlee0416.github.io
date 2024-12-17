import React from "react";

interface IContentContainer {
  children: React.ReactNode;
}
const ContentContainer = ({ children }: IContentContainer) => {
  return (
    <div className="flex  flex-col justify-center items-center gap-y-20 p-20 content-center h-full">
      {children}
    </div>
  );
};

export default ContentContainer;
