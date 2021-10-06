import React from 'react'
import { useHistory } from "react-router-dom"
import { BsPencilSquare } from 'react-icons/bs'

function Edit() {
  const history = useHistory()
  
  const handleRoute = () => { 
    history.push("./email/sidebar1.js")
  }
  
  return (                     
          <BsPencilSquare
            onClick={handleRoute}>
              About
          </BsPencilSquare>
  )
}
export { Edit }