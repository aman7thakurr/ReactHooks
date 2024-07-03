import React, { useCallback, useState } from "react";
import Todo from "./Todo";

const UseCallbackHook = () => {
  const [todo, setTodo] = useState([]);
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  //   console.log("hi");
  const addTodo = useCallback(() => {
    setTodo((todo) => [...todo, "New Task"]);
  }, [todo]);
  return (
    <>
      <div>
        {/* hi */}
        <Todo todo={todo} addTodo={addTodo} />
        <p>Count : {count}</p>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default UseCallbackHook;
