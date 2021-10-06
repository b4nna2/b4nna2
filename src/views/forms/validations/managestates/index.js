import { MoreVertical, Edit, Trash } from 'react-feather'
import { Link } from 'react-router-dom'
import Card from '@components/card-snippet'
import { getUsers, deleteUser } from './Service/api';
import  EditUser  from './Component/EditUser';
import  AddUser  from './Component/AddUser';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Button } from '@material-ui/core'
import { AiFillDelete } from 'react-icons/ai'
import { AddModal } from './AddModal'
import CustomInput from 'reactstrap/lib/CustomInput'
import { Fragment, useEffect, useState} from 'react'
import { Row, Col, CardBody, CardText } from 'reactstrap'
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import Image from '@src/views/apps/managecountry/country_image_Japan.jpg'
import Export from './Export';
import Input from 'reactstrap/lib/Input';


const refreshPage = ()=>{
  window.location.reload();
}
// function App() {
  const AllUsers = () => {

  const [users, setUser] = useState([])
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Image, setImage] = useState("");
  const [userId,setUserId]=useState(null)

  useEffect(() => {
    getAllUsers();
}, []);
const deleteUserData = async (id) => {
  await deleteUser(id);
  getAllUsers();
}

const getAllUsers = async () => {
  let response = await getUsers();
  setUser(response.data);
}
  // function getUsers() {
  //   // console.log("hii")
  //   fetch("http://192.168.1.52:5000/api/state").then((result) => {
  //     result.json().then((resp) => {
  //       // console.warn(resp)
  //       setUser(resp)
  //       setName(resp.placeName)
  //       setMobile(resp.placeLocation)
  //       setEmail(resp.StartDate)
  //       setEmail(resp.EndDate)
  //       setImage(resp.image)
  //       setUserId(resp._id)
  //     })
  //   })
  // }

  // function deleteUser(_id) {
  //   fetch(`http://192.168.1.52:5000/api/state/${_id}`, {
  //     method: 'DELETE'
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       console.warn(resp)
  //       getUsers()
  //     })
  //   })
  // }
  // function selectUser(_id)
  // {console.log("hii")
  //   let item=users[_id-1];
    
  //       setName(item.placeName)
  //       setMobile(item.placeLocation)
  //       setEmail(item.StartDate)
  //       setEnd(item.EndDate)
  //       setImage(item.image)

  //       setUserId(item._id)
  // }
  // function updateUser()
  // {
  //   let item={Name,Mobile,email}
  //   console.warn("item",item)
  //   fetch(`http://192.168.1.52:5000/api/state/${userId}`, {
  //     method: 'PATCH',
  //     headers:{
  //       'Accept':'*/*',
  //       'Content-Type':'application/json'
  //     },
  //     body:JSON.stringify(item)
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       console.warn(resp)
  //       getUsers()
  //     })
  //   })
  // }
  
  return (
    
    <Fragment>
      <div className="]">
       <Export  />
          <AddModal />
          </div>
      
            <BrowserRouter>
     
     <Switch>
       
       {/* <Route exact path="/all" component={AllUsers} />
       <Route exact path="/add" component={AddUser} /> */}
       <Route exact path="/forms/state/:id" component={EditUser} />
       
     </Switch>
   </BrowserRouter>

      <Row>
        

        <Col sm='12'>
          <Card >
          <p className="card-title"> Manage State       <Input type="text" placeholder="Search"  className="search"/>
</p>

         
          <Table hover responsive>
      <thead>

        <tr>
        <td></td>
          <td className="darklist">State</td>
          <td className="darklist">Country</td>
          <td className="darklist">Published</td>
          <td className="darklist">Featured</td>
          <td className="darklist">Actions</td>
        </tr>
        {
          
          users.map((user) =>
             
            <tr key={user.id}>
              <td className="darklist"><img className="stateimage"  src={user.image}/></td>
              <td className="darklist">{user.StateName }</td>
              <td className="darklist">{user.placeLocation}</td>
                <td className="darklist"> <CustomInput
              className='custom-control-success'
              type='switch'
              id=''
              name=''
              inline
              defaultChecked
            /></td>
                <td className="darklist"><CustomInput
            type='switch'
            id='exampleCustomSwitch1'
            name='customSwitch1'
            // label='Toggle this switch element'
            inline
          /></td>
                <td className="darklist"> 
                   {/* <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                <Link to='./view'> <Edit className='mr-50' size={15} /> <span className='align-middle' onClick={() => selectUser(item._id)}>Edit</span></Link>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='mr-50' size={15} /> <span className='align-middle' onClick={() => deleteUser(item._id)}>Delete</span>
                  
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
            <button className="edit-button" >
               <Link to={`../../apps/editstate/${user._id}`}> <Edit className='' size={15} onClick={() => getUsers(user._id)} /></Link></button>
               <button className="delete-button" onClick={refreshPage}>
                <AiFillDelete className=' delete' size={15}  onClick={() => deleteUser(user._id)}/></button>
            </td>
               

              </tr>
            )
          }
      </thead>
      <tbody>
      
      </tbody>
    </Table>
          </Card>
        </Col>
        
      </Row>
      <Row>
      {/* <Col sm='12'>
          <TableServerSide />
        </Col> */}
         <Col className="text-right">
         
         {/* <button className="pagination-sign">Prev.</button> */}
         <button className="pagination-button active3">1</button>
         <Link to="/">
         <button className="pagination-button">2</button>
         </Link>
         <Link to="/">
         <button className="pagination-button">3</button>
         </Link>
         <Link to="/">
         <button className="pagination-sign">Next</button>
         </Link>
         </Col>
      </Row>

    </Fragment>
  )
 }

 export default AllUsers
