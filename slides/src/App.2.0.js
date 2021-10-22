import React, { useState } from "react";
import "./App.css";

const Header = () => {
  return <h1 className="header">Chatroom</h1>;
};

const App = () => {
  const [name, setName] = useState(null);

  const theName = name || "unknown";

  return (
    <div className="chat">
      <Header />
      <div className={"message message-right"}>
        <span className="from">{theName}</span>
        <span className="text text-right">
          Er dere klare?
        </span>
        <span className="timestamp">17:14:12</span>
      </div>
      <div className={"message message-left"}>
        <span className="from">Ludvig</span>
        <span className="text text-left">
          JaJa, kommer nå
        </span>
        <span className="timestamp">17:15:12</span>
      </div>
      <div className={"message message-left"}>
        <span className="from">Magnus</span>
        <span className="text text-left">
          Rett rundt hjørnet
        </span>
        <span className="timestamp">17:16:33</span>
      </div>
      <div className={"message message-right"}>
        <span className="from">{theName}</span>
        <span className="text text-right">
          Venter fortsatt...
        </span>
        <span className="timestamp">17:17:45</span>
      </div>

      <input
        placeholder="name"
        onInput={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default App;
