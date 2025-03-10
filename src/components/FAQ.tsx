import { useState } from "react";
import ArrowDown from "./icons/ArrowDown";
import classNames from "classnames";
import { logEvent, analytics } from "../firebaseConfig";
const FAQ: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    logEvent(analytics, "faq_clicked", { question });
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div
        className="flex items-center justify-between  hover:cursor-pointer hover:bg-rose-50"
        onClick={handleClick}
      >
        <p
          className={classNames("text-lg font-semibold", {
            "text-red-600": isOpen,
            "text-neutral-800": !isOpen,
          })}
        >
          {question}
        </p>
        <span
          className={classNames("cursor-pointer", {
            "transition-transform rotate-180": isOpen,
          })}
        >
          <ArrowDown
            className={classNames({
              "fill-red-600": isOpen,
              "fill-black": !isOpen,
            })}
          ></ArrowDown>
        </span>
      </div>

      <div
        className={classNames(
          "m-0 overflow-hidden transition-[max-height] duration-300 ease-in-out",
          {
            "max-h-40 py-3": isOpen,
            "max-h-0 overflow-hidden": !isOpen,
          }
        )}
      >
        {answer}
      </div>
    </div>
  );
};

export default FAQ;
