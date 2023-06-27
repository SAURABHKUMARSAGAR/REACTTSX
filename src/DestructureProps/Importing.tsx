import { PersonProps } from "./Exporting.type";
export const Importing = (props: PersonProps) => {
  return (
    <div>
      {props.name.first} {props.name.first}
    </div>
  );
};
