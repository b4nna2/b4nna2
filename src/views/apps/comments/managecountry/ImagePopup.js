import React, { Component, state } from 'react'
import { AiFillDelete } from "react-icons/ai"
import './modal.css'
import Image from '@src/views/apps/managecountry/country_image_Japan.jpg'


class ImagePopup  extends Component {
    constructor (props) {
      super(props)
      this.state = { isModalOpen: false }
    }
   
    render() {
      return (
        <>
         <a onClick={() => this.openModal()}><img src={Image} className="img2" /></a>
        
        
          <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
         <img src={Image}  className="modal-background" />
          </Modal>
  
        </>
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
          <div className="modal2"  >
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

export {ImagePopup, Modal}
