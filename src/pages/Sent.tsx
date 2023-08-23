import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import StateDefault from "../components/StateDefault";
import Property1profile from "../components/Property1profile";

const Sent: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonPrimaryClick = () => {
    navigate("/home");
  };

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

  return (
    <div className="relative bg-gray-100 w-full h-[844px] overflow-hidden flex flex-col items-center justify-end gap-[29px] text-center text-5xl text-white font-button">
      <div className="w-[358px] h-[584px] overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[212px]">
        <div className="flex flex-col items-center justify-start gap-[32px]">
          <img
            className="relative w-[141px] h-[140px]"
            alt=""
            src="/frame-29.svg"
          />
          <div className="relative font-semibold">
            <p className="m-0">{`$ 320 has been `}</p>
            <p className="m-0">sent to Nadia!</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <StateDefault
            buttonText="View receipt"
            stateDefaultPosition="unset"
            stateDefaultBackgroundColor="#0d0d0c"
            stateDefaultCursor="unset"
            stateDefaultBorder="unset"
            stateDefaultWidth="358px"
            stateDefaultTextDecoration="unset"
            stateDefaultTop="unset"
            stateDefaultLeft="unset"
            sendDisplay="inline-block"
            sendFontFamily="Poppins"
          />
          <StateDefault
            buttonText="Close"
            stateDefaultPosition="unset"
            stateDefaultBackgroundColor="#00ea5e"
            stateDefaultCursor="pointer"
            stateDefaultBorder="none"
            stateDefaultWidth="358px"
            stateDefaultTextDecoration="unset"
            stateDefaultTop="unset"
            stateDefaultLeft="unset"
            sendDisplay="inline-block"
            sendFontFamily="Poppins"
            onButtonPrimaryClick={onButtonPrimaryClick}
          />
        </div>
      </div>
      <Property1profile
        iconCode="/006homebutton-12.svg"
        iconTextCode="/002swap-12.svg"
        property1profilePosition="relative"
        property1profileTop="unset"
        property1profileLeft="unset"
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
    </div>
  );
};

export default Sent;
