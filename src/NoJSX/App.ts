import { createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';
import { createComponent, effect } from './renderer';
import Container from './Container';
import Text from './Text';
import { List, OrderedList } from './List';

const App = () => {
  const [text, setText] = createSignal('Lorem ipsum');
  setTimeout(() => {
    setText('dolor sit amet');
  }, 1000);
  const [state, setState] = createStore<{items: number[]}>({ items: [] });
  setTimeout(() => {
    setState('items', [1,2,3,4]);
  }, 1000);
  return Container({
    children: [
      Text({ text }),
      List(
        () => state.items,
        (item: string, index: () => number) =>
          Text({ text: `item ${item} ${index()}` }),
        Text({text: 'No item found'}) // TODO: replace ul if empty
      ),
    ],
  });
};

export default App;
