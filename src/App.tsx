import { Component, createSignal, For } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import { createStore } from 'solid-js/store';

const App: Component = () => {
  const [text, setText] = createSignal('Lorem ipsum');
  setTimeout(() => {
    setText('dolor sit amet');
  }, 1000);
  const [state, setState] = createStore({ items: [1, 2, 3] });
  setTimeout(() => {
    setState('items', [1, 2, 3, 4]);
  }, 1000);
  return (
    <div>
      <span>{text()}</span>
      <ul>
        <For each={state.items}>
          {(item) => (
            <li>
              <div>{item}</div>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default App;
