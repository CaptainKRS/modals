import React from 'react'

const Modal = props => {

  const divStyle = {
    display: props.displayModal ? 'block' : 'none',
  }

  // const closeModal = (evt) => {
  //   evt.stopPropagation();
  //   props.closeModal()
  // }

  return(
    <div className="modal"
          onClick={() => props.closeModal()}
          style={divStyle} >
      <div className='modal-content'
      onClick={ e => e.stopPropagation() } >
        <span className='close'
        onClick={() => props.closeModal() }>&times;</span>
      </div>
    </div>
  )
}

export default Modal;
