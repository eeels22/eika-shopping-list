// Project files
import { useSortOption } from "../hooks/sortOptionContext";

export const SortOptions: React.FC<{}> = () => {
  // Global state
  const { sortOption, updateSortOption } = useSortOption();

  // Function
  const disableSortOption = (buttonName: string) => sortOption === buttonName;

  return (
    <section className="sort-options">
      <span>Sort by:</span>
      <button
        onClick={updateSortOption}
        disabled={disableSortOption("name")}
        className="button-option"
      >
        Name
      </button>
      <button
        onClick={updateSortOption}
        disabled={disableSortOption("price")}
        className="button-option"
      >
        Price
      </button>
    </section>
  );
};
