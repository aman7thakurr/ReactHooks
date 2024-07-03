import React, { memo } from "react";
const Todo = ({ todo, addTodo }) => {
  console.log("hi from the child component");

  return (
    <>
      <div>
        <h1>My Todo</h1>
        {todo.map((value, index) => {
          return <p key={index}>{value}</p>;
        })}

        <button onClick={addTodo}>Add Todo</button>
      </div>
    </>
  );
};
export default memo(Todo);
