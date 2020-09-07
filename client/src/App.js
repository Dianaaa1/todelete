import React, { useState } from 'react';
import Login from './Login';
import Home from './Home';
import Register from './Register';
import { BrowserRouter, Route, Redirect, Link } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Route exact path="/">
        <Login />
        <Link to="/register">Зарегистрироваться</Link>
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login" render={() => <Login />} />
    </BrowserRouter>
  );
}

export default App;

