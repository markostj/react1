import React, { Component } from "react";
import "./css/App.css";
import { Link } from "react-router-dom";

const uuidv1 = require("uuid/v1");

export class ToDo extends Component {
  state = {
    todos: undefined,
    text: "",
    error: "",
    counter: 0
  };
  renderItem = ({ id, title }) => (
    <div key={id}>
      <Link to={`/todos/${id}`}>{title}</Link>
    </div>
  );
  toggleFinished = event => {
    //ne treba event moze samo radit s ()
    const { todos } = this.state;
    const { clickedId } = event.currentTarget.dataset;
    //const clickedIndex = todos.findIndex(
    // item => item.id === parseInt(clickedId)
    // );
    // todos[clickedIndex].completed = !todos[clickedIndex].completed;

    // this.setState({
    //   todos: todos
    // });
  }

  clearCompleted = () => {
    let { todos } = this.state;
    if (todos) {
      todos = todos.filter(item => !item.completed);
    }

    this.setState({
      todos
    });
  };
  newItem = event => {
    const {  text, counter } = this.state;
    const {todos} = this.props;
    const newItem = {
      userId: 1,
      id: uuidv1(),
      title: text,
      completed: false
    };

    let { error } = this.state;
    if (!text) {
      error = "Niste unijeli vrijednost";
    }

    if (text && counter < 15) {
      todos.push(newItem);
    }

    this.setState({
      todos,
      error
    });
  };

  updateInput = event => {
    let { counter } = this.state;
    let { error } = this.state;
    let { text } = this.state;
    counter = text.length + 1;
    let symbol = event.target.value;
    if (symbol.length < counter) {
      counter -= 2;
    } //zato sto stavlja za brisanje jedan znak vise, a treba 1 manje
    const empty = symbol && counter < 15 ? this.setState({ error: "" }) : "";
    console.log(counter);
    const maxCharacter =
      counter < 15
        ? (error = "Možete unijeti još " + (14 - counter))
        : (error = "Unijeli ste prevelik broj znakova");
    this.setState({
      text: symbol,
      counter: counter,
      error: error
    });
  };

  render() {
    const { error } = this.state;
    const { todos } = this.props;
    return (
      <main className="main wrapper">
        <header className="header">
          <h1>My To-Do List</h1>
          <button className="btn">Clear all</button>
        </header>
        <div className="new">
          <input onChange={this.updateInput} className="input" type="text" />
          <button onClick={this.newItem} className="add btn">
            Add
          </button>
        </div>
        <span className="error-characters">{error}</span>
        <nav>
          <ul className="filter-list">
            <li>
              <button>Upcoming</button>
            </li>
            <li>
              <button>All</button>
            </li>
            <li>
              <button>Past</button>
            </li>
            <li>
              <button>Completed</button>
            </li>
            <li>
              <button>Pending</button>
            </li>
            <li>
              <button onClick={this.clearCompleted}>Clear Completed</button>
            </li>
          </ul>
        </nav>
        <div className="list">
          {todos
            ? todos.map(item => (
                <div
                  onClick={this.toggleFinished}
                  data-clicked-id={item.id}
                  key={item.id}
                  className={`${
                    item.completed ? "item item-finished" : "item"
                  } `}
                >
                  <h2 className="item-title">{item.title}</h2>
                  <p className="item-date">{item.id}</p>
                </div>
              ))
            : "No todos right now, check back later."}
        </div>
      </main>
    );
  }
}
