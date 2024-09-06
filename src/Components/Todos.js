import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function Todos(props) {
  let backlogTodoItems, inProgressTodoItems, TodoItems, doneTodoItems, cancelledTodoItems;  

  let usersList = props.todos.users;
  //console.log("users", usersList);  
  if(props.todos.tickets)
  {
      backlogTodoItems = props.todos.tickets.map(todo => {   
        if(todo.status === 'Backlog'){
          return (<TodoItem key={todo.id} todo={todo} usersList={usersList} />);
        }        
      });

      inProgressTodoItems = props.todos.tickets.map(todo => {     
        if(todo.status === 'In progress'){    
          return (<TodoItem key={todo.id} todo={todo} usersList={usersList} />);
        }
      });

      TodoItems = props.todos.tickets.map(todo => {  
        if(todo.status === 'Todo'){        
          return (<TodoItem key={todo.id} todo={todo} usersList={usersList} />);
        }
      });

      doneTodoItems = props.todos.tickets.map(todo => {  
        if(todo.status === 'Done'){        
          return (<TodoItem key={todo.id} todo={todo} usersList={usersList} />);
        }
      });

      cancelledTodoItems = props.todos.tickets.map(todo => {  
        if(todo.status === 'cancelled'){        
          return (<TodoItem key={todo.id} todo={todo} usersList={usersList} />);
        }
      });


  }    
  return (
    <>
    <div className="todosLabel"> 
      <div className="backlog-label">Backlog</div> 
      <div className="todo-label">Todo</div> 
      <div className="in-progress-label">inProgress</div>     
      <div className="done-label">Done</div>
      <div className="cancelled-label">Cancelled</div>
    </div>
    <div className="todos"> 
      <div className="backlog">{ backlogTodoItems }</div> 
      <div className="todo">{ TodoItems }</div> 
      <div className="in-progress">{ inProgressTodoItems }</div>     
      <div className="done">{ doneTodoItems }</div>
      <div className="cancelled">{ cancelledTodoItems }</div>
    </div>
    </>
  );  
}

Todos.protoTypes = {
  todos : PropTypes.array
}

export default Todos;