import React from "react";
import "./App.css";
import Header from "./components/header";
import ToDoList from "./components/toDoList";

class App extends React.Component {
  state = {
    to_do: [
      { task: "wash dishes", estimated_time: 10, priority: 8 },
      { task: "clean car", estimated_time: 60, priority: 4 },
      { task: "workout", estimated_time: 45, priority: 6 },
      { task: "hoover carpet", estimated_time: 20, priority: 5 },
      { task: "paint fence", estimated_time: 70, priority: 1 },
    ],
  };

  addTaskClick = () => {};

  handleDelete = (index) => {
    const copyArr = [...this.state.to_do];
    copyArr.splice(index, 1);
    this.setState({ to_do: copyArr });
  };

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
