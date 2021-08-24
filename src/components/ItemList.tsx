// Project files
import Item from "./Item";
import { useList } from "../hooks/listContext";
import ItemListProps from "../types/ItemListProps";
import ShoppingItem from "../types/ShoppingItem";

export default function ItemList({ whetherBought }: ItemListProps) {
  // Global state
  const { list } = useList();

  // Derived state
  const filteredItems = list.filter(
    (item: ShoppingItem) => item.bought === whetherBought
  );

  // Components
  const itemsArray = filteredItems.map((item: ShoppingItem) => (
    <Item key={item.id} item={item} />
  ));

  // Guard for empty array
  if (filteredItems.length === 0) return <p>No items to show...</p>;

  return <ul className="ItemList">{itemsArray}</ul>;
}
