import React, { Component } from "react";
import "./App.css";

export class ToDo extends Component {
  state = {
    todos: undefined,
    text: "", //jel bi moglo kako drugacije da dodajemo direktno iz inputa u funkciju newItem
    error: "",
    counter: 0
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

  clearCompleted = () => {
    const { todos } = this.state;
    const result = todos ? todos.filter(item => item.completed === false) : "";
    this.setState({
      todos: result
    });
  };
  newItem = event => {
    const { todos } = this.state;
    const { text } = this.state;
    const { error } = this.state;
    const{counter}=this.state;
    const addingItem = todos.slice();
    const uuidv1 = require("uuid/v1");
    uuidv1();
    const newItem = {
      userId: 1,
      id: uuidv1(),
      title: text,
      completed: false
    };
    if(text!==""&&counter<15) { addingItem.push(newItem) }
      else if(text==="") {this.setState({ error: "Niste unijeli vrijednost" });}
    this.setState({
      todos: addingItem
    });
  };
  updateInput = event => {
    let { counter } = this.state;
    let {error} = this.state;
    let {text}=this.state;
    counter=text.length+1;
    let symbol= event.target.value;
    if(event.target.value.length<counter) counter=counter-2; //zato sto stavlja za brisanje jedan znak vise, a treba 1 manje
    const empty = (symbol && counter<15) ? this.setState({ error: "" }): "";
    console.log(counter);
    const maxCharacter= counter<15? this.setState({ error: "Možete unijeti još "+(14-counter)}) :  this.setState({ error: "Unijeli ste prevelik broj znakova"});
    this.setState({
      text: symbol,
      counter: counter
    });
    
  };

  render() {
    const { todos } = this.state;
    const { error } = this.state;

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
        <span>{error}</span>
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
