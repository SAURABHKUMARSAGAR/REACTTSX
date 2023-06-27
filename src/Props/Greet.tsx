type GreetProps = {
  name: string;
  count?: number; //optional props
  isLogged: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLogged ? (
        <div>
          Welcome {props.name} {props.count} this is optional props
        </div>
      ) : (
        "Welcome to New Screen"
      )}
    </div>
  );
};
