// import PropTypes from "prop-types";
import "../../css/main.css";
import Arraytransaction from "../../data/transaction.json";
import Transaction from "../../components/transaction/transaction";
//import { Owner } from "../../components/username/username";
import { useState } from "react";
import UserModal from "../../components/modal/UserModal";


function User() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);   
  };

  const closeModal = () => {
    setModalIsOpen(false);
 
  };

  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          <h1 >
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button onClick={openModal} className="edit-button">Edit Name</button>
          <UserModal isOpen={modalIsOpen} closeModal={closeModal}/>
        </div>
  
        <h2 className="sr-only">Accounts</h2>
        <>
        {Arraytransaction.map((transaction, index) => (
          <Transaction
            key={index}
            title={transaction.title}
            amount={transaction.amount}
            description={transaction.description}
            
          />
        ))}
      </>
      </main>
    </>
  );
}

export default User
