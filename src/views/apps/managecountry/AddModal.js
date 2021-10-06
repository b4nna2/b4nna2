import React, { Component, state } from 'react'
import { AiFillDelete } from "react-icons/ai"
import './modal2.css'
import Button from 'reactstrap/lib/Button'
import { ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Input } from 'reactstrap'

// import Modal from 'react-modal';

class AddModal  extends Component {
    constructor (props) {
      super(props)
      this.state = { isModalOpen: false }
    }

    render() {
      return (
        <div className="formModal text-right">
          <Button color="primary" onClick={() => this.openModal()}>Add Place</Button>
          <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <ModalBody>
            <h3 className="text-center"> Add Country </h3> 
            <br />
            <br />
            <FormGroup>
              <Input type='text' id='Thumbnailurl' placeholder='Thumbnail url' />
            </FormGroup>
            <FormGroup>
              <Input type='text' id='Statename' placeholder='State name' />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' >
              Add Country
            </Button>{' '}
            <Button color='primary' onClick={() => this.closeModal()} >
              Cancel
            </Button>{' '}
          </ModalFooter>
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

export {AddModal, Modal}
