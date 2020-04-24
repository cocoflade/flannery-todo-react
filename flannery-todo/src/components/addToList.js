import React from "react";

class AddTask extends React.Component {
  state = {
    to_do: [{ task: "", estimated_time: "", priority: "" }],
  };

  render() {
    return (
      <form>
        <label>
          <input />
        </label>
      </form>
    );
  }
}

export default AddTask;
