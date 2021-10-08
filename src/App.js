import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { ContactPage, FirmPage, SplashPage, TeamPage } from "./views";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Header</h1>
      </header>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/team">
            <TeamPage />
          </Route>
          <Route path="/firm">
            <FirmPage />
          </Route>
          <Route path="/">
            <SplashPage />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
