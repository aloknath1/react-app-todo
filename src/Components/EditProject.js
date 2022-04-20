import React, { useState, useEffect, useRef } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import { useHistory, useParams } from "react-router-dom";

function EditProject(props) {
  const history = useHistory();
  const { todoId } = useParams();
  const initialState = { 'id': uuid.v4(),
  'title': '',
  'createdAt': Date(),
  'status': 'incomplete',
  'comments': '',
  }

  let [formData, setFormData] = useState(initialState);
  
  useEffect(() => {
     getData();
  },[]);
 
  const getData = () => {
    if(window.localStorage.getItem('todos')){
      let todos = JSON.parse(window.localStorage.getItem('todos'));    
      let index = todos.findIndex(x => x.id == todoId);      
      setFormData(todos[index]);       
    }   
  };

  const onChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name] : e.target.value
    });
  }

  const handleEditProject = e =>  {
      e.preventDefault();
      let todos = [];
      if(formData.title.value === '')
      {
        alert('Title is required');
      }
      
      //edit to localstorage
      if(window.localStorage.getItem('todos')){
        todos = JSON.parse(window.localStorage.getItem('todos'));   
        let index = todos.findIndex(x => x.id == todoId);      
        todos[index] = formData;
      }  
      
      window.localStorage.setItem('todos', JSON.stringify(todos));
      history.push('/');
    }

    let {title, comments, status} = formData;
    
    return (
      <div>
        <h3>Edit Todo</h3>        
        <form method="post" onSubmit={handleEditProject}>
          <input type="hidden" name="_id" value={todoId} />
          <div> 
              <label>Title</label>
              <input type="text" onChange={onChange} value={title} name="title" required />
          </div>
          <div>  
              <label>Comments</label>
              <textarea name="comments" onChange={onChange} rows="4" cols="15" value={comments}>
                {comments}
              </textarea>
          </div>
          <div>  
              <label>Status</label>
              <select name="status" onChange={onChange}>
                <option value="complete" selected = {status == 'complete' ? 'selected' : ''}>Complete</option>
                <option value="incomplete" selected = {status == 'incomplete' ? 'selected' : ''}>Incomplete</option>
              </select>
          </div>
          <br/>
          <input type="submit" name="submit" value="Edit" />          
        </form>
      </div>
    );  
}

EditProject.protoTypes = {
  editProject : PropTypes.func
}

export default EditProject;