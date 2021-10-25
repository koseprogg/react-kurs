import Header from "./components/Header";
import Message from "./components/Message";
import data from "./api";
import "./App.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useState } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Chat = () => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState(data);
  const [startDate, setStartDate] = useState(new Date());

  const renderMessages = () =>
    messages.map((msg, key) => (
      <Message
        key={key}
        from={msg.from}
        timestamp={msg.timestamp}
        text={msg.text}
        me={msg.me}
      />
    ));

  const addNewMessage = () => {
    const newMessageObj = {
      from: "Peder",
      timestamp: startDate,
      text: newMessage,
      me: true,
    };
    setMessages(messages.concat([newMessageObj]));
    setNewMessage("");
  };

  return (
    <>
      <Header text="Chatroom" />
      {renderMessages()}
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <TextField
          label="Melding"
          variant="outlined"
          style={{ width: "100%" }}
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
        />
        <Button
          variant="contained"
          onClick={addNewMessage}
          disabled={newMessage.length < 1}
          color="primary"
        >
          Send
        </Button>
      </div>
      <LinearProgress
        variant="determinate"
        value={Math.min(newMessage.length * 2, 100)}
        style={{ marginBottom: "10px" }}
      />
      <DatePicker
        selected={startDate}
        showTimeSelect
        dateFormat="Pp"
        onChange={(date) => setStartDate(date)}
      />
    </>
  );
};

export default Chat;
