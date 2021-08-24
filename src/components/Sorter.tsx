// NPM package
import { useState } from "react";

// Project files
import { useList } from "../hooks/listContext";
import ShoppingItem from "../types/ShoppingItem";
import { compareName, comparePrice } from "../utilities/compare";

export default function Sorter() {
  // Global state
  const { list, dispatch } = useList();

  // Local state
  const [sortOption, setSortOption] = useState("");

  // Function
  function sortList(
    list: ShoppingItem[],
    sortOption: string,
    comparator: (itemA: ShoppingItem, itemB: ShoppingItem) => number
  ) {
    const sortedList = [...list].sort(comparator);
    setSortOption(sortOption);
    dispatch({
      type: "replaceList",
      newList: sortedList,
    });
  }

  return (
    <section className="sort-options">
      <span>Sort by:</span>
      <button
        onClick={() => sortList(list, "name", compareName)}
        disabled={sortOption === "name"}
        className="button-option"
      >
        Name
      </button>
      <button
        onClick={() => sortList(list, "price", comparePrice)}
        disabled={sortOption === "price"}
        className="button-option"
      >
        Price
      </button>
    </section>
  );
}
