import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";

const SectionCard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSendClick = () => {
    navigate("/send");
  };

  return (
    <div className="absolute top-[238px] left-[16px] flex flex-row items-center justify-center gap-[16px] text-left text-sm text-white font-inter">
      <div className="w-[78px] flex flex-col items-center justify-center gap-[8px]">
        <img className="relative w-16 h-16" alt="" src="/group-12319.svg" />
        <div className="relative">Top up</div>
      </div>
      <div className="w-[77px] flex flex-col items-center justify-center gap-[8px]">
        <img className="relative w-16 h-16" alt="" src="/group-12318.svg" />
        <div className="relative">Pay</div>
      </div>
      <Link
        className="cursor-pointer [text-decoration:none] w-[78px] flex flex-col items-center justify-center gap-[8px] text-[inherit]"
        to="/send"
        onClick={onSendClick}
      >
        <img className="relative w-16 h-16" alt="" src="/group-12320.svg" />
        <div className="relative">Send</div>
      </Link>
      <div className="w-[77px] flex flex-col items-center justify-center gap-[8px]">
        <img className="relative w-16 h-16" alt="" src="/group-12321.svg" />
        <div className="relative">More</div>
      </div>
    </div>
  );
};

export default SectionCard;
