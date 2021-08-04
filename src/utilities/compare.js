export const compareName = (a, b) =>
  a.name > b.name ? 1 : b.name > a.name ? -1 : 0;

export const comparePrice = (a, b) =>
  Number(a.price) > Number(b.price)
    ? 1
    : Number(b.price) > Number(a.price)
    ? -1
    : 0;
