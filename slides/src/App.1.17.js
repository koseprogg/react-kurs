import React from "react";
import "./App.css";

const Message = (props) => {
  return (
    <div className="message message-right">
      <span className="from">{props.from}</span>
      <span className="text text-right">{props.text}</span>
      <span className="timestamp">{props.timestamp}</span>
    </div>
  );
};

export default Message;