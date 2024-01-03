import React from 'react';
import "./UserModal.css"


const UserModal =  ({ isOpen, closeModal, children }) => {
    return (
      isOpen && (
        <div className='ModalUserContainer'>
          <div className="modalUser">
            <h2>Edit user info :</h2>
            <div className='usermodal-input'><p>Surname</p><input className="inputUserModal" type='text' placeholder="Ecrire ici" required/></div>
            <div className='usermodal-input'> <p>Firstname</p><input className="inputUserModal" type='text' placeholder="First Name" disabled/></div>
            <div className='usermodal-input'> <p>Last name</p><input className="inputUserModal" type='text' placeholder="Last Name" disabled/></div>
            <div className='container-usermodal-button'><button className="close-usermodal-button" onClick={closeModal}> 
              Save
            </button>
            <button className="close-usermodal-button" onClick={closeModal}> 
              Cancel
            </button> </div>
          
          </div>
       </div>
      )
    );
  };

export default UserModal;