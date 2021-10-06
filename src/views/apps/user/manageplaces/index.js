// import { Fragment, useEffect, useState} from 'react'
// import { Row, Col, CardBody, CardText } from 'reactstrap'
// import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
// import country from '@src/assets/images/icons/country.jpg'
// import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
// import avatar2 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
// import avatar3 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
// import { MoreVertical, Edit, Trash } from 'react-feather'
// import { Link } from 'react-router-dom'
// import Card from '@components/card-snippet'
// import { Button } from '@material-ui/core'
// import { DeleteModal } from './DeleteModal'
// import { AiFillDelete } from 'react-icons/ai'
// import CustomInput from 'reactstrap/lib/CustomInput'
// import { AddModal } from './AddModal'
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import  EditUser  from './Component/EditUser';
// import { getUsers, deleteUser } from './Service/api';
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
import { getUsers, deleteUser } from './Service/api';
import  EditUser  from './Component/EditUser';
import  AddUser  from './Component/AddUser';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Button } from '@material-ui/core'
import { AiFillDelete } from 'react-icons/ai'
import { AddModal } from './AddModal'
import CustomInput from 'reactstrap/lib/CustomInput'
import Export from './Export'
import Input from 'reactstrap/lib/Input'

 




const refreshPage = ()=>{
  window.location.reload();
}
// function App() {
  const AllUsers = () => {
  const [users, setUser] = useState([])
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [End, setEnd] = useState("");
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
       <Route exact path="/apps/manage/:id" component={EditUser} />
       
     </Switch>
   </BrowserRouter>

      <Row>
        
      
        <Col sm='12'>
          <Card  >
          <p className="card-title"> Manage Place           <Input type="text" placeholder="Search"  className="search"/>
</p>

          <Table hover responsive>
      <thead>

        <tr>
        <td></td>
          <td className="darklist">Place</td>
          <td className="darklist">State</td>
          <td className="darklist">Country</td>
          <td className="darklist">Published</td>
          <td className="darklist">Featured</td>
          <td  className="darklist">Actions</td>
        </tr>
        {
            users.map((user) =>
              <tr key={user.id}>
                <td className="darklist"><img className="stateimage"  src={user.image}/></td>
                <td className="darklist">{user.placeName}</td>
                <td className="darklist">{user.StateName}</td>
                <td className="darklist">{user.placeLocation}</td>
                <td className="darklist"> <CustomInput
              className='custom-control-success'
              type='switch'
              id='success11'
              name='success11'
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
            <Link to={`../edit/${user._id}`}> <Edit className='' size={15} onClick={() => getUsers(user._id)}/></Link></button>
            <button className="delete-button" onClick={refreshPage}>
             <AiFillDelete className=' delete' size={15}  onClick={() => deleteUser(user._id)}/></button>
            </td>
               

              </tr>
            )
          }
      </thead>
      {/* <tbody>
      
      </tbody> */}
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
