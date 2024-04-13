import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";

function App() {
  const person = {
    first: "Yalım",
    last: "Gürbüz",
    age: 23,
  };

  return (
    <div className="App">
      <Greet name="ylm" messageCount={10} isLoggedIn={true} />
      <Person name={person} />
    </div>
  );
}

export default App;
