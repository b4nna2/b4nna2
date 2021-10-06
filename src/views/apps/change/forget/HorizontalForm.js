import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Col,
  Input,
  Form,
  Button,
  CustomInput,
  Label
} from 'reactstrap'
import axios from 'axios'
export let data

// ** Get initial Data
axios.post('http://b6b8-3-108-92-91.ngrok.io/api/forgot').then(response => {
  data = response.data
})

const HorizontalForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Forgot Passsword</CardTitle>
      </CardHeader>

      <CardBody>
        <Form>
          <FormGroup row>
            {/* <Label sm='3' for='name'>
              Current Password
            </Label> */}
            <Col sm='9'>
              {/* <Input type='text' name='name' id='name' placeholder='Current Email' /> */}
              <p>Recover Password</p>
            </Col>
          </FormGroup>

          <FormGroup row>
            {/* <Label sm='3' for='Email'>
              New Password
            </Label> */}
            <Col sm='9'>
             
              <Input type='email' name='Email' id='Email' placeholder='Enter Email' />
            </Col>
          </FormGroup>

          {/* <FormGroup row> */}
            {/* <Label sm='3' for='mobile'>
              
            </Label> */}
            {/* <Col sm='9'>
              <Input type='number' name='mobile' id='mobile' placeholder='Confirm New Email' />
            </Col>
          </FormGroup> */}

          {/* <FormGroup row>
            <Label sm='3' for='password'>
              Password
            </Label>
            <Col sm='9'>
              <Input type='password' name='password' id='password' placeholder='Password' />
            </Col>
          </FormGroup> */}

          {/* <FormGroup row>
            <Col md={{ size: 9, offset: 3 }}>
              <CustomInput type='checkbox' id='remember-me' label='Remember Me' defaultChecked={false} />
            </Col>
          </FormGroup> */}

          <FormGroup className='mb-0' row>
            <Col className='d-flex' md={{ size: 9, offset: 0 }}>
              <div className='mr-1'>
                <Button.Ripple color='primary' type='submit' onClick={e => e.preventDefault()}>
                  Submit
                </Button.Ripple>
              </div>
              {/* <Button.Ripple outline color='secondary' type='reset'>
                Reset
              </Button.Ripple> */}
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  )
}
export default HorizontalForm
