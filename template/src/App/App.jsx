import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyle from "./GlobalApp.styles";
import Navigation from "./layout/Navigation/Navigation";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error404 from "./pages/Error404/Error404";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />

        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  );
};

export default App;
