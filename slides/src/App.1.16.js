import React from "react";
import "./App.css";

const Message = (props) => {
  return (
    <div className="message message-right">
      <span className="from">Peder</span>
      <span className="text text-right">Er dere klare?</span>
      <span className="timestamp">17:14:12</span>
    </div>
  );
};

export default Message;