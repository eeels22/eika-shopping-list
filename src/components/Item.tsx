// Project files
import { useList } from "../hooks/listContext";
import ItemProps from "../types/ItemProps";

export default function Item({ item }: ItemProps) {
  // Global state
  const { dispatch } = useList();

  // Consts
  const { id, name, price, bought } = item;

  // Functions
  function handleClick() {
    dispatch({
      type: "editItem",
      id,
      key: "bought",
      value: !bought,
    });
  }

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
