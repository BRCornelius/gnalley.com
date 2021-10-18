import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { Footer, Header } from "./components";
import { GlobalContext } from "./context/global-context";
import { emptyValues, ScrollToTop } from "./utils";
import { PageView } from "./views";

function App() {
  const [newClient, setNewClient] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [open, setOpen] = useState(false)
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const emptyContactState = () => emptyValues([setEmail, setFirstName, setLastName, setMessage, setNewClient, setPhone]);

  const defaultContextValues = {
    email, firstName, lastName, message, newClient, open, phone, setEmail,
    setFirstName, setLastName, setMessage, setNewClient, setOpen, setPhone, emptyContactState
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
