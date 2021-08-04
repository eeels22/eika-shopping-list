// Project files
import { IItem } from "../types/IItem";

export const compareName = (a: IItem, b: IItem) =>
  a.name > b.name ? 1 : b.name > a.name ? -1 : 0;

export const comparePrice = (a: IItem, b: IItem) =>
  Number(a.price) > Number(b.price)
    ? 1
    : Number(b.price) > Number(a.price)
    ? -1
    : 0;
