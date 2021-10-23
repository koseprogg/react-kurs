import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="chat">
      <h1 className="header">
        Chatroom
      </h1>
      <div className="message message-right">
        <span className="from">Peder</span>
        <span className="text text-right">Er dere klare?</span>
        <span className="timestamp">17:14:12</span>
      </div>
    </div>
  );
};

export default App;