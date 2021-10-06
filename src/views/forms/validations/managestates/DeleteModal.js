import React, { Component, state } from 'react'
import { AiFillDelete } from "react-icons/ai"
import './modal.css'
import { Button } from '@material-ui/core'


// import Modal from 'react-modal';

class DeleteModal  extends Component {
    constructor (props) {
      super(props)
      this.state = { isModalOpen: false }
    }

    render() {
      return (
        <div>
          <Button onClick={() => this.openModal()}><AiFillDelete className="delete"/></Button>
          <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            <h3>Delete ?</h3>
            <p>Want to delete this item from database ?</p>
            <div className="buttons"><button className="yes btn-primary">Yes</button><button className="no btn-primary" onClick={() => this.closeModal()}>No</button></div>
          </Modal>
        </div>
      )
    }

    openModal() {
      this.setState({ isModalOpen: true })
    }

    closeModal() {
      this.setState({ isModalOpen: false })
    }
  }

  class Modal extends Component {
    render() {
      if (this.props.isOpen === false) return null

      return (
        <div>
          <div className="modal1"  >
            {this.props.children}
          </div>
          <div className="bg" onClick={e => this.close(e)}/>
        </div>
      )
    }

    close(e) {
      e.preventDefault()

      if (this.props.onClose) {
        this.props.onClose()
      }
    }
  }

export {DeleteModal, Modal}
