import React from 'react'
import './CustomModal.scss'

/**
 * @param {boolean} isDisplayed
 * @param {function} onCloseModal
 * @param {JSX.Element} content
 * @returns {JSX.Element}
 * @description CustomModal 
 */
const CustomModal = ({ isDisplayed = false, onCloseModal, content }) => {
  return (
    <div
      className="custom-modal"
      style={{ display: isDisplayed ? 'block' : 'none' }}
    >
      <div className="custom-modal-main">
        <div onClick={onCloseModal} className="custom-modal-btn-close">
          X
        </div>
        <div className="custom-modal-content">{content}</div>
      </div>
    </div>
  )
}

export default CustomModal
