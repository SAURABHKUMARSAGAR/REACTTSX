type PersonProps = {
  names: {
    first: string;
    last: string;
  };
};
export const Person = (props: PersonProps) => {
  return (
    <div>
      <div>
        Welcome {props.names.first} {props.names.last}
      </div>
    </div>
  );
};
