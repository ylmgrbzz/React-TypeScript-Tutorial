import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import User from "./components/User";
import { Box } from "./context/Box";
import { ThemeContextProvider } from "./context/ThemeContext";

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
      <Heading>Placeholder</Heading>
      <Oscar>
        <Heading>oscar goes to Yalım Gürbüz</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => console.log("Button clicked", event, id)}
      />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <Input
        value=""
        handleChange={(event) => console.log(event.target.value)}
      />
      <User name="Yalım Gürbüz" email="ylmgrbz@gmail.com" />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
