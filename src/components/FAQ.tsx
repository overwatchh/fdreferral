import { useState } from "react";
import ArrowDown from "./icons/ArrowDown";
import classNames from "classnames";

const FAQ: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        className="flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
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
