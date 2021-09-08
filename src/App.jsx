import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Movie from "./components/Movie";
import Error404 from "./components/Error404";
import movies from "./movies.json";

export default class App extends Component {
  /*constructor() {
    super();
    this.state = {
      movies: []
    } 
  }

  componentDidMount() {
    fetch("./movies.json")
    .then(res => res.json())
    .then(results => this.setState({
      movies: results
    }));
  }*/

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home movies={/*this.state.*/movies} />
          </Route>
          <Route path="/movie/:id" component={Movie} />
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    )
  }
}