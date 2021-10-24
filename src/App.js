import Header from "./components/Header";
import Message from "./components/Message";
import data from "./api";
import "./App.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";

import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const App = () => {
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

  const countNumberOfMessages = (person) =>
    messages.filter((message) => message.from === person).length;

  const chartData = () => {
    return [
      { person: "Magnus", meldinger: countNumberOfMessages("Magnus") },
      { person: "Tiril", meldinger: countNumberOfMessages("Tiril") },
      { person: "Peder", meldinger: countNumberOfMessages("Peder") },
      { person: "Ludvig", meldinger: countNumberOfMessages("Ludvig") },
    ];
  };

  return (
    <div className="chat">
      <Header text="Chatroom" />
      {renderMessages()}
      <TextField
        id="filled-basic"
        label="Filled"
        variant="filled"
        style={{ width: "100%" }}
        value={newMessage}
        onChange={(event) => setNewMessage(event.target.value)}
      />
      <DatePicker
        selected={startDate}
        showTimeSelect
        dateFormat="Pp"
        onChange={(date) => setStartDate(date)}
      />
      <Button
        variant="contained"
        style={{ backgroundColor: "#1186fe", color: "white" }}
        onClick={addNewMessage}
      >
        Send
      </Button>
      <p>Antall meldinger:</p>
      <VictoryChart
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={20}
      >
        <VictoryAxis
        // tickValues specifies both the number of ticks and where
        // they are placed on the axis
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
        />
        <VictoryBar data={chartData()} x="person" y="meldinger" />
      </VictoryChart>
    </div>
  );
};

export default App;
