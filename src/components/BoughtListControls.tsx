// NPM package
import { useState } from "react";

// Project files
import closedEye from "../assets/images/closed-eye.svg";
import openEye from "../assets/images/open-eye.svg";
import ItemList from "./ItemList";

export default function BoughtListControls() {
  // Local state
  const [showBought, setShowBought] = useState(false);

  // Const
  const boughtItemsPrompt = showBought
    ? "Hide bought items"
    : "View bought items";

  const iconToDisplay = showBought ? closedEye : openEye;

  // Functions
  // you use functions in App.tsx but const here.
  // for consistency only use one method. In this case, use functions because it makes easy to indentify them in VS code outline mode (i will explain this in the lectures)
  // also this should go after the contants declared below (hoisting) properties always go on top.
  // -1
  const toggleBoughtList = () => setShowBought(!showBought);

  return (
    <section className="BoughtListControls">
      <button
        type="button"
        onClick={toggleBoughtList}
        className="button-subtle"
      >
        <img src={iconToDisplay} alt="" className="icon" />
        {boughtItemsPrompt}
      </button>
      {showBought && <ItemList whetherBought={true} />}
    </section>
  );
}
