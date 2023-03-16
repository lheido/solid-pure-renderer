import For from './For';
import Container from './Container';

export const List = (items: any, render: any, fallback?: any) =>
  Container({
    tag: 'ul',
    children: For({
      get each() {
        return items();
      },
      children: (item: any, i: () => number) =>
        Container({
          tag: 'li',
          children: render(item, i),
        }),
    }),
  });

export const OrderedList = (items: any, render: any, fallback?: any) =>
  Container({
    tag: 'ol',
    children: For({
      get each() {
        return items();
      },
      children: (item: any, i: () => number) =>
        Container({
          tag: 'li',
          children: render(item, i),
        }),
      fallback,
    }),
  });
