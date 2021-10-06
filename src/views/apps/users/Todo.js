import React, { useState, useEffect} from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable, { memoize } from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import axios from 'axios'
import cellEditFactory from "react-bootstrap-table2-editor";
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { getUsers, deleteUser } from './Service/api';


function Todo() {
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

   function rankFormatter(cell, row) { 
    return ( 
          < div className="action-row"
              style={{ textAlign: "center",
                 cursor: "pointer",
                lineHeight: "normal" }}>
          
          
<button className="edit-button">
        <Link to={`./useredit/${user._id}`}> <AiFillEdit className='' size={15} onClick={() => getUsers(user._id)}/></Link></button>
        <button  className="delete-button" >  <AiFillDelete className=' delete' size={15}  onClick={() => deleteUser(user._id)}/></button>
      
           
     </div> 
); }

   const columns =[
     { dataField: "Name",  text: "Name" },
     { dataField: "email", text: "email" },
     { dataField: "Mobile", text: "Mobile" },
     { dataField: "", 
     text: "Action",
     sort: false,
     formatter: rankFormatter,
    //  headerAttrs: { width: 70 },
    //  attrs: { width: 70,} 
   }
  
   ]
   

  //  useEffect(() =>{
  //    getUserData();
  //  },[]);
 
 
  const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
  }];

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    }
  });

  const { SearchBar, ClearSearchButton } = Search;

  const MyExportCSV = (props) => {
    const handleClick = () => {
      props.onExport();
    };
    return (
      <div>
        <button className="btn btn-success" onClick={handleClick}>Export to CSV</button>
      </div>
    );
  };


  return (
    <div className="App">
          
      <ToolkitProvider
        bootstrap4
        keyField='id'
        data={users}
        columns={columns}
        search
        exportCSV
        bordered={false}
      >
        {
          props => (
            <div>
 <p className="card-title" style={{paddingBottom: '10px'}}> Users   </p>
               <SearchBar  {...props.searchProps} />
              <ClearSearchButton  {...props.searchProps} />
              <hr />
              <MyExportCSV {...props.csvProps} />
              <BootstrapTable
                defaultSorted={defaultSorted}
                pagination={pagination}
                {...props.baseProps}

            
              />

            </div>
          )
        }
      </ToolkitProvider>

    </div>
  );
}

export default Todo;