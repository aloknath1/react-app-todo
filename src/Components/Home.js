import React, { useState, useEffect, Fragment } from 'react';
import Todos from './Todos';

function Home() {
    let [projects, setProjects] = useState([]);

    const fetchData = async () => {
      let todosData = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
        .then((res) => res.json())
        .then((json) => json);
        setProjects(todosData);        
    }

    useEffect(() => {
      fetchData();
    },[]); 

    return (
          <Fragment> 
            <div className="kanban-board-title">Kanban Board</div>
            <div className="kanban-board">
              <Todos todos={projects} />           
            </div>
          </Fragment>
      );
}

export default Home;