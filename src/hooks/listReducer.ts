// Project files
import { Action } from "../types/Action";
import ShoppingItem from "../types/ShoppingItem";

export function ListReducer(list: ShoppingItem[], action: Action) {
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
}
