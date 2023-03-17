import { splitProps } from "solid-js";
import { effect, insert, spread, template } from "../renderer";
import { PureComponent, PureComponentProps } from "../types";

export type BaseComponentProps = PureComponentProps & {
  tag?: string;
  id?: string;
  class?: string;
  classList?: Record<string, boolean | (() => boolean)>;
  style?: Record<string, string | (() => string)>;
  [key: string]: any;
};

export const BaseComponent: PureComponent<BaseComponentProps> = (
  props: BaseComponentProps
) => {
  const [component, html] = splitProps(props, [
    "children",
    "tag",
    "classList",
    "style",
  ]);
  const tmpl = template(
    `<${component.tag ?? "div"}></${component.tag ?? "div"}>`
  );
  return (() => {
    const elt = tmpl.cloneNode(true) as Element;
    spread(elt, html, false);
    insert(elt, () => component.children);
    effect(() => {
      if (component.classList) {
        Object.entries(component.classList).forEach(([key, value]) => {
          const fn = elt.classList.toggle(
            key,
            typeof value === "function" ? value() : value
          );
        });
      }
    });
    effect(() => {
      if (component.style) {
        if (elt instanceof HTMLElement) {
          Object.entries(component.style).forEach(([key, value]) => {
            elt.style[key] = typeof value === "function" ? value() : value;
          });
        }
      }
    });
    return elt;
  })();
};
