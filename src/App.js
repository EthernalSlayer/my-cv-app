import React from "react";
import Header from "./component/Header";
import Footer from "./component/footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Competences from "./component/Competences";
import Apropos from "./component/Apropos";
import Portofolio from "./component/Portofolio";
import Contact from "./component/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/competences" component={Competences} />
        <Route path="/a-propos" component={Apropos} />
        <Route path="/portofolio" component={Portofolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
