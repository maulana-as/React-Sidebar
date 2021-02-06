import React from "react";
import { Navbar } from "./components/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  Antrian,
  Farmasi,
  Kasir,
  Lab,
  Radiolagi,
  Rajal,
  Ranap,
  Rekmed,
  Sekre,
  Registrasi
} from "./pages/index";
import "./App.css";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/antrian" component={Antrian} />
          <Route path="/regis" component={Registrasi} />
          <Route path="/farmasi" component={Farmasi} />
          <Route path="/kasir" component={Kasir} />
          <Route path="/lab" component={Lab} />
          <Route path="/radiologi" component={Radiolagi} />
          <Route path="/rajal" component={Rajal} />
          <Route path="/ranap" component={Ranap} />
          <Route path="/rekmed" component={Rekmed} />
          <Route path="/sekre" component={Sekre} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
