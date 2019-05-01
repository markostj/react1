import React from 'react';
import { Id } from './components';
import {Title} from './components';

export class TodosDetails extends React.Component {
  state = {
    todo: undefined,
    shared: undefined
  };

  componentWillUpdate(nextProps) {
    const { match, todos } = this.props;
    if (!todos && nextProps.todos) {
      if (match.params && match.params.id) {
        const todo = nextProps.todos.find(
          todo => todo.id === parseInt(match.params.id)
        );

        this.setState({
          todo
        });
      }
    }
  }

  updateShared = event => {
    const { value } = event.currentTarget;
    this.setState({ shared: value });
  };

  render() {
    const { todo, shared } = this.state;
    if (!todo) {
      return <div className="loader" />;
    }

    return (
      <div>
        <Id id={todo.id} shared={shared} updateShared={this.updateShared} />
        <p>UserId: {todo.userId}</p>
        <p>{todo.completed ? 'completed' : 'not-completed'}</p>
      </div>
    );
  }
}
