import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Base from "./components/Base/Base";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Work from "./components/Work/Work";
import Resume from "./components/Resume/Resume";
import Error from "./components/Error/Error";
import MenuOverlay from "./components/MenuOverlay/MenuOverlay";

function App() {
  const [menu, setMenu] = useState(0);
  const [error, setError] = useState(false);
  const [menuBar, setMenuBar] = useState(false);

  const changeMenu = (val) => {
    setMenu(val);
  };

  const changeError = (bol) => {
    setError(bol);
  };

  return (
    <div className="App">
      <div className="main__container">
        <div className={`fixed__container ${error ? "isError" : ""}`}>
          <Base menu={menu} changeMenu={changeMenu} />
        </div>

        <div className="dynamic__container">
          <div className="pages__container">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => <Work menu={menu} changeMenu={changeMenu} />}
              />

              <Route
                exact
                path="/work"
                render={(props) => <Work menu={menu} changeMenu={changeMenu} />}
              />

              <Route
                exact
                path="/resume"
                render={(props) => (
                  <Resume menu={menu} changeMenu={changeMenu} />
                )}
              />

              <Route
                exact
                path="/contact"
                render={(props) => (
                  <Contact menu={menu} changeMenu={changeMenu} />
                )}
              />

              <Route
                exact
                path="*"
                render={(props) => (
                  <Error error={error} changeError={changeError} />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>

      <div className="mobile__container">
        <div className="pages__container__mobile">
          <Header menuBar={menuBar} setMenuBar={setMenuBar} />

          <MenuOverlay menuBar={menuBar} setMenuBar={setMenuBar} />

          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Home menu={menu} changeMenu={changeMenu} />}
            />

            <Route
              exact
              path="/work"
              render={(props) => <Work menu={menu} changeMenu={changeMenu} />}
            />
            <Route
              exact
              path="/resume"
              render={(props) => <Resume menu={menu} changeMenu={changeMenu} />}
            />

            <Route
              exact
              path="/contact"
              render={(props) => (
                <Contact menu={menu} changeMenu={changeMenu} />
              )}
            />

            <Route
              exact
              path="*"
              render={(props) => (
                <Error error={error} changeError={changeError} />
              )}
            />
          </Switch>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
