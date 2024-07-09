import { BeatLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex w-full h-screen  justify-center ">
      <div className="m-auto">
        <BeatLoader />
      </div>
    </div>
  );
};

export default Loading;
