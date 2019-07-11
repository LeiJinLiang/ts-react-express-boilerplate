import * as React from "react";

interface State {
  count: number;
}

interface incrementAction {
  type: "increment";
}

interface decrementAction {
  type: "decrement";
}

interface resetActon {
  type: "reset";
  payload: number;
}

type Action = incrementAction | decrementAction | resetActon;

function init(initialCount: number) {
  return { count: initialCount };
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Counter(initialCount: number) {
  const [state, dispatch] = React.useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}

function Counter2() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    // Tips effect 可选的清除机制。每个effct 都可以返回一个清除函数。
    return () => clearInterval(id);
  }, []); // only re-run the effect if count changes
  return <span>{count}</span>;
}

export { Counter, Counter2 };
