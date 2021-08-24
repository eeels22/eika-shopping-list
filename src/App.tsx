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
  const pendingList = list.filter(
    (item: ShoppingItem) => item.bought === false
  );
  const pendingItemsExist = pendingList.length !== 0;
  const isNewUser = list.length === 0;

  if (addingItem)
    return (
      <div className="App">
        <Header />
        <ItemForm toggleForm={() => setAddingItem(!addingItem)} />
      </div>
    );

  return (
    <div className="App">
      <Header />
      <main className="main-container">
        {pendingItemsExist ? (
          <SortableList />
        ) : (
          <Welcome isNewUser={isNewUser} />
        )}
        <button
          type="button"
          onClick={() => setAddingItem(!addingItem)}
          className="button-primary"
        >
          Add item
        </button>
        {!isNewUser && <BoughtListControls />}
      </main>
    </div>
  );
}
