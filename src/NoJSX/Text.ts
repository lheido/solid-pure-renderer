import { createTextNode, insert, template } from './renderer';

const tpl = template('<span></span>')

const Text = (props: { text: any }) => {
  return (() => {
    const elt = tpl.cloneNode(true) as Element;
    insert(elt, props.text)
    return elt;
  })();
};

export default Text;
