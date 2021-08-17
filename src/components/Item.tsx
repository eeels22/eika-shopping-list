// NPM package
import { useState } from "react";

// Project files
import { useList } from "../hooks/listContext";
import ShoppingItem from "../types/ShoppingItem";

// Interface
// Not a bad thing, but for bigger projects put the interfaces on a separate folder. just to make the component smaller.
interface ItemProps {
  item: ShoppingItem;
}

export default function Item({ item }: ItemProps) {
  // to make it easy to use destructuring:
  // const {id, name, bough} = item;
  // this allows us to skip the derived state  itemBought mentioned below, making your code even faster

  // Global state
  const { dispatch } = useList();

  // Local state
  // this local state is not needed at all.
  // we can dispatch a derivated state that toggles the boolean.
  // after the dispatch the component will be re-rendered
  // and will showcase the new boolean status.
  // const itemBought = item.bought
  const [bought, setBought] = useState(item.bought);

  // Functions
  const handleClick = () => {
    setBought((bought) => !bought);

    dispatch({
      type: "markAsBought",
      id: item.id,
      bought: item.bought, // !itemBought or !bought from the destructured item <= to send the inverted version regardless if is currently true or false
    });
  };

  return (
    <li className="Item">
      <label className="item-label">
        <input
          id={item.id}
          type="checkbox"
          onChange={handleClick}
          className="item-checkbox"
          value={bought.toString()}
          checked={bought}
        />
        {/* the checked on input should be the derived state itemBought or direcrly bough from the destructured item */}
        <span className="checkbox"></span>
        {item.name}, {item.price}:-
      </label>
    </li>
  );
}
