import React from "react";
import "./App.css";

const Header = (props) => {
  return (
    <h1 className="header">
      Chatroom
    </h1>
  )
}

const App = () => {
  return (
    <div className="chat">
      <Header />
    </div>
  );
};

export default App;