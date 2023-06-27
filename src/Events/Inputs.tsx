import React from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Inputs = (props: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    //it will take two element 1.input value 2.onchange
    <div>
      Props:
      <input type="text" value={props.value} onChange={props.handleChange} />
      <br />
      Props same as above:
      <input type="text" value={props.value} onChange={handleInputChange} />
    </div>
  );
};
