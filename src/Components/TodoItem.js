import React, {useState} from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {  
  let [userStatus, setUserStatus] = useState(false);

  const userNameFormat = (userId) => {
    let str = '';    
    let username = props.usersList && props.usersList.filter((user) => {  
       return (user.id == userId);
    });
   
    setUserStatus(username[0].available);
    console.log("userStatus", userStatus);
    if(username[0].name.trim().indexOf('') >= 0){
      username = username[0].name.trim().split('');
      if(Array.isArray(username)){
        str += username[0].charAt(0) +" "+ username[1].charAt(0);
      }      
    }else{
      return username[0].name.charAt(0);
    }
     
    return str;
  }
  
  return (
    <div className="box ProjectItem">
        <div className="id">{props.todo.id} 
          <p className={`user-name-circle float-right ${(userStatus) ? ' available' : ' not-available' }`}>
          <span>{userNameFormat(props.todo.userId)}</span></p>       
        </div>
        <p className="title">{props.todo.title}</p> 
        {
          (props.todo.tag) ? <p className="tag"><span className='circle feature-circle'></span>{props.todo.tag}</p> : null
        }          
    </div>
  );
}

TodoItem.protoTypes = {
  todo : PropTypes.object,
  usersList : PropTypes.object,
}

export default TodoItem;