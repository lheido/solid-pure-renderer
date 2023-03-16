/* @refresh reload */
import { createComponent, render } from './NoJSX/renderer';
import App from './NoJSX/App';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

render(() => createComponent(App, {}), root!);
