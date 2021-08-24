export type Action =
  | { type: "add"; id: string; name: string; price: number; bought: boolean }
  | {
      type: "editItem";
      id: string;
      key: string;
      value: string | number | boolean;
    };
