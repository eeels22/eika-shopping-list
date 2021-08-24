//Project files
import { Action } from "../types/Action";
import ShoppingItem from "../types/ShoppingItem";

export default interface ListContent {
  list: ShoppingItem[];
  dispatch: React.Dispatch<Action>;
}
