import React from "react";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <div className="chat">
      <Header text="Chatroom" />
      <div className={"message message-right"}>
        <span className="from">Peder</span>
        <span className="text text-right">Er dere klare?</span>
        <span className="timestamp">17:14:12</span>
      </div>
      <div className={"message message-left"}>
        <span className="from">Ludvig</span>
        <span className="text text-left">JaJa, kommer nå</span>
        <span className="timestamp">17:15:12</span>
      </div>
      <div className={"message message-left"}>
        <span className="from">Magnus</span>
        <span className="text text-left">Rett rundt hjørnet</span>
        <span className="timestamp">17:16:33</span>
      </div>
      <div className={"message message-right"}>
        <span className="from">Peder</span>
        <span className="text text-right">Venter fortsatt...</span>
        <span className="timestamp">17:17:45</span>
      </div>
    </div>
  );
};

export default App;