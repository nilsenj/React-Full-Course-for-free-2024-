import {useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
      // first letter of variable or prefix prev to variable provides previous value. example: prevCounter or c
      setCount(c => c + 1);
      setCount(c => c + 1);
      setCount(c => c + 1);
  }

    const deCrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(0);
    }


    return (
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={deCrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    );
}

export default Counter;