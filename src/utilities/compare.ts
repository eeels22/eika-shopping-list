// Project files
import ShoppingItem from "../types/ShoppingItem";

export const compareName = (a: ShoppingItem, b: ShoppingItem) =>
  a.name > b.name ? 1 : b.name > a.name ? -1 : 0;

export const comparePrice = (a: ShoppingItem, b: ShoppingItem) =>
  Number(a.price) > Number(b.price)
    ? 1
    : Number(b.price) > Number(a.price)
    ? -1
    : 0;
