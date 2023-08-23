import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import RecentCardActivity from "../components/RecentCardActivity";
import Property1profile from "../components/Property1profile";
import PriceCard from "../components/PriceCard";

const Card: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer8Click = () => {
    navigate("/home");
  };

  const onGroupContainer10Click = () => {
    navigate("/");
  };

  const onGroupContainer11Click = () => {
    navigate("/transaction");
  };

  const onGroupContainer13Click = () => {
    navigate("/send");
  };

  const onGroupLinkClick = () => {
    navigate("/send");
  };

  return (
    <div className="relative bg-gray-100 w-full h-[844px] overflow-hidden text-center text-sm text-white font-inter">
      <RecentCardActivity />
      <Property1profile
        iconCode="/006homebutton-12.svg"
        iconTextCode="/002swap-12.svg"
        property1profilePosition="absolute"
        property1profileTop="764px"
        property1profileLeft="0px"
        ellipseDivBackground="radial-gradient(50% 50% at 50% 50%, #00ea5e, rgba(182, 239, 17, 0))"
        ellipseDivHeight="100%"
        ellipseDivTop="0%"
        ellipseDivRight="56.15%"
        ellipseDivLeft="23.33%"
        rectangleDivHeight="100%"
        rectangleDivBottom="0%"
        groupDivWidth="10.26%"
        groupDivRight="83.59%"
        groupDivCursor="pointer"
        groupDivHeight="67.5%"
        groupDivTop="16.25%"
        groupDivBottom="16.25%"
        homeButton1IconWidth="60%"
        homeButton1IconRight="22.5%"
        homeButton1IconLeft="17.5%"
        homeFontFamily="Inter"
        groupDivWidth1="8.21%"
        groupDivRight1="62.56%"
        groupDivCursor1="unset"
        groupDivHeight1="67.5%"
        groupDivTop1="16.25%"
        groupDivBottom1="16.25%"
        groupDivTextDecoration="unset"
        cardFontFamily="Inter"
        creditCard11IconWidth="75%"
        creditCard11IconRight="9.38%"
        creditCard11IconLeft="15.63%"
        groupDivWidth2="11.03%"
        groupDivRight2="5.38%"
        groupDivHeight2="67.5%"
        groupDivTop2="16.25%"
        groupDivBottom2="16.25%"
        groupDivCursor2="pointer"
        groupDivTextDecoration1="unset"
        profileFontFamily="Inter"
        user11IconWidth="55.81%"
        user11IconRight="25.58%"
        user11IconLeft="18.6%"
        groupDivWidth3="20%"
        groupDivRight3="28.97%"
        groupDivCursor3="pointer"
        groupDivHeight3="67.5%"
        groupDivTop3="16.25%"
        groupDivBottom3="16.25%"
        groupDivTextDecoration2="unset"
        transactionFontFamily="Inter"
        swap1IconWidth="30.77%"
        swap1IconRight="37.18%"
        swap1IconLeft="32.05%"
        rectangleDivBackgroundColor="#00ea5e"
        rectangleDivHeight1="2.5%"
        rectangleDivWidth="8.46%"
        rectangleDivRight="62.31%"
        rectangleDivBottom1="97.5%"
        rectangleDivLeft="29.23%"
        onGroupContainerClick={onGroupContainer8Click}
        onGroupContainer2Click={onGroupContainer10Click}
        onGroupContainer3Click={onGroupContainer11Click}
      />
      <div
        className="absolute top-[284px] left-[23px] w-[83px] h-[90px] cursor-pointer"
        onClick={onGroupContainer13Click}
      >
        <div className="absolute top-[0px] left-[9px] w-16 h-16">
          <div className="absolute top-[0px] left-[0px] rounded-341xl bg-gray-100 [backdrop-filter:blur(100px)] w-16 h-16" />
          <img
            className="absolute top-[19px] left-[19px] w-[25.71px] h-[25.71px] overflow-hidden"
            alt=""
            src="/send-1.svg"
          />
        </div>
        <div className="absolute top-[68px] left-[0px] leading-[22px]">
          Send Money
        </div>
      </div>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[284px] left-[128px] w-16 h-[90px] text-[inherit]"
        to="/send"
        onClick={onGroupLinkClick}
      >
        <img
          className="absolute top-[0px] left-[0px] rounded-341xl w-16 h-16 object-cover"
          alt=""
          src="/rectangle-32@2x.png"
        />
        <div className="absolute top-[68px] left-[16px] leading-[22px]">
          Liam
        </div>
      </Link>
      <div className="absolute top-[284px] left-[392px] w-16 h-[90px] font-headline-5">
        <img
          className="absolute top-[0px] left-[0px] rounded-341xl w-16 h-16 object-cover"
          alt=""
          src="/rectangle-15@2x.png"
        />
        <div className="absolute top-[68px] left-[13px] leading-[22px]">
          Alina
        </div>
      </div>
      <div className="absolute top-[284px] left-[304px] w-16 h-[90px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-341xl w-16 h-16 object-cover"
          alt=""
          src="/rectangle-161@2x.png"
        />
        <div className="absolute top-[68px] left-[18px] leading-[22px]">
          Toni
        </div>
      </div>
      <div className="absolute top-[284px] left-[216px] w-16 h-[90px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-341xl w-16 h-16 object-cover"
          alt=""
          src="/rectangle-14@2x.png"
        />
        <div className="absolute top-[68px] left-[15px] leading-[22px]">
          Sofia
        </div>
      </div>
      <PriceCard />
    </div>
  );
};

export default Card;
