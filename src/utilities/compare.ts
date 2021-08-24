// Project files
import ShoppingItem from "../types/ShoppingItem";

export function compareName(itemA: ShoppingItem, itemB: ShoppingItem) {
  return itemA.name.localeCompare(itemB.name, "sv"); // Sorts Swedish characters
}

export function comparePrice(itemA: ShoppingItem, itemB: ShoppingItem) {
  return Number(itemA.price) > Number(itemB.price)
    ? 1
    : Number(itemB.price) > Number(itemA.price)
    ? -1
    : 0;
}
