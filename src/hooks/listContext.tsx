// NPM packages
import React, { createContext, useReducer, useEffect, useContext } from "react";

//Project files
import { ListReducer } from "./listReducer";
import ShoppingItem from "../types/ShoppingItem";
import { Action } from "./listReducer";

// Type
type ListContent = {
  list: ShoppingItem[];
  dispatch: React.Dispatch<Action>;
};

// Context object
const ListContext = createContext<ListContent>({
  list: [],
  dispatch: () => undefined,
});

// Set the initial list from localStorage data or use an empty array
let initialList: ShoppingItem[];
try {
  const storedItems = localStorage.getItem("eika-shopping-items");
  if (storedItems) {
    initialList = JSON.parse(storedItems);
  } else {
    initialList = [];
  }
} catch (err) {
  console.error("The items could not be parsed into JSON");
  initialList = [];
}

export const ListProvider: React.FC<{}> = ({ children }) => {
  const [list, dispatch] = useReducer(ListReducer, initialList);

  // update localStorage any time the list changes
  useEffect(() => {
    localStorage.setItem("eika-shopping-items", JSON.stringify(list));
  }, [list]);

  const contextValue = { list, dispatch };

  return (
    <ListContext.Provider value={contextValue}>{children}</ListContext.Provider>
  );
};

// Custom useContext hook
export function useList() {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("useList must be used within a ListProvider.");
  }
  return context;
}
