import React, { Component } from "react";
import { ToDo } from "./ToDo";
import { ErrorPage } from "./ErrorPage";
import { Detalji, TodosDetails } from "./Detalji";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import { AppLayout } from "./components";
export class App extends Component {
  state = {
    todos: undefined
  };
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(todos => this.setState({ todos }))
      .catch(error => console.log(error));
  }
  renderRoute = props => <ToDo {...props} {...this.state} />;

  render() {
    return (
      <BrowserRouter>
        <AppLayout>
          <Switch>
            <Redirect exact from="/" to="todos" />>
            <Route exact path="/todos"  render={this.renderRoute} />
            <Route path="todos/:id" render={this.renderRoute} />
            <Route component={ErrorPage} />
          </Switch>
        </AppLayout>
      </BrowserRouter>
    );
  }
}
