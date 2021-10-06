import { useState } from 'react'
import Flatpickr from 'react-flatpickr'
import { Card, CardHeader, CardTitle, CardBody, Label, Button } from 'reactstrap'
import {
  AvForm,
  AvGroup,
  AvField,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvCheckboxGroup,
  AvRadio,
  AvCheckbox
} from 'availity-reactstrap-validation-safe'

import '@styles/react/libs/flatpickr/flatpickr.scss'
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
    description: formData.get("bio"),
    title:formData.get("name"),
    image: formData.get("email"),
    url:formData.get("password")

}
console.log(postData)
axios.post('http://b6b8-3-108-92-91.ngrok.io/api/task', postData)
  .then(function (response) {
    console.log("Success :", response)
  })
  .catch(function (error) {
    console.log("Failed : ", error)
  })
}

const Validation = () => {
  const [picker, setPicker] = useState('')

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Blog Details</CardTitle>
      </CardHeader>
      <CardBody>
      <AvForm onSubmit={handleSubmit}>
          <AvGroup>
            {/* <Label for='name'>Name</Label> */}
            <AvInput name='name' id='name' placeholder='Enter Title' required />
            <AvFeedback>Please enter a valid Title!</AvFeedback>
          </AvGroup>
          <AvGroup>
            {/* <Label for='email'>Email</Label> */}
            <AvInput type='text' name='text' id='text'  placeholder='Enter Image URL' required />
            <AvFeedback>Please enter a valid URL!</AvFeedback>
          </AvGroup>
          <AvGroup>
            {/* <Label for='password'>Password</Label> */}
            <AvInput type='text' name='text' id='text'  placeholder='Enter Source URL' required />
            <AvFeedback>Please enter a valid URL!</AvFeedback>
          </AvGroup>
          {/* <AvGroup>
            <Label for='dob'>DOB</Label>
            <AvField
              required
              id='dob'
              tag={Flatpickr}
              name='dob'
              className='form-control'
              value={picker}
              onChange={date => setPicker(date[0])}
            />
            <AvFeedback>Please enter your DOB!</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label for='country'>Country</Label>
            <AvField type='select' name='country' id='country' required>
              <option>United Kingdom</option>
              <option>United States</option>
              <option>France</option>
              <option>Australia</option>
              <option>Germany</option>
            </AvField>
            <AvFeedback>Please select a country</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label for='hobbies'>Hobbies</Label>
            <AvField type='select' name='hobbies' id='hobbies' multiple required>
              <option>Sports</option>
              <option>Movies</option>
              <option>Books</option>
            </AvField>
            <AvFeedback>Please select at least one hobby</AvFeedback>
          </AvGroup> */}
          <AvGroup>
            {/* <Label for='bio'>Bio</Label> */}
            <AvInput type='textarea' name='bio' id='bio'  placeholder='Enter Description' required />
            <AvFeedback>Please enter Description!</AvFeedback>
          </AvGroup>
          {/* <AvRadioGroup name='gender' required>
            <AvRadio className='mb-1' customInput label='Male' value='Male' />
            <AvRadio customInput label='Female' value='Female' />
          </AvRadioGroup>
          <AvCheckboxGroup name='terms' required>
            <AvCheckbox customInput label='Agree to our terms and conditions' value='terms' />
            <AvFeedback>You must agree to our Terms & Conditions</AvFeedback>
          </AvCheckboxGroup> */}
          <Button color='primary' type='submit'>
            Submit
          </Button>
        </AvForm>
      </CardBody>
    </Card>
  )
}

export default Validation
