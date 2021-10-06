// import './App.css';
import { Fragment, useEffect, useState} from 'react'
import { Row, Col, CardBody, CardText, Input } from 'reactstrap'
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
import TableServerSide from './TableServerSide'
import Export from './Export'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import page from './Todo'
 import Todo from './Todo'
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


     <BrowserRouter>
     
      <Switch>
        
        {/* <Route exact path="/all" component={AllUsers} />
        <Route exact path="/add" component={AddUser} /> */}
        <Route exact path="/apps/users/:id" component={EditUser} />
        
      </Switch>
    </BrowserRouter>
    <div className="content-wrapper">   
     
      <Row>
      <Col sm='12'>
          <Todo />
        </Col>
         {/* <Col className="text-right"> */}
         
         {/* <button className="pagination-sign">Prev.</button> */}
         {/* <button className="pagination-button active3">1</button> */}
         {/* <Link to="./users1">
         <button className="pagination-button">2</button>
         </Link>
         <Link to="./users2">
         <button className="pagination-button">3</button>
         </Link>
         <Link to="./users1">
         <button className="pagination-sign">Next</button>
         </Link>
         </Col> */}
      </Row>
      </div>
       {/* <Tablepage /> */}
    </Fragment>
        )
        
}

export default AllUsers;