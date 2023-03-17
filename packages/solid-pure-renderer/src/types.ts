export type PureComponent<T = {}> = (props: T) => any;

export interface PureComponentProps {
  children?: PureComponent | PureComponent[] | string | null;
}
