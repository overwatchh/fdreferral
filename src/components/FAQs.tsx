import React from "react";
import ArrowDown from "./icons/ArrowDown";
import ArrowUp from "./icons/ArrowDown";

const FAQs = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p>How does delivering with DoorDash work?</p>
        <span><ArrowUp></ArrowUp></span>
        <span><ArrowDown></ArrowDown></span>
      </div>

      <div>
        Millions of people order food and other goods through DoorDash. When
        customers place an order, we offer the deliveries or tasks to Dashers,
        who earn money by picking up and delivering them.
      </div>
    </div>
  );
};

export default FAQs;
