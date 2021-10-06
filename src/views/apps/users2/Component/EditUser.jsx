import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { Link, useHistory, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../Service/api';

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { Name, username, email, Mobile } = user;
    const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser(id, user);
        history.push('users2');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                {/* <InputLabel htmlFor="my-input">Name</InputLabel> */} <div className="edit-form">Name</div>
                <Input onChange={(e) => onValueChange(e)} name='Name' value={Name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
             {/* <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>  */}
            <FormControl>
                {/* <InputLabel htmlFor="my-input">Email</InputLabel> */}<div className="edit-form">Email</div>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                {/* <InputLabel htmlFor="my-input">Phone</InputLabel> */}<div className="edit-form">Mobile</div>
                <Input onChange={(e) => onValueChange(e)} name='Mobile' value={Mobile} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
               <Link to = "../users2">
               <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
               </Link> 
            </FormControl>
        </FormGroup>
    )
}

export default EditUser;