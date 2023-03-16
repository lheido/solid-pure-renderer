import { Accessor, createMemo, mapArray } from 'solid-js';

const For = <T>(props: { each: T[]; children: any; fallback?: any }) => {
  const fallback = 'fallback' in props && { fallback: () => props.fallback };
  return createMemo(mapArray(() => props.each, props.children, fallback as any));
};

export default For;
