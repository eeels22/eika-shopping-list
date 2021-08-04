// NPM packages
import { createContext, useState, useContext } from "react";

// Context object
const SortOptionContext = createContext(null);

export function SortOptionProvider({ children }) {
  // Local state
  const [sortOption, setSortOption] = useState("");

  // Function
  const updateSortOption = () => {
    function toggleSort(sortOption) {
      const newOption = sortOption === "name" ? "price" : "name";
      setSortOption(newOption);
    }
    toggleSort(sortOption);
  };

  const contextValue = { sortOption, updateSortOption };

  return (
    <SortOptionContext.Provider value={contextValue}>
      {children}
    </SortOptionContext.Provider>
  );
}

// Custom useContext hook
export function useSortOption() {
  const context = useContext(SortOptionContext);
  if (!context) {
    throw new Error("useSortOption must be used within a SortOptionProvider.");
  }
  return context;
}
