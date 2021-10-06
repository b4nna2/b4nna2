import React, { Component, state } from 'react'
import { AiFillDelete } from "react-icons/ai"
import './addmodal.css'
import { Button } from '@material-ui/core'
import { DeleteModal } from './DeleteModal'

import { ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Input} from 'reactstrap'
import { GoCommentDiscussion } from 'react-icons/go'

// import Modal from 'react-modal';

class AddModal  extends Component {
    constructor (props) {
      super(props)
      this.state = { isModalOpen: false }
    }

    render() {
      return (
        <div className="formModal1">
         
         <DeleteModal /> <Button  onClick={() => this.openModal()}><GoCommentDiscussion /></Button>
          <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <ModalBody>
            <p className="text-center"> Reply Here! </p> 
            <br />
           
            <FormGroup>
              <Input type='text' id='comments' placeholder='Comment' />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
           
            <Button color='primary' >
              Submit
            </Button>{' '}
            <Button color='primary'  onClick={() => this.closeModal()}>
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
          <div className="modal3"  >
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

export  {AddModal, Modal}
