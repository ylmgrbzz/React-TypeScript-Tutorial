import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const person = {
    first: "Yalım",
    last: "Gürbüz",
    age: 23,
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      <Greet name="ylm" messageCount={10} isLoggedIn={true} />
      <Person name={person} />
      <PersonList name={nameList} />
      <Status status="loading" />
    </div>
  );
}

export default App;
