import React, {useState, memo, useCallback} from 'react';
import PropTypes from 'prop-types';

function TodoItem({todo, usersList}) {  
  let [userStatus, setUserStatus] = useState(false);
  //console.log("TodoItem",todo);

  const userNameFormat = useCallback((userId) => {
    let str = '';    
    let username = usersList && usersList.filter((user) => {  
       return (user.id == userId);
    });
    console.log("username", username[0].name);  
    setUserStatus(username[0].available);
   // console.log("userStatus", userStatus);  
    return username[0].name;
  },[]);
  
  return (
    <div className="box ProjectItem">
        <div  className="id">{todo.id} 
          {/* <p className={`user-name-circle float-right ${(userStatus) ? ' available' : ' not-available' }`}>
          <span>{userNameFormat(todo.userId)}</span></p>              */}
        </div>
        <p className="title">{todo.title}</p> 
        {
          (todo.tag) ? <p className="tag"><span className='circle feature-circle'></span>{todo.tag}</p> : null
        }          
    </div>
  );
}

TodoItem.protoTypes = {
  todo : PropTypes.object,
  usersList : PropTypes.object,
}

export default memo(TodoItem);