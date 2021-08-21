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
  // another small detail, you can get away with using list.length === 0 in the jsx but is valid either way.
  // use a variable for this, if the statement is to long and want to make it shorter. Example:
  // const newUser = listOfItems.length === obtainCurrentListOfUsers(database(myLocalDatabase))
  // in that case yes, please use the contast newUser to make it easy to read.
  const newUser = list.length === 0;

  // Functions
  // toggling a boolean can be done directly from the event
  // you dont need the long way of writting the setter with the "current state" => "new state" 99.99% of the time for basic data types like strings, bools and numbers.
  // leave that for more complex data types like objecs, arrays and arrays of objects.
  const toggleForm = () => {
    setAddingItem((addingItem) => !addingItem);
  };

  // This is 100% valid code, but try to make the early returns 1 line.
  // for example this can be converted to "ModalForm.jsx" to have it like
  // if (addingItem) return <ModalForm toggleForm={toggleForm} />
  // Early return - show item form if adding item
  if (addingItem)
    return (
      <div className="App">
        <Header />
        <ItemForm toggleForm={toggleForm} />
      </div>
    );

  // nice and clean JSX
  return (
    <div className="App">
      <Header />
      <main className="main-container">
        {itemsToBuy ? <SortableList /> : <Welcome newUser={newUser} />}
        <button type="button" onClick={toggleForm} className="button-primary">
          Add item
        </button>
        {!newUser && <BoughtListControls />}
      </main>
    </div>
  );
}
