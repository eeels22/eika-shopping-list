// NPM package
import React, { useState } from "react";

// Project files
import { useList } from "../hooks/listContext";
import { getErrors } from "../utilities/formValidation";

// Interfaces
interface ItemFormProps {
  toggleForm: () => void;
}

interface Touched {
  name?: boolean;
  price?: boolean;
}

const ItemForm: React.FC<ItemFormProps> = ({ toggleForm }) => {
  // Global state
  const { dispatch } = useList();

  // Local state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [touched, setTouched] = React.useState<Touched>({});

  // Const
  const errors = getErrors(name, price);
  const isValid = Object.keys(errors).length === 0;
  const generatedID = Date.now();

  // Functions
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    inputReference: string
  ) => {
    if (inputReference === "name") setName(event.target.value);
    if (inputReference === "price") setPrice(event.target.value);
  };

  const handleBlur = (inputReference: string) => {
    setTouched((current) => {
      return { ...current, [inputReference]: true };
    });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (isValid) {
      dispatch({
        type: "add",
        id: generatedID,
        name: name.trim().toUpperCase(),
        price,
        bought: false,
      });
      setName("");
      setPrice("");
      toggleForm();
    }
  };

  return (
    <form className="ItemForm">
      <h1>Add an item</h1>
      <small className="legend">*required fields</small>
      <div className="form-field">
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          onChange={(event) => handleChange(event, "name")}
          onBlur={() => handleBlur("name")}
          value={name}
          placeholder="e.g. VÖXLOV"
          maxLength={25}
        />
        {touched.name && <p role="alert">{errors.name}</p>}
      </div>
      <div className="form-field">
        <label htmlFor="price">Price*</label>
        <input
          type="number"
          onBlur={() => handleBlur("price")}
          onChange={(event) => handleChange(event, "price")}
          value={price}
          placeholder="e.g. 120"
        />
        {touched.price && <p role="alert">{errors.price}</p>}
      </div>
      <button
        onClick={handleSubmit}
        className="button-primary create"
        disabled={!isValid}
      >
        Create item
      </button>
      <button onClick={toggleForm} className="button-subtle">
        Cancel
      </button>
    </form>
  );
};

export default ItemForm;
