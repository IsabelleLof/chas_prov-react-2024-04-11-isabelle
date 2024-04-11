// 6. Global state med Redux eller Context (3p)
// Skapa två komponenter: En som heter Read och en som heter Write.
// Write ska ha ett inputfält och det som skrivs ska sparas i global state.
// Read ska visa en valfri text som skrivs i Write.
// Read ska visa det som sparas i global state.
// Lägg in Read och Write komponenterna i App-komponenten.

import { Provider } from "react-redux";
import InputCreate from "./Write";
import InputRead from "./Read";
import { store } from "./store";

// installera redux:
// npm i react-redux @reduxjs/toolkit

// inputSlice.js

// store.js

// Provider runt alla komponenter som ska kunna läsa och
// skriva från redux.

// Koppla komponenterna till redux

function App() {
  return (
    <Provider store={store}>
      <InputCreate />
      <InputRead />
    </Provider>
  );
}

export default App;
// 3p
