# Modal_Sucess

A modal component using react

<a href="https://www.npmjs.com/package/sucess-modal-react"><img alt="npm" src="https://img.shields.io/npm/dw/sucess-modal-react"></a>
<a href="https://www.npmjs.com/package/sucess-modal-react"><img alt="npm" src="https://img.shields.io/npm/v/sucess-modal-react"></a>
<a href="https://www.npmjs.com/package/sucess-modal-react"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/sucess-modal-react"></a>
<a href="https://www.npmjs.com/package/sucess-modal-react">
<img alt="Maintenance Status" src="https://img.shields.io/badge/maintenance-active-green.svg" />

</a>

## Installation

```
npm install sucess-modal
```

## Example

```js
import Modal from 'success-modal'
import { useState } from 'react'
const Example = () => {
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
  )
}
export default Example
```# sucess-modal
