type PersonListProps = {
  Names: {
    first: string;
    last: string;
  }[];
};
export const PersonArray = (props: PersonListProps) => {
  return (
    <div>
      {props.Names.map((name) => {
        return (
          <div key={name.first}>
            {name.first} and {name.last}
          </div>
        );
      })}
    </div>
  );
};
