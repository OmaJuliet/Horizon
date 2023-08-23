import { FunctionComponent } from "react";

const PriceCard: FunctionComponent = () => {
  return (
    <div className="absolute top-[60px] left-[24px] w-[342px] h-[200px] text-left text-sm text-silver font-inter">
      <img
        className="absolute top-[0px] left-[0px] rounded-2xl w-[342px] h-[200px] object-cover"
        alt=""
        src="/rectangle-13@2x.png"
      />
      <img
        className="absolute top-[0px] left-[0px] w-[342px] h-[200px] object-cover"
        alt=""
        src="/mask-group@2x.png"
      />
      <div className="absolute top-[24px] left-[24px] w-[110px] h-[54px]">
        <div className="absolute top-[0px] left-[0px] leading-[22px]">
          Current Balance
        </div>
        <div className="absolute top-[26px] left-[0px] text-xl leading-[28px] text-white">
          $42,295.00
        </div>
      </div>
      <div className="absolute top-[122px] left-[24px] w-[177px] h-[54px]">
        <div className="absolute top-[0px] left-[0px] leading-[22px]">
          Credit card
        </div>
        <div className="absolute top-[26px] left-[0px] text-xl leading-[28px] text-white">
          0347 582 425 245
        </div>
      </div>
      <img
        className="absolute top-[147px] left-[278px] w-10 h-10 overflow-hidden"
        alt=""
        src="/visa-1.svg"
      />
    </div>
  );
};

export default PriceCard;
