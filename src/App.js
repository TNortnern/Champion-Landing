import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import './styles/index.css';


export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
    </Switch>
  );
}
