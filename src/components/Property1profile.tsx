import { FunctionComponent, useMemo, type CSSProperties } from "react";

type Property1profileType = {
  iconCode?: string;
  iconTextCode?: string;

  /** Style props */
  property1profilePosition?: CSSProperties["position"];
  property1profileTop?: CSSProperties["top"];
  property1profileLeft?: CSSProperties["left"];
  ellipseDivBackground?: CSSProperties["background"];
  ellipseDivHeight?: CSSProperties["height"];
  ellipseDivTop?: CSSProperties["top"];
  ellipseDivRight?: CSSProperties["right"];
  ellipseDivLeft?: CSSProperties["left"];
  rectangleDivHeight?: CSSProperties["height"];
  rectangleDivBottom?: CSSProperties["bottom"];
  groupDivWidth?: CSSProperties["width"];
  groupDivRight?: CSSProperties["right"];
  groupDivCursor?: CSSProperties["cursor"];
  groupDivHeight?: CSSProperties["height"];
  groupDivTop?: CSSProperties["top"];
  groupDivBottom?: CSSProperties["bottom"];
  homeButton1IconWidth?: CSSProperties["width"];
  homeButton1IconRight?: CSSProperties["right"];
  homeButton1IconLeft?: CSSProperties["left"];
  homeFontFamily?: CSSProperties["fontFamily"];
  groupDivWidth1?: CSSProperties["width"];
  groupDivRight1?: CSSProperties["right"];
  groupDivCursor1?: CSSProperties["cursor"];
  groupDivHeight1?: CSSProperties["height"];
  groupDivTop1?: CSSProperties["top"];
  groupDivBottom1?: CSSProperties["bottom"];
  groupDivTextDecoration?: CSSProperties["textDecoration"];
  cardFontFamily?: CSSProperties["fontFamily"];
  creditCard11IconWidth?: CSSProperties["width"];
  creditCard11IconRight?: CSSProperties["right"];
  creditCard11IconLeft?: CSSProperties["left"];
  groupDivWidth2?: CSSProperties["width"];
  groupDivRight2?: CSSProperties["right"];
  groupDivHeight2?: CSSProperties["height"];
  groupDivTop2?: CSSProperties["top"];
  groupDivBottom2?: CSSProperties["bottom"];
  groupDivCursor2?: CSSProperties["cursor"];
  groupDivTextDecoration1?: CSSProperties["textDecoration"];
  profileFontFamily?: CSSProperties["fontFamily"];
  user11IconWidth?: CSSProperties["width"];
  user11IconRight?: CSSProperties["right"];
  user11IconLeft?: CSSProperties["left"];
  groupDivWidth3?: CSSProperties["width"];
  groupDivRight3?: CSSProperties["right"];
  groupDivCursor3?: CSSProperties["cursor"];
  groupDivHeight3?: CSSProperties["height"];
  groupDivTop3?: CSSProperties["top"];
  groupDivBottom3?: CSSProperties["bottom"];
  groupDivTextDecoration2?: CSSProperties["textDecoration"];
  transactionFontFamily?: CSSProperties["fontFamily"];
  swap1IconWidth?: CSSProperties["width"];
  swap1IconRight?: CSSProperties["right"];
  swap1IconLeft?: CSSProperties["left"];
  rectangleDivBackgroundColor?: CSSProperties["backgroundColor"];
  rectangleDivHeight1?: CSSProperties["height"];
  rectangleDivWidth?: CSSProperties["width"];
  rectangleDivRight?: CSSProperties["right"];
  rectangleDivBottom1?: CSSProperties["bottom"];
  rectangleDivLeft?: CSSProperties["left"];

  /** Action props */
  onGroupContainerClick?: () => void;
  onGroupContainer1Click?: () => void;
  onGroupContainer2Click?: () => void;
  onGroupContainer3Click?: () => void;
};

const Property1profile: FunctionComponent<Property1profileType> = ({
  iconCode,
  iconTextCode,
  property1profilePosition,
  property1profileTop,
  property1profileLeft,
  ellipseDivBackground,
  ellipseDivHeight,
  ellipseDivTop,
  ellipseDivRight,
  ellipseDivLeft,
  rectangleDivHeight,
  rectangleDivBottom,
  groupDivWidth,
  groupDivRight,
  groupDivCursor,
  groupDivHeight,
  groupDivTop,
  groupDivBottom,
  homeButton1IconWidth,
  homeButton1IconRight,
  homeButton1IconLeft,
  homeFontFamily,
  groupDivWidth1,
  groupDivRight1,
  groupDivCursor1,
  groupDivHeight1,
  groupDivTop1,
  groupDivBottom1,
  groupDivTextDecoration,
  cardFontFamily,
  creditCard11IconWidth,
  creditCard11IconRight,
  creditCard11IconLeft,
  groupDivWidth2,
  groupDivRight2,
  groupDivHeight2,
  groupDivTop2,
  groupDivBottom2,
  groupDivCursor2,
  groupDivTextDecoration1,
  profileFontFamily,
  user11IconWidth,
  user11IconRight,
  user11IconLeft,
  groupDivWidth3,
  groupDivRight3,
  groupDivCursor3,
  groupDivHeight3,
  groupDivTop3,
  groupDivBottom3,
  groupDivTextDecoration2,
  transactionFontFamily,
  swap1IconWidth,
  swap1IconRight,
  swap1IconLeft,
  rectangleDivBackgroundColor,
  rectangleDivHeight1,
  rectangleDivWidth,
  rectangleDivRight,
  rectangleDivBottom1,
  rectangleDivLeft,
  onGroupContainerClick,
  onGroupContainer1Click,
  onGroupContainer2Click,
  onGroupContainer3Click,
}) => {
  const property1profileStyle: CSSProperties = useMemo(() => {
    return {
      position: property1profilePosition,
      top: property1profileTop,
      left: property1profileLeft,
    };
  }, [property1profilePosition, property1profileTop, property1profileLeft]);

  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      background: ellipseDivBackground,
      height: ellipseDivHeight,
      top: ellipseDivTop,
      right: ellipseDivRight,
      left: ellipseDivLeft,
    };
  }, [
    ellipseDivBackground,
    ellipseDivHeight,
    ellipseDivTop,
    ellipseDivRight,
    ellipseDivLeft,
  ]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      height: rectangleDivHeight,
      bottom: rectangleDivBottom,
    };
  }, [rectangleDivHeight, rectangleDivBottom]);

  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      width: groupDivWidth,
      right: groupDivRight,
      cursor: groupDivCursor,
      height: groupDivHeight,
      top: groupDivTop,
      bottom: groupDivBottom,
    };
  }, [
    groupDivWidth,
    groupDivRight,
    groupDivCursor,
    groupDivHeight,
    groupDivTop,
    groupDivBottom,
  ]);

  const homeButton1IconStyle: CSSProperties = useMemo(() => {
    return {
      width: homeButton1IconWidth,
      right: homeButton1IconRight,
      left: homeButton1IconLeft,
    };
  }, [homeButton1IconWidth, homeButton1IconRight, homeButton1IconLeft]);

  const homeStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: homeFontFamily,
    };
  }, [homeFontFamily]);

  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: groupDivWidth1,
      right: groupDivRight1,
      cursor: groupDivCursor1,
      height: groupDivHeight1,
      top: groupDivTop1,
      bottom: groupDivBottom1,
      textDecoration: groupDivTextDecoration,
    };
  }, [
    groupDivWidth1,
    groupDivRight1,
    groupDivCursor1,
    groupDivHeight1,
    groupDivTop1,
    groupDivBottom1,
    groupDivTextDecoration,
  ]);

  const cardStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: cardFontFamily,
    };
  }, [cardFontFamily]);

  const creditCard11IconStyle: CSSProperties = useMemo(() => {
    return {
      width: creditCard11IconWidth,
      right: creditCard11IconRight,
      left: creditCard11IconLeft,
    };
  }, [creditCard11IconWidth, creditCard11IconRight, creditCard11IconLeft]);

  const groupDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: groupDivWidth2,
      right: groupDivRight2,
      height: groupDivHeight2,
      top: groupDivTop2,
      bottom: groupDivBottom2,
      cursor: groupDivCursor2,
      textDecoration: groupDivTextDecoration1,
    };
  }, [
    groupDivWidth2,
    groupDivRight2,
    groupDivHeight2,
    groupDivTop2,
    groupDivBottom2,
    groupDivCursor2,
    groupDivTextDecoration1,
  ]);

  const profileStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: profileFontFamily,
    };
  }, [profileFontFamily]);

  const user11IconStyle: CSSProperties = useMemo(() => {
    return {
      width: user11IconWidth,
      right: user11IconRight,
      left: user11IconLeft,
    };
  }, [user11IconWidth, user11IconRight, user11IconLeft]);

  const groupDiv3Style: CSSProperties = useMemo(() => {
    return {
      width: groupDivWidth3,
      right: groupDivRight3,
      cursor: groupDivCursor3,
      height: groupDivHeight3,
      top: groupDivTop3,
      bottom: groupDivBottom3,
      textDecoration: groupDivTextDecoration2,
    };
  }, [
    groupDivWidth3,
    groupDivRight3,
    groupDivCursor3,
    groupDivHeight3,
    groupDivTop3,
    groupDivBottom3,
    groupDivTextDecoration2,
  ]);

  const transactionStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: transactionFontFamily,
    };
  }, [transactionFontFamily]);

  const swap1IconStyle: CSSProperties = useMemo(() => {
    return {
      width: swap1IconWidth,
      right: swap1IconRight,
      left: swap1IconLeft,
    };
  }, [swap1IconWidth, swap1IconRight, swap1IconLeft]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
      height: rectangleDivHeight1,
      width: rectangleDivWidth,
      right: rectangleDivRight,
      bottom: rectangleDivBottom1,
      left: rectangleDivLeft,
    };
  }, [
    rectangleDivBackgroundColor,
    rectangleDivHeight1,
    rectangleDivWidth,
    rectangleDivRight,
    rectangleDivBottom1,
    rectangleDivLeft,
  ]);

  return (
    <div
      className="relative w-[390px] h-[81px] text-left text-sm text-white font-gilroy-medium"
      style={property1profileStyle}
    >
      <div
        className="absolute h-[98.77%] w-[20.51%] top-[1.23%] right-[1.03%] bottom-[0%] left-[78.46%] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#b6ef11,_rgba(182,_239,_17,_0))] [backdrop-filter:blur(80px)]"
        style={ellipseDivStyle}
      />
      <div
        className="absolute h-[98.77%] w-full top-[0%] right-[0%] bottom-[1.23%] left-[0%] rounded-t-11xl rounded-b-none bg-gray-300 [backdrop-filter:blur(80px)] opacity-[0.8]"
        style={rectangleDivStyle}
      />
      <div
        className="absolute h-[66.67%] w-[9.74%] top-[16.05%] right-[84.1%] bottom-[17.28%] left-[6.15%]"
        style={groupDivStyle}
        onClick={onGroupContainerClick}
      >
        <img
          className="absolute h-[44.44%] w-[63.16%] top-[0%] right-[18.42%] bottom-[55.56%] left-[18.42%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={iconCode}
          style={homeButton1IconStyle}
        />
        <div
          className="absolute top-[59.26%] left-[0%] leading-[22px]"
          style={homeStyle}
        >
          Home
        </div>
      </div>
      <div
        className="absolute h-[66.67%] w-[8.46%] top-[16.05%] right-[62.31%] bottom-[17.28%] left-[29.23%]"
        style={groupDiv1Style}
        onClick={onGroupContainer1Click}
      >
        <div
          className="absolute top-[59.26%] left-[0%] leading-[22px]"
          style={cardStyle}
        >
          Card
        </div>
        <img
          className="absolute h-[44.44%] w-[72.73%] top-[0%] right-[12.12%] bottom-[55.56%] left-[15.15%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/004creditcard1-1.svg"
          style={creditCard11IconStyle}
        />
      </div>
      <div
        className="absolute h-[66.67%] w-[10.26%] top-[16.05%] right-[6.15%] bottom-[17.28%] left-[83.59%]"
        style={groupDiv2Style}
        onClick={onGroupContainer2Click}
      >
        <div
          className="absolute top-[59.26%] left-[0%] leading-[22px]"
          style={profileStyle}
        >
          Profile
        </div>
        <img
          className="absolute h-[44.44%] w-3/5 top-[0%] right-[20%] bottom-[55.56%] left-[20%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/008user1-1.svg"
          style={user11IconStyle}
        />
      </div>
      <div
        className="absolute h-[66.67%] w-[19.23%] top-[16.05%] right-[29.74%] bottom-[17.28%] left-[51.03%]"
        style={groupDiv3Style}
        onClick={onGroupContainer3Click}
      >
        <div
          className="absolute top-[59.26%] left-[0%] leading-[22px]"
          style={transactionStyle}
        >
          Transaction
        </div>
        <img
          className="absolute h-[44.44%] w-[32%] top-[0%] right-[34.67%] bottom-[55.56%] left-[33.33%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={iconTextCode}
          style={swap1IconStyle}
        />
      </div>
      <div
        className="absolute h-[2.47%] w-[10.26%] top-[0%] right-[6.15%] bottom-[97.53%] left-[83.59%] rounded-3xl bg-primary-100"
        style={rectangleDiv1Style}
      />
    </div>
  );
};

export default Property1profile;
