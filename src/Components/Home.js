import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodos } from '../todos/todosSlice';
import Modal from './Modal';
import Todos from './Todos';

function Home() {
    let [projects, setProjects] = useState([]);
    let [isOpen, setIsOpen] = useState(false);
    //const projects1 = useSelector((state) => { return state.projects});
    const dispatch = useDispatch();
    const fetchData = async () => {
      let todosData = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
        .then((res) => res.json())
        .then((json) => json);
        setProjects(todosData.tickets);    
        dispatch(addTodos(todosData));
        console.log("todosData",todosData);    
    }

    const onClose = () => {
      setIsOpen(false);
    }
    useEffect(() => {
      setTimeout(() => {
        fetchData();     
      }, 1000);
      
    },[addTodos]); 

    return (
          <div className='kanban-board'> 
            <div className="kanban-board-title">Kanban Board</div>
           
            <div><button onClick={() => setIsOpen(true) }>Add Todo</button></div>
            {
              projects && ( <div className="kanban-board">
              <Todos todos={projects} users={projects.users} />           
            </div>)
            }
           
            {isOpen && <div id="overlay"><Modal onClose={onClose}/></div>}
          </div>
      );
}

export default Home;