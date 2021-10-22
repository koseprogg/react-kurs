import React from "react";
import "./App.css";

const Header = (props) => {
  return (
    <h1 className="header">
      {props.text}
    </h1>
  )
}

const App = () => {
  return (
    <div className="chat">
      <Header text="Chatroom" />
    </div>
  );
};

export default App;