// This file is well coded. But here is a nice thing...
// Sorting can be a method "replace list" to accept any kind of new list replacement or sortByName or Price if you want.
// The intention is to have a single context and reducer for 1 global data type.
// The sorting belongs to the list oject. So sorting actions should be place here.
// If we where on a bigger project where we have a user profile, then thats a separate object thus requirent a new separate context.

// NPM packages
import { createContext, useState, useContext } from "react";

// Project file
import SortOptionContent from "../types/SortOptionContent";

// Context object
const SortOptionContext = createContext<SortOptionContent | null>(null);

export function SortOptionProvider({ children }: React.PropsWithChildren<{}>) {
  // Local state
  const [sortOption, setSortOption] = useState("");

  // Function
  function updateSortOption(sortOption: string) {
    const newOption = sortOption === "name" ? "price" : "name";
    setSortOption(newOption);
  }

  const contextValue = { sortOption, updateSortOption };

  return (
    <SortOptionContext.Provider value={contextValue}>
      {children}
    </SortOptionContext.Provider>
  );
}

// Custom useContext hook
export const useSortOption = () => {
  const context = useContext(SortOptionContext);
  if (!context) {
    throw new Error("useSortOption must be used within a SortOptionProvider.");
  }
  return context;
};
