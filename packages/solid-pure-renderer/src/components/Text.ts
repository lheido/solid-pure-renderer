import { splitProps } from "solid-js";
import { BaseComponent, BaseComponentProps } from "./BaseComponent";

export interface TextProps extends Omit<BaseComponentProps, "children"> {
  text: string;
}

export function Text(props: TextProps) {
  const [component, html] = splitProps(props, ["text"]);
  return BaseComponent({
    tag: "span",
    ...html,
    children: () => component.text,
  });
}
