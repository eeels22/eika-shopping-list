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

  // Guard for empty array
  // Guards are usually put right below the important part they guard against. In this case the return of the component. So it should be on line 39 of this file (include the new lines added by these comments)
  if (filteredItems.length === 0) return <p>No items to show...</p>;

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

  return <ul className="ItemList">{itemsArray}</ul>;
}
