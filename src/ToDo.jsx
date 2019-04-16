import React, { Component } from "react";
import "./App.css";

export class ToDo extends Component {
  state = {
    todos: undefined
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(json =>
        this.setState({
          todos: json
        })
      )
      .catch(error => console.log(error));
  }

  toggleFinished = event => {
    const { todos } = this.state;
    const { clickedId } = event.currentTarget.dataset;

    const clickedIndex = todos.findIndex(
      item => item.id === parseInt(clickedId)
    );

    todos[clickedIndex].completed = !todos[clickedIndex].completed;

    this.setState({
      todos: todos
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <main className="main wrapper">
        <header className="header">
          <h1>My To-Do List</h1>
          <button className="btn">Clear all</button>
        </header>
        <div className="new">
          <input className="input" type="text" />
          <button className="add btn">Add</button>
        </div>
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
