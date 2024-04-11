// 3. Uppdatera ett namn med callback 3p
// En namn ska visas på sidan och namnet ska vara kopplat till useState i App-komponenten.
// Skapa en komponent: ChangeName som har ett inputfält som ska användas för att ändra
// namnet i App-komponenten via en callback-funktion.

import ChangeName from "./ChangeName";
import { useState } from "react";

export default function App() {
  //Vill ha ett state för att kunna uppdatera input

  const [input, setInput] = useState("");

  function handleInput(input) {
    setInput(input);
  }

  return (
    <div>
      <p>{input}</p>
      <ChangeName handleInput={handleInput} />
    </div>
  );
}
