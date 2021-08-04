// Project files
import { IItem } from "../types/IItem";

// Types
type Action =
  | { type: "add"; id: string; name: string; price: string; bought: boolean }
  | { type: "markAsBought"; id: string; bought: boolean };

type List = IItem[];

// Function
function throwUnhandledAction(action: Action) {
  throw new Error("Unhandled action: " + action.type);
}

export default function ListReducer(list: List, action: Action) {
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
    default:
      throwUnhandledAction(action);
  }
}
