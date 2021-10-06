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
const handleSubmit = (data) => {
  console.log("Form Data : ", data)
  //  axios.get('http://localhost:3000/task/tasks').then((response) => {
  //     console.log(response.data)
  //   }
  //   )
  //   .catch(function (error) {
  //     console.log(error.toJSON())
  //   }
  //   )
  const formData = new FormData(data.target)
  const postData = {
    // description: formData.get("bio"),
    // title:formData.get("name"),
    // image: formData.get("email"),
    // url:formData.get("password")

}
console.log(postData)
axios.patch('http://b6b8-3-108-92-91.ngrok.io/user/:id', postData)
  .then(function (response) {
    console.log("Success :", response)
  })
  .catch(function (error) {
    console.log("Failed : ", error)
  })
}

const HorizontalForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Change Password</CardTitle>
      </CardHeader>

      <CardBody>
      <Form onSubmit={handleSubmit}>
          <FormGroup row>
            {/* <Label sm='3' for='name'>
              Current Password
            </Label> */}
            <Col sm='9'>
              <Input type='password' name='password' id='password' placeholder='Current Password' />
            </Col>
          </FormGroup>

          <FormGroup row>
            {/* <Label sm='3' for='Email'>
              New Password
            </Label> */}
            <Col sm='9'>
            <Input type='password' name='password' id='password' placeholder='New Password' />
            </Col>
          </FormGroup>

          <FormGroup row>
            {/* <Label sm='3' for='mobile'>
              
            </Label> */}
            <Col sm='9'>
              <Input type='password' name='password' id='password' placeholder='Confirm Password' />
            </Col>
          </FormGroup>

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
