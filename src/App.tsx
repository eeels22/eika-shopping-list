// NPM package
import { useState } from "react";

// Project files
import { Header } from "./components/Header";
import { Welcome } from "./components/Welcome";
import { SortableList } from "./components/SortableList";
import { ItemForm } from "./components/ItemForm";
import BoughtListControls from "./components/BoughtListControls";
import { useList } from "./hooks/listContext";

// Types
interface Item {
  bought: boolean;
}

export default function App() {
  // Global state
  const { list } = useList();

  // Local state
  const [addingItem, setAddingItem] = useState(false);

  // Derived state
  const toBuyList = list.filter((item: Item) => item.bought === false);
  const itemsToBuy = toBuyList.length !== 0;
  const newUser = list.length === 0;

  // Functions
  const toggleForm = () => {
    setAddingItem((addingItem) => !addingItem);
  };

  // Early return - show item form if adding item
  if (addingItem)
    return (
      <div className="App">
        <Header />
        <ItemForm toggleForm={toggleForm} />
      </div>
    );

  return (
    <div className="App">
      <Header />
      <main className="main-container">
        {!itemsToBuy && <Welcome newUser={newUser} />}
        {itemsToBuy && <SortableList />}
        <button onClick={toggleForm} className="button-primary">
          Add item
        </button>
        {!newUser && <BoughtListControls />}
      </main>
    </div>
  );
}
