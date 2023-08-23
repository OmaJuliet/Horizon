import { FunctionComponent, useMemo, type CSSProperties } from "react";

type RecentCardActivityType = {
  /** Style props */
  rectangleDivTop?: CSSProperties["top"];
};

const RecentCardActivity: FunctionComponent<RecentCardActivityType> = ({
  rectangleDivTop,
}) => {
  const groupDiv4Style: CSSProperties = useMemo(() => {
    return {
      top: rectangleDivTop,
    };
  }, [rectangleDivTop]);

  return (
    <div
      className="absolute top-[398px] left-[-1px] w-[392px] h-[496px] text-left text-xs text-white font-inter"
      style={groupDiv4Style}
    >
      <div className="absolute top-[0px] left-[0px] rounded-t-13xl rounded-b-none bg-gray-200 w-[390px] h-[496px]" />
      <div className="absolute top-[153px] left-[24px] w-[342px] flex flex-col items-center justify-center gap-[24px]">
        <div className="self-stretch flex flex-row items-center justify-center gap-[177px]">
          <div className="relative w-[126px] h-12">
            <img
              className="absolute top-[0px] left-[0px] rounded-71xl w-12 h-12 object-cover"
              alt=""
              src="/rectangle-17@2x.png"
            />
            <div className="absolute top-[2px] left-[60px] w-[66px] h-11">
              <div className="absolute top-[24px] left-[0px] leading-[20px] opacity-[0.8]">
                12 jun 2022
              </div>
              <div className="absolute top-[0px] left-[0px] text-base leading-[24px] font-medium">
                Klare
              </div>
            </div>
          </div>
          <div className="relative text-base leading-[24px] font-semibold text-right">
            -$59
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[174px]">
          <div className="relative w-[126px] h-12">
            <img
              className="absolute top-[0px] left-[0px] rounded-71xl w-12 h-12 object-cover"
              alt=""
              src="/rectangle-17@2x.png"
            />
            <img
              className="absolute top-[0px] left-[0px] rounded-341xl w-12 h-12 object-cover"
              alt=""
              src="/rectangle-3@2x.png"
            />
            <div className="absolute top-[2px] left-[60px] w-[66px] h-11">
              <div className="absolute top-[24px] left-[0px] leading-[20px] opacity-[0.8]">
                12 jun 2022
              </div>
              <div className="absolute top-[0px] left-[0px] text-base leading-[24px] font-medium">
                Liam
              </div>
            </div>
          </div>
          <div className="relative text-base leading-[24px] font-semibold text-right">
            $690
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[180px]">
          <div className="relative w-[126px] h-12">
            <img
              className="absolute top-[0px] left-[0px] rounded-71xl w-12 h-12 object-cover"
              alt=""
              src="/rectangle-17@2x.png"
            />
            <img
              className="absolute top-[0px] left-[0px] rounded-341xl w-12 h-12 object-cover"
              alt=""
              src="/rectangle-16@2x.png"
            />
            <div className="absolute top-[2px] left-[60px] w-[66px] h-11">
              <div className="absolute top-[24px] left-[0px] leading-[20px] opacity-[0.8]">
                12 jun 2022
              </div>
              <div className="absolute top-[0px] left-[0px] text-base leading-[24px] font-medium">
                Jackson
              </div>
            </div>
          </div>
          <div className="relative text-base leading-[24px] font-semibold text-right">
            -$12
          </div>
        </div>
      </div>
      <div className="absolute top-[22.23px] left-[calc(50%_-_26px)] rounded-81xl bg-lightsteelblue w-[50px] h-[6.95px]" />
      <div className="absolute top-[52px] left-[24px] w-[368px] h-[78.63px] text-xl">
        <div className="absolute top-[0px] left-[0px] leading-[28px] inline-block w-[141px] h-[34.63px]">
          Recent activity
        </div>
        <div className="absolute top-[54.63px] left-[0px] flex flex-row items-start justify-start gap-[22px] text-center text-xs">
          <div className="rounded-2xl bg-gray-200 flex flex-row py-0.5 px-3 items-center justify-center">
            <div className="relative leading-[20px]">Today</div>
          </div>
          <div className="rounded-2xl bg-springgreen flex flex-row py-0.5 px-3 items-center justify-center text-gray-200">
            <div className="relative leading-[20px]">This Week</div>
          </div>
          <div className="rounded-2xl bg-gray-200 flex flex-row py-0.5 px-3 items-center justify-center">
            <div className="relative leading-[20px]">This Month</div>
          </div>
          <div className="rounded-2xl bg-gray-200 flex flex-row py-0.5 px-3 items-center justify-center">
            <div className="relative leading-[20px]">6 Month</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentCardActivity;
