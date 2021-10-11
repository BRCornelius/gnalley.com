import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { Footer } from "./components";
import { ContactPage, FirmPage, SplashPage, TeamPage } from "./views";

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <h1>Header</h1>
        <nav className="nav-link-container">
          <Link to="/" className="nav-link"><h1>Home</h1></Link>
          <Link to="/firm" className="nav-link"><h1>Firm</h1></Link>
          <Link to="/team" className="nav-link"><h1>Team</h1></Link>
          <Link to="/contact" className="nav-link"><h1>Contact</h1></Link>
        </nav>
      </header>
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
      <footer>
        <Footer />
      </footer>
    </Router>
    </div>
  );
}

export default App;
