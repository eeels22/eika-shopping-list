// Project files
import Item from "./Item";
import { useList } from "../hooks/listContext";
import { useSortOption } from "../hooks/sortOptionContext";
import { compareName, comparePrice } from "../utilities/compare";

export default function ItemList({ whetherBought }) {
  // Global state
  const { list } = useList();
  const { sortOption } = useSortOption();

  // Derived state
  const filteredItems = list.filter((item) => item.bought === whetherBought);

  // Guard for empty array
  if (filteredItems.length === 0) return <p>No items to show...</p>;

  // Sort if required
  if (sortOption === "name") {
    filteredItems.sort(compareName);
  } else if (sortOption === "price") {
    filteredItems.sort(comparePrice);
  }
  // Components
  const itemsArray = filteredItems.map((item) => (
    <Item key={item.id} item={item} />
  ));

  return <ul className="ItemList">{itemsArray}</ul>;
}
