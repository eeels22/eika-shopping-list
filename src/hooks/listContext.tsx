// NPM packages
import React, { createContext, useReducer, useEffect, useContext } from "react";

//Project files
import ListReducer from "./listReducer";
import { IItem } from "../types/IItem";
import { Action } from "./listReducer";

// Type
type ListContent = {
  list: IItem[];
  dispatch: React.Dispatch<Action>;
};

// Context object
const ListContext = createContext<ListContent>({
  list: [],
  dispatch: () => undefined,
});

// Set the initial list from localStorage data or use an empty array
let initialList: IItem[];
try {
  const storedItems = localStorage.getItem("items");
  if (storedItems) {
    initialList = JSON.parse(storedItems);
  } else {
    initialList = [];
  }
} catch (err) {
  console.error("The items could not be parsed into JSON");
  initialList = [];
}

interface ListProviderProps {
  children: React.ReactNode;
}

export const ListProvider: React.FC<ListProviderProps> = ({ children }) => {
  const [list, dispatch] = useReducer(ListReducer, initialList);

  // update localStorage any time the list changes
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(list));
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
