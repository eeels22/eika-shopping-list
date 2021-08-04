// Helper functions
const validPrice = (value: string) => {
  const containsOnlyDigits = /^\d+$/.test(value);
  return containsOnlyDigits;
};

const validName = (value: string) => {
  const isNotOnlyWhitespace = value.trim().length > 0;
  return isNotOnlyWhitespace;
};

// Interface
interface Result {
  name?: string;
  price?: string;
}

export const getErrors = (name: string, price: string) => {
  const result: Result = {};
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
