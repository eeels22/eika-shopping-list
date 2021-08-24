// Project files
import { Action } from "../types/Action";
import ShoppingItem from "../types/ShoppingItem";

export function ListReducer(list: ShoppingItem[], action: Action) {
  switch (action.type) {
    case "add": {
      const { id, name, price, bought } = action;
      return [...list, { id, name, price, bought }];
    }
    case "editItem": {
      const { id, key, value } = action;
      return list.map((item) =>
        item.id === id ? { ...item, [key]: value } : item
      );
    }
  }
}
