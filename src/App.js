import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { Footer, Header } from "./components";
import { ContactPage, FirmPage, SplashPage, TeamPage } from "./views";

function App() {
  return (
    <div className="App">
      <Router>
      <header>
        <Header />
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
