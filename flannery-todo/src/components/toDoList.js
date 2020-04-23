import React from "react";

function ToDoList(props) {
  const { to_do } = props;

  return (
    <ol>
      <h2>To Do</h2>

      {to_do.map(({ task, estimated_time, priority }) => {
        return (
          <li key={task}>
            <p>
              {task}
              {estimated_time}
              {priority}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
export default ToDoList;
