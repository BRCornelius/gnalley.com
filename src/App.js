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
      <Router>
      <header className="App-header">
        <h1>Header</h1>
        <nav class="nav-link-container">

              <Link to="/" class="nav-link"><h1>Home</h1></Link>

              <Link to="/firm" class="nav-link"><h1>Firm</h1></Link>

              <Link to="/team" class="nav-link"><h1>Team</h1></Link>

              <Link to="/contact" class="nav-link"><h1>Contact</h1></Link>

        </nav>
      </header>

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
    </Router>
    </div>
  );
}

export default App;
