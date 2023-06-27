type ButtonProps = {
  handleClick: () => void; // not return type
};
export const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={props.handleClick}>Click</button>
    </div>
  );
};
