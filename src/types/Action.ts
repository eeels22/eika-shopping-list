// Project files
import ShoppingItem from "./ShoppingItem";

export type Action =
  | {
      type: "addItem";
      id: string;
      name: string;
      price: number;
      bought: boolean;
    }
  | {
      type: "editItem";
      id: string;
      key: string;
      value: string | number | boolean;
    }
  | {
      type: "replaceList";
      newList: ShoppingItem[];
    };
