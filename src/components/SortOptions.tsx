// Project files
import { useSortOption } from "../hooks/sortOptionContext";

export default function SortOptions() {
  // Global state
  const { sortOption, updateSortOption } = useSortOption();

  // Function
  function disableSortOption(buttonName: string) {
    return sortOption === buttonName;
  }

  return (
    <section className="sort-options">
      <span>Sort by:</span>
      <button
        onClick={() => updateSortOption(sortOption)}
        disabled={disableSortOption("name")}
        className="button-option"
      >
        Name
      </button>
      <button
        onClick={() => updateSortOption(sortOption)}
        disabled={disableSortOption("price")}
        className="button-option"
      >
        Price
      </button>
    </section>
  );
}
