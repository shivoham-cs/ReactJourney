import { useState } from "react";
import NegativeWarning from "./NegativeWarning";
import HigherNumberMessage from "./HigherNumberMessage";

function Counter() {
  const [count, setCount] = useState(0);


  return (
    <div id="counterMain" style={{ textAlign: "center", marginTop: "30px" }}>
      <h2 className="heading">Counter App</h2>

      <h3>Count: {count}</h3>

      <button style={{ color: "green", marginRight: "20px" }} onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button style={{ color: "#727200", marginRight: "20px" }} onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <button style={{ color: "red" }} onClick={() => setCount(0)}>
        Reset
      </button>

      {count < 0 ? (
        <NegativeWarning />
      ) : count > 10 ? (
        <HigherNumberMessage />
      ) : null}

    </div>
  );
}

export default Counter;
