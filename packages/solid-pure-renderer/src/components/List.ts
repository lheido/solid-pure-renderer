import { Accessor, splitProps } from "solid-js";
import { For, Show } from "../flow";
import { PureComponent } from "../types";
import { BaseComponent, BaseComponentProps } from "./BaseComponent";

export type ListProps<T> = Omit<BaseComponentProps, "children"> & {
  items: () => T[];
  renderItem: (item: T, index: Accessor<number>) => PureComponent;
  fallback?: PureComponent;
};

export function List<T>(props: ListProps<T>) {
  const [component, html] = splitProps(props, [
    "items",
    "renderItem",
    "fallback",
    "itemClass",
  ]);
  return Show(
    () => component.items().length > 0,
    BaseComponent({
      ...html,
      tag: "ul",
      children: For<T[]>(
        () => component.items(),
        (item, index) => component.renderItem(item, index)
      ),
    }),
    component.fallback
  );
}

export type ListItemProps = BaseComponentProps;

export function ListItem(props: ListItemProps) {
  const [component, html] = splitProps(props, ["children"]);
  return BaseComponent({
    ...html,
    tag: "li",
    children: component.children,
  });
}

export function OrderedList<T>(props: ListProps<T>) {
  const [component, html] = splitProps(props, [
    "items",
    "renderItem",
    "fallback",
    "itemClass",
  ]);
  return Show(
    () => component.items().length > 0,
    BaseComponent({
      ...html,
      tag: "ol",
      children: For<T[]>(
        () => component.items(),
        (item, index) => component.renderItem(item, index)
      ),
    }),
    component.fallback
  );
}
