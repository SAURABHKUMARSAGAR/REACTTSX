type ChildrenProps = {
  children: string; //children
};
export const Heading = (props: ChildrenProps) => {
  return <div>{props.children}</div>;
};
