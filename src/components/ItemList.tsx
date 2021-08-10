// Project files
import { Item } from "./Item";
import { useList } from "../hooks/listContext";
import { useSortOption } from "../hooks/sortOptionContext";
import { compareName, comparePrice } from "../utilities/compare";
import { IItem } from "../types/IItem";

// Interface
interface ItemListProps {
  whetherBought: boolean;
}

export const ItemList: React.FC<ItemListProps> = ({ whetherBought }) => {
  // Global state
  const { list } = useList();
  const { sortOption } = useSortOption();

  // Derived state
  const filteredItems = list.filter(
    (item: IItem) => item.bought === whetherBought
  );

  // Guard for empty array
  if (filteredItems.length === 0) return <p>No items to show...</p>;

  // Sort if required
  if (sortOption === "name") {
    filteredItems.sort(compareName);
  } else if (sortOption === "price") {
    filteredItems.sort(comparePrice);
  }
  // Components
  const itemsArray = filteredItems.map((item: IItem) => (
    <Item key={item.id} item={item} />
  ));

  return <ul className="ItemList">{itemsArray}</ul>;
};
