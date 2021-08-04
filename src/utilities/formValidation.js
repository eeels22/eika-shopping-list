const validPrice = (value) => {
  const containsOnlyDigits = /^\d+$/.test(value);
  return containsOnlyDigits;
};

const validName = (value) => {
  const isNotOnlyWhitespace = value.trim().length > 0;
  return isNotOnlyWhitespace;
};

export const getErrors = (name, price) => {
  const result = {};
  if (!name) {
    result.name = "Name is required.";
  } else if (!validName(name)) {
    result.name = "Enter a valid name.";
  }
  if (!price) {
    result.price = "Price is required.";
  } else if (!validPrice(price)) {
    result.price = "Price may only contain digits 0 to 9.";
  }
  return result;
};
