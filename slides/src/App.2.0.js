import React, { useState } from "react";
import Header from "./components/Header";
import Message from "./components/Message";
import data from "./api";
import "./App.css";

const App = () => {
  const [name, setName] = useState(null);

  const theName = name || "unknown";

  const messages = data.map((msg) => (
    <Message
      from={msg.me ? theName : msg.from}
      timestamp={msg.timestamp}
      text={msg.text}
      me={msg.me}
    />
  ));

  return (
    <div className="chat">
      <Header text="Chatroom" />
      {messages}
      <input
        placeholder="name"
        onInput={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default App;
