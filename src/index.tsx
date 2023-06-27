import { render } from "react-dom";
// import AppProps from "./Props/AppProps";
// import AppEvent from "./Events/AppEvent";
// import AppContains from './Contains/AppContains'
// import AppDestruc from './DestructureProps/AppDestruc';
import AppHook from "./StateHook/AppHook";

const rootElement = document.getElementById("root");
render(
  <div>
    {/* <AppProps/>, */}
    {/* <AppEvent/> */}
    {/* <AppContains/> */}
    {/* <AppDestruc/> */}
    <AppHook />
  </div>,
  rootElement
);
