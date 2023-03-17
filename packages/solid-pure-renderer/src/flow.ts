import { Accessor, createMemo, mapArray, untrack } from "solid-js";
import { PureComponent } from "./types";

function _For<
  T extends readonly any[],
  U extends PureComponent = PureComponent
>(props: {
  each: T;
  children: (item: T[number], index: Accessor<number>) => U;
  fallback?: U;
}): Accessor<U[]> {
  const fallback = "fallback" in props && { fallback: () => props.fallback };
  return createMemo(
    mapArray<T[number], U>(() => props.each, props.children, fallback as any)
  );
}

export function For<T extends readonly any[]>(
  _each: Accessor<T>,
  children: (item: T[number], index: Accessor<number>) => PureComponent,
  fallback?: PureComponent
) {
  return _For<T>({
    get each() {
      return _each();
    },
    children,
    fallback,
  });
}

function _Show<T, U extends PureComponent = PureComponent>(props: {
  when: T | undefined | null | false;
  keyed?: boolean;
  children: PureComponent;
  fallback?: any;
}): Accessor<U> {
  let strictEqual = false;
  const keyed = props.keyed;
  const condition = createMemo(() => props.when, undefined, {
    equals: (a, b) => (strictEqual ? a === b : !a === !b),
  });
  return createMemo(() => {
    const c = condition();
    if (c) {
      const child = props.children;
      const fn = typeof child === "function" && child.length > 0;
      strictEqual = keyed || fn;
      return fn ? untrack(() => (child as any)(c as T)) : child;
    }
    return props.fallback;
  }, undefined) as () => any;
}

export function Show<T>(
  _when: Accessor<T | undefined | null | false>,
  children: PureComponent,
  fallback?: PureComponent,
  keyed?: boolean
) {
  return _Show<T>({
    get when() {
      return _when();
    },
    children,
    fallback,
    keyed,
  });
}
