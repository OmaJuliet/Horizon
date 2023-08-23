import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import Property1profile from "../components/Property1profile";

const Transaction: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer8Click = () => {
    navigate("/home");
  };

  const onGroupContainer9Click = () => {
    navigate("/card");
  };

  const onGroupContainer10Click = () => {
    navigate("/");
  };

  return (
    <div className="relative bg-gray-100 w-full h-[844px] overflow-hidden text-left text-xs text-white font-inter">
      <div className="absolute top-[0px] left-[-2px] w-[394px] h-[843px]">
        <div className="absolute top-[0px] left-[0px] bg-gray-200 w-[390px] h-[843px]" />
        <div className="absolute top-[160px] left-[26px] w-[342px] h-[326.32px] flex flex-col items-center justify-start gap-[24px]">
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
        <div className="absolute top-[62px] left-[26px] w-[368px] h-[73px] text-xl">
          <div className="absolute top-[0px] left-[0px] inline-block w-[141px]">
            Recent activity
          </div>
          <div className="absolute top-[49px] left-[0px] flex flex-row items-start justify-start gap-[22px] text-center text-xs">
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
      <Property1profile
        iconCode="/006homebutton-12.svg"
        iconTextCode="/002swap-12.svg"
        property1profilePosition="absolute"
        property1profileTop="763px"
        property1profileLeft="0px"
        ellipseDivBackground="radial-gradient(50% 50% at 50% 50%, #00ea5e, rgba(182, 239, 17, 0))"
        ellipseDivHeight="98.77%"
        ellipseDivTop="1.23%"
        ellipseDivRight="29.23%"
        ellipseDivLeft="50.26%"
        rectangleDivHeight="98.77%"
        rectangleDivBottom="1.23%"
        groupDivWidth="9.74%"
        groupDivRight="84.1%"
        groupDivCursor="pointer"
        groupDivHeight="66.67%"
        groupDivTop="16.05%"
        groupDivBottom="17.28%"
        homeButton1IconWidth="63.16%"
        homeButton1IconRight="18.42%"
        homeButton1IconLeft="18.42%"
        homeFontFamily="Gilroy-Medium"
        groupDivWidth1="8.46%"
        groupDivRight1="62.31%"
        groupDivCursor1="pointer"
        groupDivHeight1="66.67%"
        groupDivTop1="16.05%"
        groupDivBottom1="17.28%"
        groupDivTextDecoration="unset"
        cardFontFamily="Gilroy-Medium"
        creditCard11IconWidth="72.73%"
        creditCard11IconRight="12.12%"
        creditCard11IconLeft="15.15%"
        groupDivWidth2="10.26%"
        groupDivRight2="6.15%"
        groupDivHeight2="66.67%"
        groupDivTop2="16.05%"
        groupDivBottom2="17.28%"
        groupDivCursor2="pointer"
        groupDivTextDecoration1="unset"
        profileFontFamily="Gilroy-Medium"
        user11IconWidth="60%"
        user11IconRight="20%"
        user11IconLeft="20%"
        groupDivWidth3="19.23%"
        groupDivRight3="29.74%"
        groupDivCursor3="unset"
        groupDivHeight3="66.67%"
        groupDivTop3="16.05%"
        groupDivBottom3="17.28%"
        groupDivTextDecoration2="unset"
        transactionFontFamily="Gilroy-Medium"
        swap1IconWidth="32%"
        swap1IconRight="34.67%"
        swap1IconLeft="33.33%"
        rectangleDivBackgroundColor="#00ea5e"
        rectangleDivHeight1="2.47%"
        rectangleDivWidth="19.23%"
        rectangleDivRight="29.74%"
        rectangleDivBottom1="97.53%"
        rectangleDivLeft="51.03%"
        onGroupContainerClick={onGroupContainer8Click}
        onGroupContainer1Click={onGroupContainer9Click}
        onGroupContainer2Click={onGroupContainer10Click}
      />
    </div>
  );
};

export default Transaction;
