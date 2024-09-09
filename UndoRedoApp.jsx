import { useReducer } from "react";

const initalState = {
  history: [],
  current: "",
  future: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Undo":
      return {
        history: state.history.slice(0, -1),
        current: state.history[state.history.length - 1],
        future: [state.current, ...state.future],
      };
    case "Redo":
      return {
        history: [...state.history, state.current],
        current: state.future[0],
        future: state.future.slice(1),
      };
    case "Update":
      return {
        history: [...state.history, state.current],
        current: action.payload,
        future: [],
      };
  }
};
export const UndoRedoApp = () => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const handleChange = (e) => {
    dispatch({ type: "Update", payload: e.target.value });
  };

  return (
    <>
      <textarea name="input" value={state.current} onChange={handleChange} />

      <button
        onClick={() => dispatch({ type: "Undo" })}
        disabled={state.history.length === 0}
      >
        Undo
      </button>
      <button
        onClick={() => dispatch({ type: "Redo" })}
        disabled={state.future.length === 0}
      >
        Redo
      </button>
      <p>Current: {state.current} </p>
    </>
  );
};
