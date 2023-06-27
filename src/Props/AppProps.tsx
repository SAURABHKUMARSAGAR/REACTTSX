import { Person } from "./Person";
import { Greet } from "./Greet";
import { PersonArray } from "./PersonArray";
import { Status } from "./Status";
import { Heading } from "./Heading";
import { Oscar } from "./Oscar";
import { useState } from "react";

export default function App() {
  const PersonName = {
    first: "Saurabh",
    last: "Kumar"
  };

  const PersonListName = [
    {
      first: "Saurabh",
      last: "Kumar"
    },
    {
      first: "Sukhvindra",
      last: "Gill"
    },
    {
      first: "Wassen",
      last: "Khan"
    },
    {
      first: "Aditiya",
      last: "Kumar"
    }
  ];

  const statusResponse = ["Loading", "Success", "Error"];
  const [responseState, setResponseState] = useState(statusResponse);
  const [response, setResponse] = useState("");
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(() => count + 1);

    if (count === responseState.length) {
      setCount(0);
      console.log(count);
      console.log("in if condition", responseState.length);
    }
    setResponse(responseState[count]);
  }
  return (
    <div className="App">
      <Person names={PersonName} />
      <Greet name="SaurabhKumar" count={10} isLogged={true} />
      <PersonArray Names={PersonListName} />
      <Status status="loading" />
      <Heading> This is Heading Tag Page...</Heading>
      <button onClick={handleClick}>Current Status</button>
      <p>{response}</p>
      <Oscar>
        <Heading>Oscar goes to leonard Dicpario!</Heading>
        <Heading>Oscar goes to leonard Dicpario!</Heading>
      </Oscar>
      <Greet name="Rohit Kumar" isLogged />
    </div>
  );
}
