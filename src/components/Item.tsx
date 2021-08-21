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

  // Consts
  const { id, name, price, bought } = item;

  // Functions
  const handleClick = () => {
    dispatch({
      type: "markAsBought",
      id,
      bought: bought, // !itemBought or !bought from the destructured item <= to send the inverted version regardless if is currently true or false
    });
  };

  return (
    <li className="Item">
      <label className="item-label">
        <input
          id={id}
          type="checkbox"
          onChange={handleClick}
          className="item-checkbox"
          value={bought.toString()}
          checked={bought}
        />
        <span className="checkbox"></span>
        {name}, {price}:-
      </label>
    </li>
  );
}
