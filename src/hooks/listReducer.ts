// NPM package
import { Reducer } from "react";

// Project files
import { IItem } from "../types/IItem";

// Types
export type Action =
  | { type: "add"; id: string; name: string; price: string; bought: boolean }
  | { type: "markAsBought"; id: string; bought: boolean };

type List = IItem[];

export const ListReducer: Reducer<List, Action> = (list, action) => {
  switch (action.type) {
    case "add":
      const { id, name, price, bought } = action;
      return [...list, { id, name, price, bought }];
    case "markAsBought": {
      const { id, bought } = action;
      return list.map((item) =>
        item.id === id ? { ...item, bought: !bought } : item
      );
    }
  }
};
