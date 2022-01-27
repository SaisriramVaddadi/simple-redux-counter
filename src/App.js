import "./styles.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  logIn,
  logOut
} from "./redux/actions/allActions";
export default function App() {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);
  const auth = useSelector((state) => state.auth);
  return (
    <div className="App">
      <h2>Basic Redux example</h2>
      <h2>This counter is done using local state</h2>
      <h2> The count is {counter > 0 ? counter : 0}</h2>
      <button style={{ marginRight: "1em" }} onClick={handleIncrement}>
        increment
      </button>
      <button onClick={handleReset}>reset</button>
      <button style={{ marginLeft: "1em" }} onClick={handleDecrement}>
        decrement
      </button>
      <br />
      <br />
      <h2>Below counter state is managed using redux</h2>
      <h2> The count is {count > 0 && auth ? count : 0}</h2>
      <button
        style={{ marginRight: "1em" }}
        onClick={() => dispatch(increment())}
      >
        increment
      </button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button
        style={{ marginLeft: "1em" }}
        onClick={() => dispatch(decrement())}
      >
        decrement
      </button>
      <br />
      <br />
      <h2>Please logIn to see counter result</h2>
      <button style={{ marginRight: "1em" }} onClick={() => dispatch(logIn())}>
        logIn
      </button>
      <button onClick={() => dispatch(logOut())}>logOut</button>
    </div>
  );
}
