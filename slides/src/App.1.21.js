import React from "react";
import "./App.css";

const Message = (props) => {
  const direction = props.me ? "right" : "left";

  return (
    <div className={`message message-${direction}`}>
      <span className="from">{props.from}</span>
      <span className={`text text-${direction}`}>{props.text}</span>
      <span className="timestamp">{props.timestamp}</span>
    </div>
  );
};

export default Message;