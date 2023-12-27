import { useState } from "react";
import "./styles.css";

type CounterPros = {
  initCounter: number;
};

const Counter = (props: CounterPros) => {
  const [count, setCount] = useState(props.initCounter);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div id="container">
      <button onClick={handleClick}>Contador</button>
      <div>{count}</div>
    </div>
  );
};

export default Counter;
