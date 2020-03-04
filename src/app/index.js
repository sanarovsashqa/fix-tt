import React from "react";
import "./index.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PokemonsPage from "./pages/PokemonsPage";
import PokemonPage from "./pages/PokemonPage";
import WebFont from "webfontloader";

function App() {
  WebFont.load({
    google: {
      families: ["Oxanium:400,700", "sans-serif"]
    }
  });

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PokemonsPage />
        </Route>
        <Route path="/pokemon/:id">
          <PokemonPage />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
