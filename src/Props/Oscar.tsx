type OscarProps = {
  children: React.ReactNode; //children props can have inside multiple component
}; //type react.reactnode
export const Oscar = (props: OscarProps) => {
  return (
    <div>
      <p>Oscar goes to leonard Dicpario!</p>
    </div>
  );
};
