import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { Footer, Header } from "./components";
import { GlobalContext } from "./context/global-context";
import { ScrollToTop } from "./utils";
import { PageView } from "./views";

function App() {
  const [newClient, setNewClient] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const defaultContextValues = {
    email, firstName, lastName, message,
    newClient, phone, setEmail, setFirstName, setLastName, setMessage,
    setNewClient, setPhone
  }
  return (
    <GlobalContext.Provider value={defaultContextValues}>
      <div className="App">
        <Router>
        <header>
          <Header />
        </header>
          <ScrollToTop />
          <PageView />
        <footer>
          <Footer />
        </footer>
      </Router>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
