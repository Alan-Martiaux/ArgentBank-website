import React from "react";
import "./UserModal.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfil } from "../../redux/apiCall";
import { fetchUpdateUserName } from "../../redux/apiCall";

const UserModal = ({ isOpen, closeModal, children }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const firstName = useSelector((state) => state.user.user.firstName);
  const lastName = useSelector((state) => state.user.user.lastName);
  const username = useSelector((state) => state.user.user.userName);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const SetUsername = document.querySelector(".inputNewUserName");
    console.error(SetUsername.value);
    fetchUpdateUserName(token, SetUsername.value, dispatch, closeModal);
  };
  fetchUserProfil(token, dispatch);

  return (
    isOpen && (
      <div className="ModalUserContainer">
        <div className="modalUser">
          <h2>Edit user info :</h2>
          <div className="usermodal-input">
            <p>Surname</p>
            <input
              className="inputUserModal inputNewUserName"
              type="text"
              placeholder={username}
              required
            />
          </div>
          <div className="usermodal-input">
            {" "}
            <p>Firstname</p>
            <input
              className="inputUserModal"
              type="text"
              placeholder={firstName}
              disabled
            />
          </div>
          <div className="usermodal-input">
            {" "}
            <p>Last name</p>
            <input
              className="inputUserModal"
              type="text"
              placeholder={lastName}
              disabled
            />
          </div>
          <div id="errorMessage"></div>
          <div className="container-usermodal-button">
            <button className="close-usermodal-button" onClick={handleSubmit}>
              Save
            </button>
            <button className="close-usermodal-button" onClick={closeModal}>
              Cancel
            </button>{" "}
          </div>
        </div>
      </div>
    )
  );
};

export default UserModal;
