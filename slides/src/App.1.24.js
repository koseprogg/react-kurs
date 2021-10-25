import React from "react";
import Header from "./components/Header";
import Message from "./components/Message";
import data from "./api";
import "./App.css";

const App = () => {
  const messages = data.map((msg) => (
    <Message
      from={msg.from}
      timestamp={msg.timestamp}
      text={msg.text}
      me={msg.me}
    />
  ));

  return (
    <div className="chat">
      <Header text="Chatroom" />
      {messages}
    </div>
  );
};

export default App;