import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import { GoLocation } from 'react-icons/go'
import { MdInsertComment } from 'react-icons/md'
import { AiFillStar, AiFillDelete } from 'react-icons/ai'
import { BsPencilSquare } from 'react-icons/bs'
import { Button } from '@material-ui/core'
// import { DeleteModal } from './DeleteModal'
import { ImagePopup } from './ImagePopup'
import { Comments } from './Comments'
import Image from '@src/views/apps/managecountry/country_image_Japan.jpg'
import { Link } from 'react-router-dom'
// import Image from '../../../assets/images/pages/login/card-image-4.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    shadowColor: 'red'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500
    
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: '0',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  }
}))
// const history = useHistory()

// const routeChange = () => { 
//   let path = `newPath`
//   history.push(path)
// }

export default function ComplexGrid() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <br></br>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
               {/* <img className={classes.image} alt="complex" src={Image} />  */}
               {/* <img src={require(Image)} />  */}
              {/* <img src={Image} alt='' />  */}
               <ImagePopup className='mc' />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Japan<Button className='bc'><AiFillDelete /></Button>
                </Typography>
                <Typography variant="body2" gutterBottom>
                <GoLocation/> Fujiyoshida, Japan
                </Typography>
                {/* <Typography variant="body2" color="textSecondary">
                <div><Link to='../invoice/preview'> <Button><MdInsertComment /></Button></Link></div>&nbsp;&nbsp;&nbsp;&nbsp;<div> <AiFillStar /> </div>&nbsp;&nbsp;&nbsp;&nbsp; <div><BsPencilSquare /></div>&nbsp;&nbsp;&nbsp;&nbsp; <AiFillStar />  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <Button variant="contained" color="primary">
  Primary
</Button>
                </Typography> */}
              {/* </Grid>
              <Grid item> */}
          
              </Grid>
            </Grid>
            {/* <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid> */}
          </Grid>
        </Grid>
        
      </Paper>
      <br></br><br></br>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
               {/* <img className={classes.image} alt="complex" src={Image} />  */}
               {/* <img src={require(Image)} />  */}
              {/* <img src={Image} alt='' />  */}
               <ImagePopup  />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Japan<Button className='bc'><AiFillDelete /></Button>
                </Typography>
                <Typography variant="body2" gutterBottom>
                <GoLocation/> Fujiyoshida, Japan
                </Typography>
                {/* <Typography variant="body2" color="textSecondary">
                <div><Link to='../invoice/preview'> <Button><MdInsertComment /></Button></Link></div>&nbsp;&nbsp;&nbsp;&nbsp;<div> <AiFillStar /> </div>&nbsp;&nbsp;&nbsp;&nbsp; <div><BsPencilSquare /></div>&nbsp;&nbsp;&nbsp;&nbsp; <AiFillStar />  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <Button variant="contained" color="primary">
  Primary
</Button>
                </Typography> */}
              {/* </Grid>
              <Grid item> */}
          
              </Grid>
            </Grid>
            {/* <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid> */}
          </Grid>
        </Grid>
        
      </Paper>
      <br></br><br></br>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
               {/* <img className={classes.image} alt="complex" src={Image} />  */}
               {/* <img src={require(Image)} />  */}
              {/* <img src={Image} alt='' />  */}
               <ImagePopup  />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Japan<Button className='bc'><AiFillDelete /></Button>
                </Typography>
                <Typography variant="body2" gutterBottom>
                <GoLocation/> Fujiyoshida, Japan
                </Typography>
                {/* <Typography variant="body2" color="textSecondary">
                <div><Link to='../invoice/preview'> <Button><MdInsertComment /></Button></Link></div>&nbsp;&nbsp;&nbsp;&nbsp;<div> <AiFillStar /> </div>&nbsp;&nbsp;&nbsp;&nbsp; <div><BsPencilSquare /></div>&nbsp;&nbsp;&nbsp;&nbsp; <AiFillStar />  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <Button variant="contained" color="primary">
  Primary
</Button>
                </Typography> */}
              {/* </Grid>
              <Grid item> */}
          
              </Grid>
            </Grid>
            {/* <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid> */}
          </Grid>
        </Grid>
        
      </Paper>
    </div>

  )
}
