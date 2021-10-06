import React from 'react'
import { useHistory } from "react-router-dom"
import { MdInsertComment } from 'react-icons/md'

function Comments() {
  const history = useHistory()
  
  const handleRoute = () => { 
    history.push("./email/sidebar1.js")
  }
  
  return (                     
          <MdInsertComment
            onClick={handleRoute}>
              About
          </MdInsertComment>
  )
}
export { Comments }