import React from "react";
type MouseProps = {
  handlerClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};

export const MouseEvent = (props: MouseProps) => {
  return (
    <div>
      <button onClick={(event) => props.handlerClick(event, 1)}>Click</button>
    </div>
  );
};
