import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function Todos({todos, users}) {  
  return (
    <>
    <div className="todosLabel"> 
      <div className="backlog-label">Backlog</div> 
      <div className="todo-label">Todo</div> 
      <div className="in-progress-label">In Progress</div>     
      <div className="completed-label">Completed</div>     
    </div>
    <div className="todos"> 
      <div className="backlog">
        { 
          todos.tickets && todos.tickets.map(todo => {   
            if(todo.status === 'Backlog'){
              return (<TodoItem key={todo.id} todo={todo} usersList={users} />);              
            }        
          }) 
        }
      </div> 
      <div className="todo">
       { 
          todos.tickets && todos.tickets.map(todo => {   
            if(todo.status === 'Todo'){
              return (<TodoItem key={todo.id} todo={todo} usersList={users} />);              
            }        
          }) 
        }
      </div> 
      <div className="in-progress">{ 
          todos.tickets && todos.tickets.map(todo => {   
            if(todo.status === 'In progress'){
              return (<TodoItem key={todo.id} todo={todo} usersList={users} />);             
            }        
          }) 
        }
        </div>   
        <div className="completed">
       { 
          todos.tickets && todos.tickets.map(todo => {   
            if(todo.status === 'Completed'){
              return (<TodoItem key={todo.id} todo={todo} usersList={users} />);              
            }        
          }) 
        }
      </div>       
    </div>
    </>
  );  
}

Todos.protoTypes = {
  todos : PropTypes.array
}

export default Todos;