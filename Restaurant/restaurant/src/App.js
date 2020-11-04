import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//Components
import Header from "./components/layout/Header";
import About from "./components/layout/About";
import Contact from "./components/layout/Contact";
import Alert from "./components/layout/Alert";
import Footer from "./components/layout/Footer";
import Dishes from "./components/dishes/Dishes";
import Dish from "./components/dishes/Dish";

//Store
import store from "./store";

//Provider
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <Fragment>
          <Header />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/" component={ Dishes } />
              <Route exact path="/dish/:id" component={ Dish } />
              <Route exact path="/about" component={ About } />
              <Route exact path="/contact" component={ Contact } />
            </Switch>
          </section>
          {/* <Footer/> */}
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
