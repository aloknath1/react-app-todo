import React, { useState, useRef } from 'react';
import uuid from 'uuid';
import { Link  } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

function AddProject(props) {
  let history = useHistory();

  const initialState = { 'id': uuid.v4(),
  'title': '',
  'createdAt': Date(),
  'status': 'incomplete',
  'comments': '',
  }

  let [formData, setFormData] = useState(initialState);
  const {title, comments} = formData; 

  const onChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name] : e.target.value
    });
  }

  const handleAddProject = e =>  {
      e.preventDefault();
      let todos = [];
      if(formData.title.value === '')
      {
        alert('Title is required');
      }
      
      //adding to localstorage
      if(window.localStorage.getItem('todos')){
        todos = JSON.parse(window.localStorage.getItem('todos'));         
      }  
      formData.id = uuid.v4();
      todos.push(formData);
      console.log(formData);
      window.localStorage.setItem('todos', JSON.stringify(todos));
      history.push('/');

    }
    return (
      <div>
        <Link to={{ pathname: '/' }}>Back</Link>
        <h3>Add Todo</h3>        
        <form method="post" onSubmit={handleAddProject}>
          <div> 
              <label>Title</label>
              <input type="text" onChange={onChange} value={title} name="title" required />
          </div>
          <div>  
              <label>Comments</label>
              <textarea name="comments" onChange={onChange} rows="4" cols="15">
                {comments}
              </textarea>
          </div>
          <br/>
          <input type="submit" name="submit" value="Add" />          
        </form>
      </div>
    );  
}

AddProject.protoTypes = {
  addProject : PropTypes.func
}

export default AddProject;