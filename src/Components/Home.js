import React, { useState, useEffect, Fragment } from 'react';
import { Link  } from 'react-router-dom';
import Todos from './Todos';

function Home() {
    let [projects, setProjects] = useState([]);

    useEffect(() => {
      if(window.localStorage.getItem('todos')){
        let todos = JSON.parse(window.localStorage.getItem('todos'));    
        setProjects(todos);
      }  
    },[projects]);
  
    const handleAddProject = (project) => {         
      setProjects([...projects, projects]);    
    }
    return (
          <Fragment>
            <Link to={{ pathname: '/add' }}>Add New Todo</Link>
            <div className='legend'>
                <p><span id="circle" className='complete'>&nbsp;</span>Complete</p>
                <p><span id="circle" className='incomplete'></span>Incomplete</p>
            </div>
            <Todos todos={projects} />
          </Fragment>
      );
}

export default Home;