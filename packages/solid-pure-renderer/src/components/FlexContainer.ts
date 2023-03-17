import { splitProps } from "solid-js";
import { PureComponent } from "../types";
import { BaseComponent, BaseComponentProps } from "./BaseComponent";

export interface FlexContainerProps extends BaseComponentProps {
  direction?: "row" | "column";
  gap?: number;
}

export function FlexContainer(props: FlexContainerProps): PureComponent {
  const [component, classes, html] = splitProps(
    props,
    ["direction", "gap"],
    ["class"]
  );
  return BaseComponent({
    tag: "div",
    ...html,
  });
}
