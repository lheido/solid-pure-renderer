import {
  BaseComponent,
  List,
  ListItem,
  Text,
} from "@lheido/solid-pure-renderer";
import "./index.css";

const App = () => {
  // const [bgColorClass, setBgColorClass] = createSignal(false);
  // setTimeout(() => setBgColorClass(true), 1000);
  // const [fz, setFz] = createSignal("2rem");
  // setTimeout(() => setFz("3rem"), 2000);
  // const [state, setState] = createStore<{ items: string[] }>({ items: [] });
  // setTimeout(() => setState("items", ["Item 1", "Item 2", "Item 3"]), 1000);
  return BaseComponent({
    class: "flex flex-col gap-4",
    children: [
      Text({
        text: "Hello World!!",
        class:
          "text-slate-200 bg-slate-700 w-full p-8 flex items-center justify-center transition-all",
      }),
      List({
        class: "px-4",
        items: () => ["Item 1", "Item 2", "Item 3"],
        renderItem: (item) =>
          ListItem({ class: "relative", children: Text({ text: item }) }),
      }),
    ],
  });
};

export default App;
