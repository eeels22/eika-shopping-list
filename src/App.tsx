// NPM package
import { useState } from "react";

// Project files
import BoughtListControls from "./components/BoughtListControls";
import Header from "./components/Header";
import ItemForm from "./components/ItemForm";
import SortableList from "./components/SortableList";
import Welcome from "./components/Welcome";
import { useList } from "./hooks/listContext";
import ShoppingItem from "./types/ShoppingItem";

export default function App() {
  // Global state
  const { list } = useList();

  // Local state
  const [addingItem, setAddingItem] = useState(false);

  // Derived state
  const toBuyList = list.filter((item: ShoppingItem) => item.bought === false);
  const itemsToBuy = toBuyList.length !== 0;
  const newUser = list.length === 0;

  // This is 100% valid code, but try to make the early returns 1 line.
  // for example this can be converted to "ModalForm.jsx" to have it like
  // if (addingItem) return <ModalForm toggleForm={toggleForm} />
  // Early return - show item form if adding item
  if (addingItem)
    return (
      <div className="App">
        <Header />
        <ItemForm toggleForm={() => setAddingItem(!addingItem)} />
      </div>
    );

  // nice and clean JSX
  return (
    <div className="App">
      <Header />
      <main className="main-container">
        {itemsToBuy ? <SortableList /> : <Welcome newUser={newUser} />}
        <button
          type="button"
          onClick={() => setAddingItem(!addingItem)}
          className="button-primary"
        >
          Add item
        </button>
        {!newUser && <BoughtListControls />}
      </main>
    </div>
  );
}
