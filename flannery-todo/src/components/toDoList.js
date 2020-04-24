import React from "react";

function ToDoList(props) {
  const { to_do, deleteTask, increasePriority } = props;

  return (
    <ol>
      {to_do.map(({ task, estimated_time, priority }) => {
        return (
          <section key={task} onClick={deleteTask}>
            <h2>{task}</h2>
            <h5>Estimated time: {estimated_time} minutes</h5>
            <h5>Priority: {priority}%</h5>
            <button onClick={increasePriority}>Increase priority</button>
          </section>
        );
      })}
    </ol>
  );
}
export default ToDoList;

// <section key={task}>
// <p onClick={deleteTask}>
//   {task}
//   estimated_time:{estimated_time}
//   priority:{priority}%
// </p>
// </section>
