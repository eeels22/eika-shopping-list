// NPM packages
import { createContext, useState, useContext } from "react";

// Type
type SortOptionContextType = {
  sortOption: string;
  updateSortOption: React.Dispatch<React.SetStateAction<string>>;
};

// Context object
const SortOptionContext = createContext<SortOptionContextType | null>(null);

export const SortOptionProvider: React.FC<{}> = ({ children }) => {
  // Local state
  const [sortOption, setSortOption] = useState("");

  // Function
  const updateSortOption = () => {
    function toggleSort(sortOption: string) {
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
};

// Custom useContext hook
export const useSortOption = () => {
  const context = useContext(SortOptionContext);
  if (!context) {
    throw new Error("useSortOption must be used within a SortOptionProvider.");
  }
  return context;
};
