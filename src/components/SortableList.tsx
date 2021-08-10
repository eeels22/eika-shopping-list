// Project files
import { ItemList } from "./ItemList";
import { SortOptions } from "./SortOptions";

export const SortableList: React.FC<{}> = () => {
  return (
    <section className="SortableList">
      <h1>Shopping list</h1>
      <SortOptions />
      <ItemList whetherBought={false} />
    </section>
  );
};