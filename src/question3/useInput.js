import { useState } from "react";

const useInput = (initialInput) => {
  const [input, setInput] = useState(initialInput);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return {
    input,
    onChange: handleChange
  };
};

export default useInput;