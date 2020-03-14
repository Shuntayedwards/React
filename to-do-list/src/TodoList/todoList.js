import React from "react";

class TodoList extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        description: "Learn React"
      },
      {
        id: 2,
        description: "Learn Shogigs"
      },
      {
        id: 3,
        description: "Write first PR "
      }
    ]
  };

  render() {
    const items = this.state.todos.map(currentTodo => (
      <li>{currentTodo.description}</li>
    ));
    return <div>{items}</div>;
  }
}

export default TodoList;
