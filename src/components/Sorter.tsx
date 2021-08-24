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
  const [sortOrder, setSortOrder] = useState("");

  // Functions
  function sortListByName(list: ShoppingItem[]) {
    const sortedList = [...list].sort(compareName);
    setSortOrder("name");
    dispatch({
      type: "replaceList",
      newList: sortedList,
    });
  }

  function sortListByPrice(list: ShoppingItem[]) {
    const sortedList = [...list].sort(comparePrice);
    setSortOrder("price");
    dispatch({
      type: "replaceList",
      newList: sortedList,
    });
  }
  return (
    <section className="sort-options">
      <span>Sort by:</span>
      <button
        onClick={() => sortListByName(list)}
        disabled={sortOrder === "name"}
        className="button-option"
      >
        Name
      </button>
      <button
        onClick={() => sortListByPrice(list)}
        disabled={sortOrder === "price"}
        className="button-option"
      >
        Price
      </button>
    </section>
  );
}
