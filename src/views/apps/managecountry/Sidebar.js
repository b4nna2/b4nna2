import React ,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import { GoLocation } from 'react-icons/go'
// import { MdInsertComment } from 'react-icons/md'
import { AiFillStar, AiFillDelete, AiOutlineEye } from 'react-icons/ai'
import { BsPencilSquare } from 'react-icons/bs'
import { Button } from '@material-ui/core'
import { DeleteModal } from './DeleteModal'
import { ImagePopup } from './ImagePopup'
import { Comments } from './Comments'

import Image from '@src/views/apps/managecountry/country_image_Japan.jpg'
import { Link } from 'react-router-dom'
import { Edit } from './Edit'
import "./Modal1.css"
import "@src/@core/scss/core.scss"
import Modal from 'react-modal'
import { FiLink2 } from 'react-icons/fi'
import { AddModal } from './AddModal'

// import Image from '../../../assets/images/pages/login/card-image-4.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    shadowColor: 'red'
  },
  paper: {
    padding: theme.spacing(2),
    // margin: 'auto',
    maxWidth: 670
    
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

Modal.setAppElement('#root')
export default function ComplexGrid() {
  const classes = useStyles()
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div className={classes.root}>
      <br></br>
        <AddModal />
      <Paper className="country-box">
        <Grid container spacing={2}>
          <Grid item>
               {/* <img className={classes.image} alt="complex" src={Image} />  */}
               {/* <img src={require(Image)} />  */}
              {/* <img src={Image} alt='' />  */}
               <ImagePopup className='as' />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Japan
                </Typography>
                <Typography variant="body2" gutterBottom>
                <GoLocation/> Fujiyoshida, Japan
                </Typography>
                <Typography variant="body2" color="textSecondary">
                <div> <Link to='../comments/managecountry'> <Button className="buttonhover"> <Comments  /></Button></Link></div><div>  <Button  className="buttonhover" > <AiFillStar className="star"/></Button> </div><div> <Button className="buttonhover"  onClick={() => setModalIsOpen(true)}> <AiOutlineEye className="eye"/></Button> </div> <div> <Link to='./placeedit'> <Button className="buttonhover"> <Edit  /></Button></Link></div> <DeleteModal /> 
                <Button variant="contained" color="primary">
Add to Featured</Button>
                </Typography>
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
      <br></br>
      <Paper className="country-box">
        <Grid container spacing={2}>
          <Grid item>
            {/* <ButtonBase className={classes.image}> */}
            {/* <img className={classes.img} alt="complex" src={Image} />  */}
              {/* <img src={require('./card-image-4.jpg')} /> */}
              {/* <img src={Image} alt='' /> */}
            {/* </ButtonBase> */}
            <ImagePopup   />

          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Dubai
                </Typography>
                <Typography variant="body2" gutterBottom>
                <GoLocation/>  Abu Dhabi, Uae
                </Typography>
                <Typography variant="body2" color="textSecondary">
                <div> <Link to='../comments/managecountry'> <Button className="buttonhover"> <Comments  /></Button></Link></div><div>  <Button  className="buttonhover" > <AiFillStar className="star"/></Button> </div><div> <Button className="buttonhover"  onClick={() => setModalIsOpen(true)}> <AiOutlineEye className="eye"/></Button> </div> <div> <Link to='./placeedit'> <Button className="buttonhover"> <Edit  /></Button></Link></div> <DeleteModal /> 
                <Button variant="contained" color="primary">
Add to Featured</Button>
                </Typography>
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
      <br></br>
      <Paper className="country-box">
        <Grid container spacing={2}>
          <Grid item>
            
            {/* <img className={classes.img} alt="complex" src={Image} />  */}
              {/* <img src={require('./card-image-4.jpg')} /> */}
              {/* <img src={Image} alt='' /> */}
              <ImagePopup   />

           
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  America
                </Typography>
                <Typography variant="body2" gutterBottom>
                <GoLocation/> Washington, US
                </Typography>
                <Typography variant="body2" color="textSecondary">
                <div> <Link to='../comments/managecountry'> <Button className="buttonhover"> <Comments  /></Button></Link></div><div>  <Button  className="buttonhover" > <AiFillStar className="star"/></Button> </div><div> <Button className="buttonhover"  onClick={() => setModalIsOpen(true)}> <AiOutlineEye className="eye"/></Button> </div> <div> <Link to='./placeedit'> <Button className="buttonhover"> <Edit  /></Button></Link></div> <DeleteModal /> 
                <Button variant="contained" color="primary">
Add to Featured</Button>
                </Typography>
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
     
      <Modal className="Modal" isOpen = {modalIsOpen}  onRequestClose={() => setModalIsOpen(false)}>
<img src={Image} className="img1"/>
<Button className="buttonnew"><FiLink2 className="source" />SourceList</Button>

<h2 className="heading1">LOREM IPSUM</h2>
<hr class="line" />


  <h6 className="heading2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </h6>


 
 

 
</Modal>
    </div>
  )
}
