import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import RecentCardActivity from "../components/RecentCardActivity";
import Property1profile from "../components/Property1profile";
import SectionCard from "../components/SectionCard";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupLinkClick = () => {
    navigate("/card");
  };

  const onGroupLink1Click = () => {
    navigate("/");
  };

  const onGroupLink2Click = () => {
    navigate("/transaction");
  };

  return (
    <div className="relative bg-gray-100 w-full h-[844px] overflow-hidden text-left text-sm text-white font-inter">
      <RecentCardActivity rectangleDivTop="348px" />
      <div className="absolute top-[132px] left-[24px] w-[157px] h-[66px]">
        <div className="absolute top-[0px] left-[0px] leading-[22px] opacity-[0.6]">
          Total balance
        </div>
        <div className="absolute top-[30px] left-[0px] text-9xl leading-[36px] font-medium text-springgreen">
          $42,295.00
        </div>
      </div>
      <div className="absolute top-[63px] left-[84px] w-[129px] h-[42px] text-base">
        <b className="absolute top-[0px] left-[0px]">Rimuru Tempest</b>
        <div className="absolute top-[27px] left-[0px] text-xs opacity-[0.6]">
          Good Morning
        </div>
      </div>
      <div className="absolute top-[209.5px] left-[23.5px] box-border w-[343px] h-px opacity-[0.24] border-t-[1px] border-solid border-white" />
      <img
        className="absolute top-[73px] left-[334px] w-6 h-6"
        alt=""
        src="/group-5.svg"
      />
      <Property1profile
        iconCode="/006homebutton-12.svg"
        iconTextCode="/002swap-12.svg"
        property1profilePosition="absolute"
        property1profileTop="764px"
        property1profileLeft="0px"
        ellipseDivBackground="radial-gradient(50% 50% at 50% 50%, #00ea5e, rgba(182, 239, 17, 0))"
        ellipseDivHeight="100%"
        ellipseDivTop="0%"
        ellipseDivRight="79.49%"
        ellipseDivLeft="0%"
        rectangleDivHeight="100%"
        rectangleDivBottom="0%"
        groupDivWidth="10.26%"
        groupDivRight="83.59%"
        groupDivCursor="unset"
        groupDivHeight="67.5%"
        groupDivTop="16.25%"
        groupDivBottom="16.25%"
        homeButton1IconWidth="60%"
        homeButton1IconRight="22.5%"
        homeButton1IconLeft="17.5%"
        homeFontFamily="Inter"
        groupDivWidth1="8.21%"
        groupDivRight1="62.56%"
        groupDivCursor1="pointer"
        groupDivHeight1="67.5%"
        groupDivTop1="16.25%"
        groupDivBottom1="16.25%"
        groupDivTextDecoration="none"
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
        groupDivTextDecoration1="none"
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
        groupDivTextDecoration2="none"
        transactionFontFamily="Inter"
        swap1IconWidth="30.77%"
        swap1IconRight="37.18%"
        swap1IconLeft="32.05%"
        rectangleDivBackgroundColor="#00ea5e"
        rectangleDivHeight1="1.88%"
        rectangleDivWidth="9.49%"
        rectangleDivRight="84.1%"
        rectangleDivBottom1="98.13%"
        rectangleDivLeft="6.41%"
        onGroupContainer1Click={onGroupLinkClick}
        onGroupContainer2Click={onGroupLink1Click}
        onGroupContainer3Click={onGroupLink2Click}
      />
      <img
        className="absolute top-[60px] left-[24px] rounded-71xl w-12 h-12 object-cover"
        alt=""
        src="/rectangle-111@2x.png"
      />
      <SectionCard />
      <div className="absolute top-[72px] left-[334px] rounded-[50%] bg-springgreen w-2.5 h-2.5" />
    </div>
  );
};

export default Home;
