
import React, { Component, state } from 'react'
import { AiFillDelete } from "react-icons/ai"
import { Button } from '@material-ui/core'
import './modal1.css'


// import Modal from 'react-modal';

class DeleteModal  extends Component {
    constructor (props) {
      super(props)
      this.state = { isModalOpen: false }
    }

    render() {
      return (
        <div className="text-right">
          <Button onClick={() => this.openModal()}><AiFillDelete /></Button>
          <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            <h3 className="text-left">Delete ?</h3>
            <p className="text-left">Want to delete this item from database ?</p>
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
