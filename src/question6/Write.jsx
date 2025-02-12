import { useState } from "react";
import { useDispatch } from "react-redux";
import { setInput } from "./inputSlice";

export default function Create() {
  const [inputText, setInputText] = useState("");

  const dispatch = useDispatch();

  function handleInput() {
    dispatch(setInput(inputText));
  }

  return (
    <div>
      <h2>Write Component</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="border border-black"
      />
      <button onClick={handleInput}>Enter</button>
    </div>
  );
}