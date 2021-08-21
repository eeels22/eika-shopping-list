// NPM packages
import React, { createContext, useReducer, useEffect, useContext } from "react";

//Project files
import { Action, ListReducer } from "./listReducer";
import ShoppingItem from "../types/ShoppingItem";

// Interface
interface ListContent {
  list: ShoppingItem[];
  dispatch: React.Dispatch<Action>;
}

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
  alert(
    "Sorry! An error occurred when loading your items and your list has been reset."
  );
  initialList = [];
}

export function ListProvider({ children }: React.PropsWithChildren<{}>) {
  const [list, dispatch] = useReducer(ListReducer, initialList);

  // update localStorage any time the list changes
  useEffect(() => {
    localStorage.setItem("eika-shopping-items", JSON.stringify(list));
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
