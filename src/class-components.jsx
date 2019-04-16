import React, { Component } from "react";
import { Person } from "./functional-components";

export class KlasnaKomponenta extends Component {
  // Default prop values
  static defaultProps = {
    ime: "John",
    prezime: "Doe"
  };

  // State initialisation, with default values
  // State is only available inside class based components
  // This is a class PROPERTY which is an object data-type
  state = {
    godiste: 1990,
    showGodiste: true
  };

  // Arrow handler function that has access to the the class (because of an arrow function)
  // It also has a reference to incoming event from element when action is connected
  // Triggered when an element this function is attached to is clicked
  handleClick = () => {
    let { godiste } = this.state;

    this.setState({
      godiste: ++godiste
    });
  };

  toggleGodiste = () => {
    let { showGodiste } = this.state;
    this.setState({
      showGodiste: !showGodiste
    });
  };

  // Is invoked when class is initially mounted
  // It is invoked again when any props/state property changes
  render() {
    const { ime, prezime } = this.props;
    const { godiste, showGodiste } = this.state;

    // Dynamic class additionsƒ
    let loremClassName = "lorem";
    if (!showGodiste) loremClassName += " nema-godista";

    return (
      <div>
        <Person firstName={this.state.name} />
        <span>
          {ime} {prezime}
        </span>{" "}
        {/* Returning false or null will not render aynthing */}
        {/* Conditional rendering - ternary false */}
        {showGodiste ? (
          <span onClick={this.handleClick}>{godiste}</span>
        ) : (
          false
        )}
        {/* Conditional rendering - ternary nulls */}
        {showGodiste ? <span onClick={this.handleClick}>{godiste}</span> : null}
        {/* Prefered conditional rendering - shorthand assingment */}
        {/* Don't use when you have multiple checks that can return: 0, '', object, array or undefined */}
        {showGodiste && <span onClick={this.handleClick}>{godiste}</span>}
        <p className={loremClassName}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sequi
          deleniti, est quos perspiciatis nihil quis beatae provident minima
          magni aliquid quam earum saepe dolorem porro, delectus quia, commodi
          aspernatur.
        </p>
        <button onClick={this.toggleGodiste}>Prikaži/Sakrij godište</button>
      </div>
    );
  }
}
