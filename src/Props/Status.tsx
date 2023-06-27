type StatusProps = {
  status: "loading" | "success" | "error"; //unoin props type
};
export const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Data fatched Loading..";
  } else if (props.status === "success") {
    message = "Data fetch successfully!";
  } else if (props.status === "error") {
    message = "found error";
  }
  return <div>{message}</div>;
};
