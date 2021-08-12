// NPM package
import { useState } from "react";

// Project files
import { useList } from "../hooks/listContext";
import ShoppingItem from "../types/ShoppingItem";

// Interface
interface ItemProps {
  item: ShoppingItem;
}

export default function Item({ item }: ItemProps) {
  // Global state
  const { dispatch } = useList();

  // Local state
  const [bought, setBought] = useState(item.bought);

  // Functions
  const handleClick = () => {
    setBought((bought) => !bought);
    dispatch({
      type: "markAsBought",
      id: item.id,
      bought: item.bought,
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
        <span className="checkbox"></span>
        {item.name}, {item.price}:-
      </label>
    </li>
  );
}
