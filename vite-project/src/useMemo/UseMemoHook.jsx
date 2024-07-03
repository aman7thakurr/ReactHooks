import React, { useMemo, useState } from "react";
const UseMemoHook = () => {
  const [todo, setTodo] = useState([]);
  const [count, setCount] = useState(0);
  //   const calculation = expensiveCalculation(count); //without using useMemo it runs everytime render happens
  const calculation = useMemo(() => expensiveCalculation(count), [count]); // only renders when dependency renders or dependency gets chaged
  function increament() {
    setCount(count + 1);
  }
  function addTodo() {
    setTodo((todo) => [...todo, "New Task"]);
  }
  function expensiveCalculation(num) {
    console.log("calculating");
    for (let i = 0; i < 1000000; i++) {
      num += 1;
    }
    return num;
  }
  return (
    <>
      <div>
        <h2>My todo</h2>
        {todo.map((value, index) => {
          return <p key={index}>{value}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
        <p>Count : {count}</p>{" "}
        <span>
          <button onClick={increament}>+</button>
        </span>
        <h2>Expensive Calculation</h2>
        <p>{calculation}</p>
      </div>
    </>
  );
};
export default UseMemoHook;
