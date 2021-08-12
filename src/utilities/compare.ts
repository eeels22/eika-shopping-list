// Project files
import ShoppingItem from "../types/ShoppingItem";

export const compareName = (itemA: ShoppingItem, itemB: ShoppingItem) =>
  itemA.name.localeCompare(itemB.name, "sv"); // Sorts Swedish characters

export const comparePrice = (itemA: ShoppingItem, itemB: ShoppingItem) =>
  Number(itemA.price) > Number(itemB.price)
    ? 1
    : Number(itemB.price) > Number(itemA.price)
    ? -1
    : 0;
