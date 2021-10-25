import React, { useState } from "react";
import Header from "./components/Header";
import Message from "./components/Message";
import data from "./api";
import "./App.css";

const InputWithButton = (props) => {
  const [inputVal, setInputVal] = useState(null);

  return (
    <div>
      <input
        placeholder={props.placeholder}
        onInput={(e) => setInputVal(e.target.value)}
      />
      <button onClick={() => props.onSet(inputVal)}>
        {props.name}
      </button>
    </div>
  );
};

const App = () => {
  const [name, setName] = useState(null);
  const theName = name || "unknown";

  const [messageData, setMessageData] = useState(data);

  const addMessage

  const messages = messageData.map((msg) => (
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
      {!name && (
        <InputWithButton
          placeholder="name"
          name="Sett navn"
          onSet={setName}
        />
      )}
      {name && (
        <InputWithButton
          placeholder="Message"
          name="Send"
          onSet={addMessage}
        />
      )}
    </div>
  );
};

export default App;
