import { useState } from "react";
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
      <button onClick={() => props.onSet(inputVal)}>{props.name}</button>
    </div>
  );
};

const App = () => {
  const [name, setName] = useState(null);
  const theName = name || "unknown";

  // Her må du bytte ut hva som brukes av data.
  // Du kan regne med at data er "start verdien" vår
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
      {!name && (
        <InputWithButton placeholder="name" name="Sett navn" onSet={setName} />
      )}
      {name && (
        <InputWithButton
          placeholder="Message"
          name="Send"
          // console.log er bare en placholder her,
          // du må selv finne ut hva onSet skal settes til
          onSet={(v) => console.log(v)}
        />
      )}
    </div>
  );
};

export default App;
