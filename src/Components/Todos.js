import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function Todos(props) {
  let todoItems;  
  if(props.todos)
  {
      todoItems = props.todos.map(todo => {         
        return (<TodoItem key={todo.title} todo={todo} />);
      });
  }    
  return (
    <div className="todos"> 
      { todoItems }
    </div>
  );  
}

Todos.protoTypes = {
  todos : PropTypes.array
}

export default Todos;