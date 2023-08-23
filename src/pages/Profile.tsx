import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import Property1profile from "../components/Property1profile";
import SupportContainer from "../components/SupportContainer";

const Profile: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = () => {
    navigate("/home");
  };

  const onGroupContainer1Click = () => {
    navigate("/card");
  };

  const onGroupContainer3Click = () => {
    navigate("/transaction");
  };

  return (
    <div className="relative bg-gray-100 w-full h-[844px] overflow-hidden text-left text-base text-white font-inter">
      <Property1profile
        iconCode="/006homebutton-12.svg"
        iconTextCode="/002swap-12.svg"
        property1profilePosition="absolute"
        property1profileTop="763px"
        property1profileLeft="0px"
        ellipseDivBackground="radial-gradient(50% 50% at 50% 50%, #00ea5e, rgba(182, 239, 17, 0))"
        ellipseDivHeight="98.77%"
        ellipseDivTop="1.23%"
        ellipseDivRight="1.03%"
        ellipseDivLeft="78.46%"
        rectangleDivHeight="98.77%"
        rectangleDivBottom="1.23%"
        groupDivWidth="10.26%"
        groupDivRight="83.59%"
        groupDivCursor="pointer"
        groupDivHeight="66.67%"
        groupDivTop="16.05%"
        groupDivBottom="17.28%"
        homeButton1IconWidth="60%"
        homeButton1IconRight="22.5%"
        homeButton1IconLeft="17.5%"
        homeFontFamily="Inter"
        groupDivWidth1="8.21%"
        groupDivRight1="62.56%"
        groupDivCursor1="pointer"
        groupDivHeight1="66.67%"
        groupDivTop1="16.05%"
        groupDivBottom1="17.28%"
        groupDivTextDecoration="unset"
        cardFontFamily="Inter"
        creditCard11IconWidth="75%"
        creditCard11IconRight="9.38%"
        creditCard11IconLeft="15.63%"
        groupDivWidth2="11.03%"
        groupDivRight2="5.38%"
        groupDivHeight2="66.67%"
        groupDivTop2="16.05%"
        groupDivBottom2="17.28%"
        groupDivCursor2="unset"
        groupDivTextDecoration1="unset"
        profileFontFamily="Inter"
        user11IconWidth="55.81%"
        user11IconRight="25.58%"
        user11IconLeft="18.6%"
        groupDivWidth3="20%"
        groupDivRight3="28.97%"
        groupDivCursor3="pointer"
        groupDivHeight3="66.67%"
        groupDivTop3="16.05%"
        groupDivBottom3="17.28%"
        groupDivTextDecoration2="unset"
        transactionFontFamily="Inter"
        swap1IconWidth="30.77%"
        swap1IconRight="37.18%"
        swap1IconLeft="32.05%"
        rectangleDivBackgroundColor="#00ea5e"
        rectangleDivHeight1="2.47%"
        rectangleDivWidth="10.26%"
        rectangleDivRight="6.15%"
        rectangleDivBottom1="97.53%"
        rectangleDivLeft="83.59%"
        onGroupContainerClick={onGroupContainerClick}
        onGroupContainer1Click={onGroupContainer1Click}
        onGroupContainer3Click={onGroupContainer3Click}
      />
      <div className="absolute top-[57px] left-[24px] w-[342px] h-[204px] text-center text-9xl">
        <div className="absolute top-[0px] left-[0px] rounded-3xl bg-gray-100 w-[342px] h-[204px]" />
        <img
          className="absolute top-[20px] left-[131px] rounded-2xl w-20 h-20 object-cover"
          alt=""
          src="/rectangle-11@2x.png"
        />
        <div className="absolute top-[120px] left-[62px] w-[221px] h-16">
          <div className="absolute top-[0px] left-[0px] leading-[36px] font-semibold">
            Rimuru Tempest
          </div>
          <div className="absolute top-[40px] left-[25px] text-base leading-[24px] opacity-[0.6]">
            juraempire@gmai.com
          </div>
        </div>
      </div>
      <div className="absolute top-[525px] left-[24px] w-[342px] h-[60px]">
        <div className="absolute top-[0px] left-[0px] rounded-2xl bg-gray-100 w-[342px] h-[60px]" />
        <div className="absolute top-[10px] left-[20px] w-[123px] h-10">
          <div className="absolute top-[8px] left-[60px] leading-[24px]">
            Sign out
          </div>
          <div className="absolute top-[0px] left-[0px] w-10 h-10">
            <div className="absolute top-[0px] left-[0px] rounded-2xl bg-gray-100 [backdrop-filter:blur(100px)] w-10 h-10" />
            <img
              className="absolute top-[10px] left-[10px] w-5 h-5 overflow-hidden"
              alt=""
              src="/logout-1.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[285px] left-[24px] w-[342px] h-[60px] text-xl">
        <div className="absolute top-[0px] left-[0px] rounded-2xl bg-gray-100 w-[342px] h-[60px]" />
        <div className="absolute top-[10px] left-[20px] w-[191px] h-10">
          <div className="absolute top-[6px] left-[60px] leading-[28px]">
            Profile setting
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-10 h-10"
            alt=""
            src="/group-1680.svg"
          />
        </div>
        <img
          className="absolute top-[18px] left-[298px] w-6 h-6 overflow-hidden"
          alt=""
          src="/next-11.svg"
        />
      </div>
      <div className="absolute top-[365px] left-[24px] w-[342px] h-[60px]">
        <div className="absolute top-[0px] left-[0px] rounded-2xl bg-gray-100 w-[342px] h-[60px]" />
        <div className="absolute top-[10px] left-[20px] w-[115px] h-10">
          <div className="absolute top-[8px] left-[60px] leading-[24px]">
            Setting
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-10 h-10"
            alt=""
            src="/group-1681.svg"
          />
        </div>
        <img
          className="absolute top-[18px] left-[298px] w-6 h-6 overflow-hidden"
          alt=""
          src="/next-11.svg"
        />
      </div>
      <SupportContainer />
    </div>
  );
};

export default Profile;
