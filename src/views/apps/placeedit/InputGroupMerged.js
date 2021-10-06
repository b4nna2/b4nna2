import { Fragment } from 'react'
import { Search } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import { InputGroup, InputGroupAddon, Input, InputGroupText } from 'reactstrap'
import Button from 'reactstrap/lib/Button'

const InputGroupMerged = () => {
  return (
    <Fragment>
      <InputGroup className='input-group-merge mb-2'>
       <Input type="text" placeholder='Place' />
      </InputGroup>
      {/* <InputPasswordToggle className='input-group-merge mb-2' label='Password' htmlFor='merge-password' /> */}
      <InputGroup className='input-group-merge mb-2'>
        <Input placeholder='State' />
      </InputGroup>
      <InputGroup className='input-group-merge mb-2'>
        <Input placeholder='Country' />
      </InputGroup>
      <InputGroup className='input-group-merge mb-2'>
        <Input placeholder="Latitude" />
        
        <Input placeholder="Longitude" />
       
      </InputGroup>
      <InputGroup className='input-group-merge mb-2'>
        <Input placeholder="Enter Image 1 url (Thumbnai)" />       
      </InputGroup>
      <InputGroup className='input-group-merge mb-2'>
        <Input placeholder="Enter Image 2 url (Thumbnai)" />       
      </InputGroup>
      <InputGroup className='input-group-merge mb-2'>
        <Input placeholder="Image 3 url (Thumbnai)" />       
      </InputGroup>
      
      <InputGroup className='input-group-merge'>
     
        <Input type='textarea' placeholder="Enter Discription" />
      </InputGroup>
      <br></br>
      <Button variant="contained" color="primary" >
Upload Place Details</Button>
    </Fragment>
  )
}

export default InputGroupMerged
