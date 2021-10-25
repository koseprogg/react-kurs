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
    "Invites", 
    "Scores", 
    "etc..."
  ];

  // const headers = list.map((elem) => {
  //   return <Header text={elem} />
  // })

  let headers = [];
  for(const elem of list) {
    headers.push(<Header text={elem} />)
  }

  return (
    <div className="chat">
      {headers}
    </div>
  );
};

export default App;