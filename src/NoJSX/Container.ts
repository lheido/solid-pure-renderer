import { splitProps } from 'solid-js';
import { template, insert, spread } from './renderer';

const tpl = template(`<div></div>`, false);

const Container = (props: any) => {
  const [component, html] = splitProps(props, ['children', 'tag']);
  const tmpl = template(`<${component.tag ?? 'div'}></${component.tag ?? 'div'}>`)
  return (() => {
    const elt = tmpl.cloneNode(true) as Element;
    spread(elt, html, false);
    insert(elt, () => component.children);
    return elt;
  })();
};

export default Container;
