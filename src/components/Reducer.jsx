import React, { useReducer } from "react";

function Reducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INC":
        return state + 1;
      case "DEC":
        return state - 1;
      case "RESET":
        return 0;
      case "DOUBLE":
        return state * 2;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>count is {count}</h1>
      <button
        className="btn btn-primary m-3"
        onClick={() => dispatch({ type: "INC" })}
      >
        Increment
      </button>

      <button
        className="btn btn-primary m-3"
        onClick={() => dispatch({ type: "DEC" })}
      >
        Decrement
      </button>

      <button
        className="btn btn-primary m-3"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>

      <button
        className="btn btn-primary m-3"
        onClick={() => dispatch({ type: "DOUBLE" })}
      >
        Double
      </button>
    </div>
  );
}

export default Reducer;
