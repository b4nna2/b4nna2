// import './App.css';
import { Fragment, useEffect, useState} from 'react'
import { Row, Col, CardBody, CardText } from 'reactstrap'
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import country from '@src/assets/images/icons/country.jpg'
import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import avatar2 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import avatar3 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import { MoreVertical, Edit, Trash } from 'react-feather'
import { Link } from 'react-router-dom'
import Card from '@components/card-snippet'
import { AiFillDelete } from 'react-icons/ai'
import { Button } from '@material-ui/core'


// import React, { useEffect, useState } from 'react'
function App() {
  const [users, setUser] = useState([])
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [userId,setUserId]=useState(null)

  useEffect(() => {
    getUsers();
  }, [])
  function getUsers() {
    // console.log("hii")
    fetch("http://b6b8-3-108-92-91.ngrok.io/api/users").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp)
        setName(resp[0].Name)
        setMobile(resp[0].Mobile)
        setEmail(resp[0].email)
        setUserId(resp[0]._id)
      })
    })
  }

  function deleteUser(_id) {
    fetch(`http://b6b8-3-108-92-91.ngrok.io/api/users/${_id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  function selectUser(_id)
  {
    let item=this.users[_id-1];
    console.log("hii")
    setName(item.Name)
        setEmail(item.email)
        setMobile(item.Mobile);
        setUserId(item._id)
  }
  function updateUser()
  {console.log("noooo")
    let item={Name,Mobile,email}
    console.warn("item",item)
    fetch(`http://b6b8-3-108-92-91.ngrok.io/api/user/${userId}`, {
      method: 'PATCH',
      headers:{
        'Accept':'*/*',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  return (
    <Fragment>
    
      <Row>
        
      
        <Col sm='12'>
          <Card title='USERS' >
         
          <Table hover responsive>
     
          <div>
      <input type="text" value={Name} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br />
        <input type="text" value={Mobile}  onChange={(e)=>{setMobile(e.target.value)}} /> <br /><br />
        <button onClick={updateUser} >Update User</button>  
      </div>
         
          </Table>
          </Card>
        </Col>
        
      </Row>
    </Fragment>
        
  );
  
}
export default App;
