export type Action =
  | { type: "add"; id: string; name: string; price: number; bought: boolean }
  | { type: "markAsBought"; id: string; bought: boolean };
