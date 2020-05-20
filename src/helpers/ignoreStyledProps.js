import omit from "lodash/omit";

export default function ignoreStyledProps(Component, ignoreProps) {
  // eslint-disable-next-line react/display-name
  return (props) => <Component {...omit(props, ignoreProps)} />;
}
