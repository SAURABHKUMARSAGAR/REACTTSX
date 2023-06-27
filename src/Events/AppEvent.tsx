// import {Button} from './Button';
// import { MouseEvent } from "./MouseEvent";
import { Inputs } from "./Inputs";
function AppEvent() {
  return (
    <div>
      {/* <Button handleClick={()=>{
          console.log('Button Click');
        }}/>  */}
      {/* <MouseEvent
        handlerClick={(event, id) => {
          console.log("click button", event, id);
        }}
      /> */}

      <Inputs
        value=""
        handleChange={(event) => {
          console.log(event);
        }}
      />
    </div>
  );
}

export default AppEvent;
