import { useSelector } from "react-redux";

function Read() {
  // const value = useSelector((state) => state.input.value);
  const { value } = useSelector((state) => state.input);

  return (
    <div>
      <h2>Read Component</h2>
      <div>{value}</div>
    </div>
  );
}

export default Read;