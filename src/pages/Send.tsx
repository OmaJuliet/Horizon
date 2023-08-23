import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Property1profile from "../components/Property1profile";
import StateDefault from "../components/StateDefault";

const Send: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = () => {
    navigate("/home");
  };

  const onGroupContainer1Click = () => {
    navigate("/card");
  };

  const onGroupContainer2Click = () => {
    navigate("/");
  };

  const onGroupContainer3Click = () => {
    navigate("/transaction");
  };

  const onButtonPrimaryClick = () => {
    navigate("/sent");
  };

  return (
    <div className="relative bg-gray-100 w-full h-[844px] overflow-hidden text-left text-base text-white font-inter">
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
        groupDivCursor1="pointer"
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
        rectangleDivHeight1="1.88%"
        rectangleDivWidth="9.49%"
        rectangleDivRight="84.1%"
        rectangleDivBottom1="98.13%"
        rectangleDivLeft="6.41%"
        onGroupContainerClick={onGroupContainerClick}
        onGroupContainer1Click={onGroupContainer1Click}
        onGroupContainer2Click={onGroupContainer2Click}
        onGroupContainer3Click={onGroupContainer3Click}
      />
      <StateDefault
        buttonText="Send"
        stateDefaultPosition="absolute"
        stateDefaultBackgroundColor="#00ea5e"
        stateDefaultCursor="pointer"
        stateDefaultBorder="unset"
        stateDefaultWidth="342px"
        stateDefaultTextDecoration="none"
        stateDefaultTop="682px"
        stateDefaultLeft="24px"
        sendDisplay="inline-block"
        sendFontFamily="Inter"
        onButtonPrimaryClick={onButtonPrimaryClick}
      />
      <div className="absolute top-[68px] left-[148px] leading-[24px]">
        Send Money
      </div>
      <img
        className="absolute top-[65px] left-[29px] w-[30px] h-[30px]"
        alt=""
        src="/group-1696.svg"
      />
      <div className="absolute top-[140px] left-[24px] w-[342px] h-[78px]">
        <div className="absolute top-[0px] left-[0px] rounded-2xl bg-gray-100 w-[342px] h-[78px]" />
        <img
          className="absolute top-[15px] left-[20px] rounded-2xl w-12 h-12 object-cover"
          alt=""
          src="/rectangle-31@2x.png"
        />
        <img
          className="absolute top-[27px] left-[298px] w-6 h-6 overflow-hidden"
          alt=""
          src="/down-1-1.svg"
        />
        <div className="absolute top-[15px] left-[88px] w-[104px] h-12">
          <div className="absolute top-[0px] left-[0px] leading-[24px] font-semibold">
            Liam
          </div>
          <div className="absolute top-[28px] left-[0px] text-xs leading-[20px] opacity-[0.6]">
            1245 577 785 943
          </div>
        </div>
      </div>
      <div className="absolute top-[278px] left-[83px] w-[222px] h-[104px] text-center text-xl">
        <div className="absolute top-[0px] left-[25px] leading-[28px] opacity-[0.6]">
          Enter your amount
        </div>
        <input
          className="[border:none] font-semibold font-inter text-[48px] bg-[transparent] absolute top-[48px] left-[0px] leading-[56px] text-white text-center"
          type="number"
          placeholder="$1250.00"
          min={100}
          max={1000}
          step={2}
          required
        />
      </div>
    </div>
  );
};

export default Send;
