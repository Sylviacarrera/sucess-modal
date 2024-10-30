import './App.scss'
import { useState } from 'react'
import Modal from '../lib'

const App = () => {
  const [modalIsDisplayed, setModalIsDisplayed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setModalIsDisplayed(true)
  }

  return (
    <section className="container">
      <h1 className="title">Success Modal</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="submitButton">Cliquez sur le bouton :</label>
        <button id="submitButton" className="submit-button">Click me</button>
      </form>
      <Modal
        isDisplayed={modalIsDisplayed}
        onCloseModal={() => setModalIsDisplayed(false)}
        content={
          <div id="confirmation" className="modal">
            <p className="modal-text">Employé créé avec succès !</p>
            <p className="modal-subtext">Cliquez sur la croix pour fermer.</p>
          </div>
        }
      />
    </section>
  );
};

export default App
