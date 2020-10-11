import React from "react";
import Header from "./component/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./component/Home";
import Competences from "./component/Competences";
import Apropos from "./component/Apropos";
import Portofolio from "./component/Portofolio";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/competences" component={Competences} />
        <Route path="/a-propos" component={Apropos} />
        <Route path="/portofolio" component={Portofolio} />
      </Switch>
    </Router>
  );
}

export default App;
