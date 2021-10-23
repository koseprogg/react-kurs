import React from "react";
import "./App.css";

const Header = (props) => {
  return (
    <h1 className="header">
      {props.text}
    </h1>
  )
}

const App = () => {
  const list = [
    "Chatroom", 
    "Groups", 
    "Friends", 
  ];

  const headers = list.map((e) => {
    return <Header text={e} />
  })

  return (
    <div className="chat">
      {headers}
    </div>
  );
};

export default App;