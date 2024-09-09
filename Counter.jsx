import { useReducer } from "react";
let initialState = 0;
export const Counter = () => {
  const reducer = (state, action) => {
    switch (action) {
      case "INC":
        return state + 1;
      case "DEC":
        return state - 1;
      case "RESET":
        return 0;

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>{state}</p>
      <button onClick={() => dispatch("INC")}>Inc</button>
      <button onClick={() => dispatch("DEC")}>Dec</button>
      <button onClick={() => dispatch("RESET")}>Reset</button>
    </>
  );
};
