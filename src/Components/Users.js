import React, {useState} from 'react';
import PropTypes from 'prop-types';

function Users(props, userId, usersList) {

  const [userStatus, setUserStatus] = useState(false);
  
  const userNameFormat = (userId) => {
    console.log("users", props.usersList);
    //return false;
    let str = '';    
    let username = props.usersList && props.usersList.filter((user) => {      
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
    <span className={`user-name-circle float-right ${userStatus}`}>
    {userNameFormat(userId)}</span>    
  );  
}

Users.protoTypes = {
  usersList : PropTypes.array
}

export default Users;