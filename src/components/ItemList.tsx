// Project files
import Item from "./Item";
import { useList } from "../hooks/listContext";
import { useSortOption } from "../hooks/sortOptionContext";
import { compareName, comparePrice } from "../utilities/compare";
import ShoppingItem from "../types/ShoppingItem";

// Interface
interface ItemListProps {
  whetherBought: boolean;
}

export default function ItemList({ whetherBought }: ItemListProps) {
  // Global state
  const { list } = useList();
  const { sortOption } = useSortOption();

  // Derived state
  const filteredItems = list.filter(
    (item: ShoppingItem) => item.bought === whetherBought
  );

  // Sort items if required
  // the else if should be a else or if. if else if, feel weird withouth a final "else" acting as a default case.
  if (sortOption === "name") {
    filteredItems.sort(compareName);
  } else if (sortOption === "price") {
    filteredItems.sort(comparePrice);
  }

  // Components
  const itemsArray = filteredItems.map((item: ShoppingItem) => (
    <Item key={item.id} item={item} />
  ));

  // Guard for empty array
  if (filteredItems.length === 0) return <p>No items to show...</p>;

  return <ul className="ItemList">{itemsArray}</ul>;
}
