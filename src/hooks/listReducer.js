export default function ListReducer(list, action) {
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
      throw new Error("Unhandled action: " + action.type);
  }
}
