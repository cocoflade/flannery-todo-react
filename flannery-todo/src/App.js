import React from "react";
import "./App.css";
import Header from "./components/header";
import ToDoList from "./components/toDoList";

class App extends React.Component {
  state = {
    to_do: [
      { task: "Wash dishes", estimated_time: 10, priority: 80 },
      { task: "Clean car", estimated_time: 60, priority: 40 },
      { task: "Workout", estimated_time: 45, priority: 60 },
      { task: "Hoover carpet", estimated_time: 20, priority: 50 },
      { task: "Paint fence", estimated_time: 70, priority: 10 },
    ],
  };

  addTaskClick = () => {};

  handleDelete = (index) => {
    const copyArr = [...this.state.to_do];
    copyArr.splice(index, 1);
    this.setState({ to_do: copyArr });
  };

  increasePriority = () => {};

  sortByPriority = () => {};

  render() {
    return (
      <div className="App">
        <Header amount={this.state.to_do.length} />

        <ToDoList to_do={this.state.to_do} deleteTask={this.handleDelete} />
      </div>
    );
  }
}

export default App;
