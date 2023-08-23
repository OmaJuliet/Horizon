import { FunctionComponent, useMemo, type CSSProperties } from "react";

type StateDefaultType = {
  buttonText?: string;

  /** Style props */
  stateDefaultPosition?: CSSProperties["position"];
  stateDefaultBackgroundColor?: CSSProperties["backgroundColor"];
  stateDefaultCursor?: CSSProperties["cursor"];
  stateDefaultBorder?: CSSProperties["border"];
  stateDefaultWidth?: CSSProperties["width"];
  stateDefaultTextDecoration?: CSSProperties["textDecoration"];
  stateDefaultTop?: CSSProperties["top"];
  stateDefaultLeft?: CSSProperties["left"];
  sendDisplay?: CSSProperties["display"];
  sendFontFamily?: CSSProperties["fontFamily"];

  /** Action props */
  onButtonPrimaryClick?: () => void;
};

const StateDefault: FunctionComponent<StateDefaultType> = ({
  buttonText,
  stateDefaultPosition,
  stateDefaultBackgroundColor,
  stateDefaultCursor,
  stateDefaultBorder,
  stateDefaultWidth,
  stateDefaultTextDecoration,
  stateDefaultTop,
  stateDefaultLeft,
  sendDisplay,
  sendFontFamily,
  onButtonPrimaryClick,
}) => {
  const stateDefaultStyle: CSSProperties = useMemo(() => {
    return {
      position: stateDefaultPosition,
      backgroundColor: stateDefaultBackgroundColor,
      cursor: stateDefaultCursor,
      border: stateDefaultBorder,
      width: stateDefaultWidth,
      textDecoration: stateDefaultTextDecoration,
      top: stateDefaultTop,
      left: stateDefaultLeft,
    };
  }, [
    stateDefaultPosition,
    stateDefaultBackgroundColor,
    stateDefaultCursor,
    stateDefaultBorder,
    stateDefaultWidth,
    stateDefaultTextDecoration,
    stateDefaultTop,
    stateDefaultLeft,
  ]);

  const sendStyle: CSSProperties = useMemo(() => {
    return {
      display: sendDisplay,
      fontFamily: sendFontFamily,
    };
  }, [sendDisplay, sendFontFamily]);

  return (
    <div
      className="relative rounded-xl bg-primary w-[358px] h-14 flex flex-row p-2.5 box-border items-center justify-center text-left text-base text-white font-button"
      style={stateDefaultStyle}
      onClick={onButtonPrimaryClick}
    >
      <div className="relative font-medium" style={sendStyle}>
        {buttonText}
      </div>
    </div>
  );
};

export default StateDefault;
