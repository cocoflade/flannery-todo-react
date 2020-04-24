import React from "react";

function Header(props) {
  return (
    <div id="title">
      <h1>Luke's Todo list</h1>
      <h2>You have {props.amount} left to complete</h2>
      <h4>Press task to delete</h4>
    </div>
  );
}

export default Header;
