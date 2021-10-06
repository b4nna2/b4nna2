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
    const {placeName, StateName, placeLocation, image } = user;
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
        history.push('./manageplaces');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <FormGroup className={classes.container}>  
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                {/* <InputLabel htmlFor="my-input">Name</InputLabel> */}<div className="edit-form">Place</div>
                <Input onChange={(e) => onValueChange(e)} name='placeName' value={placeName} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
             {/* <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>  */}
            <FormControl>
                {/* <InputLabel htmlFor="my-input">Email</InputLabel> */}<div className="edit-form">State</div>
                <Input onChange={(e) => onValueChange(e)} name='StateName' value={StateName} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                {/* <InputLabel htmlFor="my-input">Phone</InputLabel> */}<div className="edit-form">Country</div>
                <Input onChange={(e) => onValueChange(e)} name='placeLocation' value={placeLocation} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
               <Link to = "../user/manageplaces">
               <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit Places</Button>
               </Link> 
            </FormControl>
        </FormGroup>
    )
}

export default EditUser;