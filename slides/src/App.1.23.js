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
      <Message
        from={"Peder"}
        text={"Er dere klare?"}
        timestamp={"17:14:12"}
        me={true}
      />
      <Message
        from={"Ludvig"}
        text={"JaJa, kommer nå"}
        timestamp={"17:15:12"}
        me={false}
      />
      <Message
        from={"Magnus"}
        text={"Rett rundt hjørnet"}
        timestamp={"17:16:33"}
      />
      <Message
        from={"Peder"}
        text={"Venter fortsatt..."}
        timestamp={"17:17:45"}
        me
      />
    </div>
  );
};

export default App;