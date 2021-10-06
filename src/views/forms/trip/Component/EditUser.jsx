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
    const {tripName, destination, StarTDate, EndDate } = user;
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
        history.push('./trip');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <FormGroup className={classes.container}>  
            <Typography variant="h4">Edit Trip</Typography>
            <FormControl>
                {/* <InputLabel htmlFor="my-input">Name</InputLabel> */}<div className="edit-form">Trip Name</div>
                <Input onChange={(e) => onValueChange(e)} name='tripName' value={tripName} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
             {/* <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>  */}
            <FormControl>
                {/* <InputLabel htmlFor="my-input">Email</InputLabel> */}<div className="edit-form">Destination</div>
                <Input onChange={(e) => onValueChange(e)} name='destination' value={destination} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                {/* <InputLabel htmlFor="my-input">Phone</InputLabel> */}<div className="edit-form">Start Date</div>
                <Input type="date" onChange={(e) => onValueChange(e)} name='StarTDate' value={StarTDate} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                {/* <InputLabel htmlFor="my-input">Phone</InputLabel> */}<div className="edit-form">End Date</div>
                <Input type="date" onChange={(e) => onValueChange(e)} name='EndDate' value={EndDate} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
           
            <FormControl>
               <Link to = "../trip">
               <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit Trip</Button>
               </Link> 
            </FormControl>
        </FormGroup>
    )
}

export default EditUser;