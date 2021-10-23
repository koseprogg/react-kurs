import React from "react";
import "./App.css";

const Message = (props) => {

  const dateString = new Date(props.timestamp).toLocaleTimeString('no-NO')

  const direction = props.me ? "right" : "left";

  return (
    <div className={`message message-${direction}`}>
      <span className="from">{props.from}</span>
      <span className={`text text-${direction}`}>{props.text}</span>
      <span className="timestamp">{dateString}</span>
    </div>
  );
};

export default Message;