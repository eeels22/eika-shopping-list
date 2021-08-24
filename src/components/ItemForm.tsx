// NPM package
import React, { useState } from "react";

// Project files
import { useList } from "../hooks/listContext";
import ItemFormProps from "../types/ItemFormProps";
import Touched from "../types/Touched";
import getErrors from "../utilities/formValidation";

export default function ItemForm({ toggleForm }: ItemFormProps) {
  // Global state
  const { dispatch } = useList();

  // Local state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [touched, setTouched] = useState<Touched>({});

  // Const
  const errors = getErrors(name, price);
  const isValid = Object.keys(errors).length === 0;
  const generatedID = Date.now().toString();

  // Functions
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>,
    reference: string
  ) {
    if (reference === "nameInput") setName(event.target.value);
    if (reference === "priceInput") setPrice(event.target.value);
  }

  function handleBlur(inputReference: string) {
    setTouched((current) => {
      return { ...current, [inputReference]: true };
    });
  }

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (isValid) {
      dispatch({
        type: "addItem",
        id: generatedID,
        name: name.trim().toUpperCase(),
        price: parseInt(price),
        bought: false,
      });
      setName("");
      setPrice("");
      toggleForm();
    }
  }

  return (
    <form className="ItemForm">
      <h1>Add an item</h1>
      <small className="legend">*required fields</small>

      {/* Form field must be refactored as a separate component because is the same as price -1 */}
      <div className="form-field">
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          onChange={(event) => handleChange(event, "nameInput")}
          onBlur={() => handleBlur("name")}
          value={name}
          placeholder="e.g. VÖXLOV"
          maxLength={25}
        />
        {touched.name && <p role="alert">{errors.name}</p>}
      </div>
      <div className="form-field">
        <label htmlFor="price">Price in SEK*</label>
        <input
          type="number"
          onBlur={() => handleBlur("price")}
          onChange={(event) => handleChange(event, "priceInput")}
          value={price}
          placeholder="e.g. 120"
        />
        {touched.price && <p role="alert">{errors.price}</p>}
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="button-primary create"
        disabled={!isValid}
      >
        Create item
      </button>
      <button type="button" onClick={toggleForm} className="button-subtle">
        Cancel
      </button>
    </form>
  );
}
