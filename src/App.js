import React, { useState, useEffect } from 'react';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import './App.css';

function App() {
  let [projects, setProjects] = useState([]);

  useEffect(() => {
    if(window.localStorage.getItem('todos')){
      let todos = JSON.parse(window.localStorage.getItem('todos'));    
      setProjects(todos);
    }  
  },[projects]);

  const handleAddProject = (project) => {    
    console.log("add project");    
    setProjects([...projects, projects]);
    console.log(projects);
  }
    return (
      <div className="App">       
        <AddProject addProject={handleAddProject.bind(this)} />     
        <div className='legend'>
        <p><span id="circle" className='complete'>&nbsp;</span>Complete</p>
        <p><span id="circle" className='incomplete'></span>Incomplete</p>
        </div>
        <Todos todos={projects} />
      </div>
    );
  
}

export default App;
