import "./App.css";

import { Link, Route } from "react-router-dom";

import Chat from "./Chat";
import Stats from "./Stats";

const App = () => {
  return (
    <>
      <div className="nav">
        <Link to="/">Hjem</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/stats">Statistikk</Link>
      </div>
      <div className="chat">
        <Route path="/" exact>
          <p>Velkommen til min app! :)</p>
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/stats">
          <Stats />
        </Route>
      </div>
    </>
  );
};

export default App;
