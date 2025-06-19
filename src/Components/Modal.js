import React from 'react';
import AddProject from './AddProject';
function Modal({onClose}) {


    return (
    <>
    <div className='popup-modal'>
        <div><button onClick={onClose}>X</button></div>
        <AddProject />
    </div>
    </>
  )
}

export default Modal
