// import './App.css';
import { Fragment, useEffect, useState} from 'react'
import { Row, Col, CardBody, CardText } from 'reactstrap'
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { MoreVertical, Edit, Trash } from 'react-feather'
import { Link } from 'react-router-dom'
import Card from '@components/card-snippet'
import { getUsers, deleteUser } from './Service/api';
import  EditUser  from './Component/EditUser';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import Export from './Export'
import Input from 'reactstrap/lib/Input'
// import Pagination from './Pagination';






const refreshPage = ()=>{
  window.location.reload();
}

// import React, { useEffect, useState } from 'react'
  const AllUsers = () => {
    const [users, setUsers] = useState([])
    const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [userId,setUserId]=useState(null)
   // const classes = useStyles();

    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }
    
  
  return (
    
    <Fragment >
<Row>
  <Col>
  <Export  />

  </Col>
</Row>
     <BrowserRouter>
     
      <Switch>
        
        {/* <Route exact path="/all" component={AllUsers} />
        <Route exact path="/add" component={AddUser} /> */}
        <Route exact path="/forms/trip/:id" component={EditUser} />
        
      </Switch>
    </BrowserRouter>
    <div className="content-wrapper">   
       <Row>
        {/* <EditUser /> */}
        {/* <AddUser /> */}
        <Col sm='12'>


          <Card  >
          <p className="card-title"> Trips           <Input type="text" placeholder="Search"  className="search"/>
</p>


          <Table hover responsive
         
          >
      <thead>
      
          <tr>
            {/* <td>ID</td> */}
            <td className="darklist">Trip Name</td>
            <td className="darklist">Location</td>
            <td className="darklist">Start Date</td>
            <td className="darklist">End Date</td>
            <td className="darklist">Status</td>
            <td className="darklist">Actions</td>
          </tr>
          {
            users.map((user) =>
            
            <tr key={user.id}>
                
            {/* <td>{user._id}</td> */}
            <td className="darklist">{user.tripName}</td>
            <td className="darklist">{user.destination}</td>
            <td className="darklist">{user.StarTDate}</td>
            <td className="darklist">{user.EndDate}</td>
            <td className="darklist">{user.status}</td>
            <td className="darklist">
                {/* <UncontrolledDropdown>
          <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
            <MoreVertical size={15} />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem href='/' onClick={refreshPage}>
              
            <Link to={`./useredit/${user._id}`}> <Edit className='mr-50' size={15} /> <span className='align-middle' onClick={() => getUsers(user._id)}>Edit</span></Link>
            </DropdownItem>
            <DropdownItem href='/'onClick={refreshPage}>
            <Link to="/apps/users"><Trash className='mr-50' size={15} /> <span className='align-middle' onClick={() => deleteUser(user._id)}>Delete</span></Link>
              
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown> */}
        <button  className="edit-button">
        <Link to={`./tripedit/${user._id}`}> <Edit className='' size={15} onClick={() => getUsers(user._id)}/></Link></button>
        <button onClick={refreshPage} className="delete-button">  <AiFillDelete className=' delete' size={15}  onClick={() => deleteUser(user._id)}/></button>
        
        </td>
        </tr>
              
            )
          }
          </thead>

          </Table>
         
          </Card>
        </Col>
        
      </Row>
      <Row>
     
         <Col className="text-right">
         <Link to="./users">
         {/* <button className="pagination-sign">Prev.</button> */}
         </Link>
         <Link to="./users">
         <button className="pagination-button active3">1</button>
         </Link>
         <Link to="./users1">
         <button className="pagination-button ">2</button>
         </Link>
         <Link to="./users2">

         <button className="pagination-button">3</button>
         </Link>
         <Link to="./users2">

         <button className="pagination-sign">Next</button>
         </Link>
         </Col>
      </Row>
      </div>
       
    </Fragment>
        )
        
}

export default AllUsers;
