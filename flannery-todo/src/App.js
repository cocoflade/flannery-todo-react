import React from "react";
import "./App.css";
import Header from "./components/header";
import ToDoList from "./components/toDoList";

class App extends React.Component {
  state = {
    sort: false,
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
    this.setState((currState) => {
      const copyArr = [...currState.to_do];
      copyArr.splice(index, 1);
      return { to_do: copyArr };
    });
  };

  increasePriority = () => {};

  sortByPriority = () => {
    this.setState((currState) => {
      const newArr = [...currState.to_do];
      newArr.sort((a, b) => b.priority - a.priority);
      console.log(newArr);
      return { to_do: newArr };
    });
  };

  render() {
    return (
      <div className="App">
        <Header amount={this.state.to_do.length} />

        <ToDoList
          to_do={this.state.to_do}
          sort={this.state.sort}
          deleteTask={this.handleDelete}
          sortBy={this.sortByPriority}
        />
      </div>
    );
  }
}

export default App;
