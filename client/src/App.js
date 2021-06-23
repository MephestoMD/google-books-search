import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NotFound from "./pages/Not-Found/NotFound";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/saved" component={Saved} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/search" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </>
  );
}

export default App;
