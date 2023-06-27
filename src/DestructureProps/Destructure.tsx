type DestrucProps = {
  name: string;
  count: number;
  isLogged: boolean;
};
//destructuring...
export const Destucture = ({ name, count, isLogged }: DestrucProps) => {
  return (
    <div>
      {isLogged ? (
        <div>
          Welcome to {name} ,{count}{" "}
        </div>
      ) : (
        "Welcome new Screen of Desktop"
      )}
    </div>
  );
};
