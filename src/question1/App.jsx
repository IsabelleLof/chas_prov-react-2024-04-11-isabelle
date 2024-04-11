// 1. En lista med filmer (3p)
// Sidan ska visa en lista med filmer
// Användaren ska kunna lägga till nya filmer i listan genom att skriva in filmens namn
// i ett inputfält och sedan klicka på en "Lägg till"-knapp.
// Varje film i listan ska ha en ta bort knapp som tar bort den filmen ur listan

import { useState } from "react";

//import "./App.css";

let count = 1;

export default function App() {
  const [movies, setMovies] = useState([]);

  const [input, setInput] = useState("");

  function handleMovie(e) {
    setInput(e.target.value);
  }

  function handleAddMovie() {
    const movie = {
      id: count++,
      text: input,
    };
    setMovies([...movies, movie]);
    setInput(""); // Clear the input field
    //console.log(movies);
  }

  function handleRemove(id) {
    const filteredMovies = movies.filter((movie) => movie.id != id);
    setMovies(filteredMovies);
  }

  return (
    <div className="movies-container">
      <h2>Filmlista:</h2>
      {movies.map((movie) => {
        return (
          <div className="flex" key={movie.id}>
            <p>{movie.text}</p>
            <button onClick={() => handleRemove(movie.id)}>Ta bort</button>
          </div>
        );
      })}
      <input type="text" input={input} onChange={handleMovie} />
      <button onClick={handleAddMovie}>Lägg till</button>
    </div>
  );
}

//Som todolist utan done knapp - gå tillbaka till chas todo app github

//filterfunktion gör alltid kopior
