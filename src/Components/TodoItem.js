import React, {useState} from 'react';
import PropTypes from 'prop-types';

function TodoItem(props, todo, users) {
  const [userStatus, setUserStatus] = useState(false);
  
  const userNameFormat = (userId) => {
    let str = '';    
    let username = props.users && props.users.filter((user) => {      
      return (user.id == userId)
    });
    (username.available) ? setUserStatus('available') : setUserStatus('not-available');      
    if(username.indexOf('') >= 0){
      username = username.split('');
      if(Array.isArray(username)){
        str += username[0] +" "+ username[1];
      }      
    }else{
      str = username;
    }
    console.log("str", str);
    return str;
  }
  
  return (
    <div className="box ProjectItem">
        <p className="id">{props.todo.id} 
          {/* <span className={`user-name-circle float-right ${userStatus}`}>
          {userNameFormat(props.todo.userId)}</span>        */}
        </p>
        <p className="title">{props.todo.title}</p> 
        {
          (props.todo.tag) ? <p className="tag"><span className='circle feature-circle'></span>{props.todo.tag}</p> : null
        }          
    </div>
  );
}

TodoItem.protoTypes = {
  todo : PropTypes.object,
  users : PropTypes.object,
}

export default TodoItem;