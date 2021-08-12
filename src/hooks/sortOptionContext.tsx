// NPM packages
import { createContext, useState, useContext } from "react";

// Interface
interface SortOptionContextType {
  sortOption: string;
  updateSortOption: (sortOption: string) => void;
}

// Context object
const SortOptionContext = createContext<SortOptionContextType | null>(null);

export const SortOptionProvider: React.FC<{}> = ({ children }) => {
  // Local state
  const [sortOption, setSortOption] = useState("");

  // Function
  const updateSortOption = (sortOption: string) => {
    const newOption = sortOption === "name" ? "price" : "name";
    setSortOption(newOption);
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
