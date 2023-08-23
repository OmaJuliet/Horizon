import { FunctionComponent } from "react";

const SupportContainer: FunctionComponent = () => {
  return (
    <div className="absolute top-[445px] left-[24px] w-[342px] h-[60px] text-left text-base text-white font-inter">
      <div className="absolute top-[0px] left-[0px] rounded-2xl bg-gray-100 w-[342px] h-[60px]" />
      <div className="absolute top-[10px] left-[20px] w-[121px] h-10">
        <div className="absolute top-[8px] left-[60px] leading-[24px]">
          Support
        </div>
        <div className="absolute top-[0px] left-[0px] w-10 h-10">
          <div className="absolute top-[0px] left-[0px] rounded-2xl bg-gray-100 [backdrop-filter:blur(100px)] w-10 h-10" />
          <img
            className="absolute top-[10px] left-[10px] w-5 h-5 overflow-hidden"
            alt=""
            src="/headset-11.svg"
          />
        </div>
      </div>
      <img
        className="absolute top-[18px] left-[298px] w-6 h-6 overflow-hidden"
        alt=""
        src="/next-11.svg"
      />
    </div>
  );
};

export default SupportContainer;
