// ** React Imports
import { useState, useEffect } from 'react'
// import Axios from 'axios'
// ** Custom Components
import Avatar from '@components/avatar'


// ** Third Party Components
import { Lock, Edit, Trash2 } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput } from 'reactstrap'
import axios from "axios"
const handleSubmit = (data) => {
  data.preventDefault()
  // console.log("Form Data : ", data)
  //  axios.get('http://localhost:3000/task/tasks').then((response) => {
  //     console.log(response.data)
  //   }
  //   )
  //   .catch(function (error) {
  //     console.log(error.toJSON())
  //   }
  //   )
  const formData = new FormData(data.target)
  const postData = {
    description: formData.get("text"),
    placeLocation:formData.get("location"),
    placeName: formData.get("name")
    // image:formData.get("changeImg")
      
}
const imagefile = document.querySelector('#changeImg')
postData.image =  imagefile.files[0]

console.log("postData:", postData)
axios.post('http://b6b8-3-108-92-91.ngrok.io/api/manage', postData)
  .then(function (response) {
    console.log("Success :", response)
  }) 
  .catch(function (error) {
    console.log("Failed : ", error)
  })
}

const UserAccountTab = ({ selectedUser }) => {
  // ** States
  const [img, setImg] = useState(null)

  // ** Function to change user image
  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setImg(reader.result)

    }
    reader.readAsDataURL(files[0])
    console.log({reader, files, target: e.target})
  
  }

  // ** Update user image on mount or change
  useEffect(() => {
    if (selectedUser !== null) {
      if (selectedUser.avatar.length) {
        return setImg(selectedUser.avatar)
      } else {
        return setImg(null)
      }
    }
  }, [selectedUser])

  // ** Renders User
  const renderUserAvatar = () => {
    if (img === null) {
      const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
      return (
        <Avatar
          initials
          color={color}
          className='rounded mr-2 my-25'
          content={selectedUser.fullName}
          contentStyles={{
            borderRadius: 0,
            fontSize: 'calc(36px)',
            width: '100%',
            height: '100%'
          }}
          style={{
            height: '90px',
            width: '90px'
          }}
        />
      )
    } else {
      return (
        <img
          className='user-avatar rounded mr-2 my-25 cursor-pointer'
          src={img}
          alt='user profile avatar'
          height='90'
          width='90'
        />
      )
    }
  }

  return (
    <Row>
      <Col sm='12'>
        <Media className='mb-2'>
          {renderUserAvatar()}
          <Media className='mt-50' body>
            <h5>{selectedUser.fullName} </h5>
            <div className='d-flex flex-wrap mt-1 px-0'>
              <Button.Ripple id='change-img' tag={Label} className='mr-75 mb-0' color='primary'>
                <span className='d-none d-sm-block'>Upload Image</span>
                <span className='d-block d-sm-none'>
                  <Edit size={14} />
                </span>
                <input type='file' hidden id='changeImg' name="changeImg" onChange={onChange} accept='image/*' />
              </Button.Ripple>
              <Button.Ripple color='secondary' outline>
                <span className='d-none d-sm-block'>Remove Image</span>
                <span className='d-block d-sm-none'>
                  <Trash2 size={14} />
                </span>
              </Button.Ripple>
            </div>
          </Media>
        </Media>
      </Col>
      <Col sm='12'>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md='5' sm='12'>
              <FormGroup >
                <Label for='placename'>Place Name</Label>
                <Input type='text' id='name' placeholder='Text Here' name="name"
                //  defaultValue={selectedUser.username}
                 />
              </FormGroup>
            </Col>
            <Col md='5' sm='12'>
              <FormGroup>
                <Label for='location'>Place Location</Label>
                <Input type='text' id='location' placeholder='Text Here' name="location"
                //  defaultValue={selectedUser.fullName}
                  />
              </FormGroup>
            </Col>
            <Col md='5' sm='12'>
              <FormGroup>
                <Label for='description'>Description</Label>
                <Input type='text' id='text' placeholder='Text Here' name="text"
                //  defaultValue={selectedUser.email}
                  />
              </FormGroup>
            </Col>
            
            {/* <Col md='5' sm='12'>
            <FormGroup>
                <Label for='number'>Phone Number</Label>
                <Input type='number' id='number' placeholder='Phone Number' defaultValue={selectedUser.number} />
              </FormGroup>
            </Col>
            <Col md='5' sm='12'>
            <FormGroup>
                <Label for='dob'>Date of Birth</Label>
                <Input type='text' id='dob' placeholder='Date of Birth' defaultValue={selectedUser.dob} />
              </FormGroup>
            </Col>
            <Col md='5' sm='12'>
              <FormGroup>
                <Label for='address'>Address</Label>
                <Input
                  type='text'
                  id='address'
                  defaultValue={selectedUser.address}
                  placeholder='xyz area'
                />
              </FormGroup>
            </Col> */}
            {/* <Col sm='12'>
              <div className='permissions border mt-1'>
                <h5 className='py-1 mx-1 mb-0 font-medium-2'>
                  <Lock size={18} className='mr-25' />
                  <span className='align-middle'>Permissions</span>
                </h5>
                <Table borderless striped responsive>
                  <thead className='thead-light'>
                    <tr>
                      <th>Module</th>
                      <th>Read</th>
                      <th>Write</th>
                      <th>Create</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Admin</td>
                      <td>
                        <CustomInput type='checkbox' id='admin-1' label='' defaultChecked />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='admin-2' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='admin-3' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='admin-5' label='' />
                      </td>
                    </tr>
                    <tr>
                      <td>Staff</td>
                      <td>
                        <CustomInput type='checkbox' id='staff-1' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='staff-2' label='' defaultChecked />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='staff-3' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='staff-5' label='' />
                      </td>
                    </tr>
                    <tr>
                      <td>Author</td>
                      <td>
                        <CustomInput type='checkbox' id='author-1' label='' defaultChecked />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='author-2' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='author-3' label='' defaultChecked />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='author-5' label='' />
                      </td>
                    </tr>
                    <tr>
                      <td>Contributor</td>
                      <td>
                        <CustomInput type='checkbox' id='contributor-1' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='contributor-2' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='contributor-3' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='contributor-5' label='' />
                      </td>
                    </tr>
                    <tr>
                      <td>User</td>
                      <td>
                        <CustomInput type='checkbox' id='user-1' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='user-2' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='user-3' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='user-5' label='' defaultChecked />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col> */}
            
            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <h5>Featured</h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <CustomInput
              className='custom-control-success'
              type='switch'
              id='success'
              name='success'
              inline
              defaultChecked
            />
            
              {/* <Button color='secondary' outline>
                Reset
              </Button> */}
            </Col>
            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <h5>Published</h5>&nbsp;&nbsp;&nbsp;&nbsp;
            <CustomInput
              className='custom-control-primary'
              type='switch'
              id='success1'
              name='success1'
              inline
              defaultChecked
            />
            
              {/* <Button color='secondary' outline>
                Reset
              </Button> */}
            </Col>
            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary' >
                Save Changes
              </Button>
            
              {/* <Button color='secondary' outline>
                Reset
              </Button> */}
            </Col>
            
          </Row>
        </Form>
      </Col>
    </Row>
  )
}
export default UserAccountTab
