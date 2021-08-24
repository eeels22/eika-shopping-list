// Project files
import ItemList from "./ItemList";
import Sorter from "./Sorter";

export default function SortableList() {
  return (
    <section className="SortableList">
      <h1>Shopping list</h1>
      <Sorter />
      <ItemList whetherBought={false} />
    </section>
  );
}
