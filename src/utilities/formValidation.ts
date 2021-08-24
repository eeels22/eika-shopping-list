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

export default function getErrors(name: string, price: string) {
  const result: Result = {};
  if (!name) {
    result.name = "Name is required.";
  } else if (!validName(name)) {
    result.name = "Enter a valid name.";
  }
  if (!price || price === "0") {
    result.price = "Enter a valid price.";
  } else if (!validPrice(price)) {
    result.price = "Price may only contain digits 0 to 9.";
  }
  return result;
}
