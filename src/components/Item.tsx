// NPM package
import { useState } from "react";

// Project files
import { useList } from "../hooks/listContext";
import { IItem } from "../types/IItem";

// Interface
interface ItemProps {
  item: IItem;
}

export const Item: React.FC<ItemProps> = ({ item }) => {
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
};
