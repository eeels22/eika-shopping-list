// NPM package
import { useState } from "react";

// Project files
import closedEye from "../assets/images/closed-eye.svg";
import openEye from "../assets/images/open-eye.svg";
import { ItemList } from "./ItemList";

export default function BoughtListControls() {
  // Local state
  const [showBought, setShowBougt] = useState(false);

  // Functions
  const toggleBoughtList = () =>
    setShowBougt((showBoughtItems) => !showBoughtItems);

  // Const
  const boughtItemsPrompt = showBought
    ? "Hide bought items"
    : "View bought items";

  const iconToDisplay = showBought ? closedEye : openEye;

  return (
    <section className="BoughtListControls">
      <button onClick={toggleBoughtList} className="button-subtle">
        <img src={iconToDisplay} alt="" className="icon" />
        {boughtItemsPrompt}
      </button>
      {showBought && <ItemList whetherBought={true} />}
    </section>
  );
}
