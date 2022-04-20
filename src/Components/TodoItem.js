import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {

  const deleteProject = (id) => {
    //delete functionality
    if(window.localStorage.getItem('todos')){
      let todos = JSON.parse(window.localStorage.getItem('todos'));        
      let index = todos.findIndex(x => x.id == id);
      todos.splice(index, 1);    
      window.localStorage.setItem('todos', JSON.stringify(todos));
    }  
  }

  //date time format
  const formatDateTime = (datetime) => {
    var date = new Date(datetime);   
    var n = date.toDateString();
    var time = date.toLocaleTimeString();
    return n + ',' + time;
  }

  return (
    <div className="box ProjectItem">
        <p><strong>{props.todo.title}</strong><span id="circle" className={`${props.todo.status === 'incomplete' ? "incomplete" : "complete"}`}></span></p>      
        <p className="created">{formatDateTime(props.todo.createdAt)}</p>
        <p className="category">{props.todo.comments}</p>
        <p style={{textAlign:'center'}}><button onClick={deleteProject.bind(this,props.todo.id)}>Edit</button> &nbsp; <button onClick={deleteProject.bind(this,props.todo.id)}>Delete</button></p>
    </div>
  );
}

TodoItem.protoTypes = {
  todo : PropTypes.object,
  onDelete : PropTypes.func
}

export default TodoItem;