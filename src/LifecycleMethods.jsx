import React, { Component } from 'react';

export class LifecycleMethods extends Component {
  // Prvo
  static defaultProps = {
    ime: 'John',
    prezime: 'Oliver'
  };

  state = {
    counter: 0
  };

  // Drugo
  componentWillMount() {
    console.log('componentWillMount');
  }

  // Treće i svaki re-render
  render() {
    console.log('render');
    return <button onClick={this.navigateToTodos}>click</button>;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
    if (this.state.counter !== nextState.counter) {
      console.log('broj se promijenio');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log('componentWillReceiveProps');
  // }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  increment = () => {
    let { counter } = this.state;
    this.setState({
      counter: ++counter
    });
  };

  navigateToTodos = () => {
    let { history } = this.props;
    history.push('/todos');
  };
}

// function LifecycleMethods() {
//   return <div />;
// }

// const LifecycleMethods = () => <div />;

// const LifecycleMethods = () => {
//   return <div />;
// };
