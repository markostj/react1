import React, { Component } from "react";
import { Button } from "./Button";
import { Count } from "./Count";

export class Counter extends Component {
  state = {
    count: 0
  };

  componentWillMount() {
    console.log("komponenta će se mountat");
  }

  componentDidMount() {
    console.log("komponenta se mountala");
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(this.state);
    console.log(nextState);
  }

  increaseCount = () => {
    const { count } = this.state;

    this.setState({
      count: count + 1
    });
  };

  decreaseCount = () => {
    const { count } = this.state;

    this.setState({
      count: count - 1
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <Button content="+" clickCallback={this.increaseCount} />
        <Count count={count} />
        <Button content="-" clickCallback={this.decreaseCount} />
      </div>
    );
  }
}
