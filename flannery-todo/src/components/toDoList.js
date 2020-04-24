import React from "react";

function ToDoList(props) {
  const { to_do, deleteTask, increasePriority, sortBy } = props;

  return (
    <ol>
      <h4>
        Press task to delete, press <button onClick={sortBy}>ME</button> to sort
        by priority
      </h4>

      {to_do.map(({ task, estimated_time, priority }) => {
        return (
          <section key={task}>
            <div onClick={deleteTask}>
              <h2>{task}</h2>
              <h5>Estimated time: {estimated_time} minutes</h5>
              <h5>Priority: {priority}%</h5>
            </div>
            <button onClick={increasePriority}>Increase priority</button>
          </section>
        );
      })}
    </ol>
  );
}
export default ToDoList;
