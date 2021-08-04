// NPM packages
import { createContext, useReducer, useEffect, useContext } from "react";

//Project files
import ListReducer from "./listReducer";

// Context object
const ListContext = createContext(null);

// Set the initial list from localStorage data or use an empty array
let initialList;
try {
  initialList = JSON.parse(localStorage.getItem("items")) ?? [];
} catch (err) {
  console.error("The items could not be parsed into JSON");
  initialList = [];
}

export function ListProvider({ children }) {
  const [list, dispatch] = useReducer(ListReducer, initialList);

  // update localStorage any time the list changes
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(list));
  }, [list]);

  const contextValue = { list, dispatch };

  return (
    <ListContext.Provider value={contextValue}>{children}</ListContext.Provider>
  );
}

// Custom useContext hook
export function useList() {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("useList must be used within a ListProvider.");
  }
  return context;
}
