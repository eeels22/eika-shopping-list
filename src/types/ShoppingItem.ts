// why do yoy have a folder for types and interfaces and only have one file here.
// on the other hand there are a couple of files with their interfaces over there. Those should be as separated files in this folder.

export default interface ShoppingItem {
  name: string;
  price: number;
  bought: boolean;
  id: string;
}
