import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { store } from "./Actions/store";
import { Provider, connect } from "react-redux";
import WorkOut from "./Components/WorkOut";
import LoginScreen from "./Components/LoginScreen";
import MainHeader from "./Components/MainHeader";
import Sidebar from "./Components/Sidebar";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <html>
      <head></head>
      <body>
        <header>
          <MainHeader />
        </header>
        <aside></aside>
        <section>
          <Provider store={store}>
            <Container maxWidth="lg">
              <Router>
                <Route exact path="/" />
                <Route path="/workouts" render={() => <WorkOut />} />
                <Route path="/login" render={() => <LoginScreen />} />
              </Router>
            </Container>
          </Provider>
        </section>
      </body>
    </html>
  );
}

export default App;
