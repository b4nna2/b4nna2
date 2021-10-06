import AvatarGroup from '@components/avatar-group'
import react from '@src/assets/images/icons/react.svg'
import vuejs from '@src/assets/images/icons/vuejs.svg'
import country from '@src/assets/images/icons/country.jpg'
import angular from '@src/assets/images/icons/angular.svg'
import bootstrap from '@src/assets/images/icons/bootstrap.svg'
import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import avatar2 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import avatar3 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import { MoreVertical, Edit, Trash } from 'react-feather'
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import CustomInput from 'reactstrap/lib/CustomInput'
import { Link } from 'react-router-dom'

const avatarGroupData1 = [
  {
    title: 'Griffith',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Hu',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Felicia',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData2 = [
  {
    title: 'Quinlan',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Patrick',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Castor',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData3 = [
  {
    title: 'Mohammad',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Isabella',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Michael',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData4 = [
  {
    title: 'Lavinia',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Nelle',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Virginia',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const TableHover = () => {
  return (
    <Table hover responsive>
      <thead>
        <tr>
          <th>jhjh</th>
          <th>Trip Name</th>
          <th>Location</th>
          <th>Date & Time</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        {
            users.map((item, i) =>
              <tr key={i}>
                <td>{item._id}</td>
                <td>{item.Name}</td>
                <td>{item.email}</td>
                <td>{item.Mobile}</td>
                <td><button onClick={() => deleteUser(item._id)}>Delete</button></td>
                <td><button onClick={() => selectUser(item._id)}>Update</button></td>

              </tr>
            )
          }
      </thead>
      <tbody>
        <tr>
          <td>
          <img className='mr-75' src={country} alt='country' height='40' width='40' />
            {/* <span className='align-middle font-weight-bold'>Angular Project</span> */}
          </td>
          <td></td>
          <td>
            {/* <AvatarGroup data={avatarGroupData1} /> */}
          </td>
          <td>
          {/* <CustomInput
              className='custom-control-success'
              type='switch'
              id='success11'
              name='success11'
              inline
              defaultChecked
            /> */}
          </td>
          <td>
          {/* <CustomInput
            type='switch'
            id='exampleCustomSwitch1'
            name='customSwitch1'
            // label='Toggle this switch element'
            inline
          /> */}
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                <Link to='./view'> <Edit className='mr-50' size={15} /> <span className='align-middle'>Edit</span></Link>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='mr-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr>
          <td>
          <img className='mr-75' src={country} alt='country' height='40' width='40' />
            {/* <span className='align-middle font-weight-bold'>React Project</span> */}
          </td>
          <td></td>
          <td>
            {/* <AvatarGroup data={avatarGroupData2} /> */}
          </td>
          <td>
          {/* <CustomInput
              className='custom-control-success'
              type='switch'
              id='success22'
              name='success22'
              inline
              defaultChecked
            /> */}
          </td>
          <td>
          {/* <CustomInput
            type='switch'
            id='exampleCustomSwitch2'
            name='customSwitch2'
            // label='Toggle this switch element'
            inline
          /> */}
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              
              <DropdownMenu right>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                <Link to='./view'> <Edit className='mr-50' size={15} /> <span className='align-middle'>Edit</span></Link>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='mr-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr>
          <td>
            <img className='mr-75' src={country} alt='country' height='40' width='40' />
            {/* <span className='align-middle font-weight-bold'>Vuejs Project</span> */}
          </td>
          <td></td>
          <td>
            {/* <AvatarGroup data={avatarGroupData3} /> */}
          </td>
          <td>
          {/* <CustomInput
              className='custom-control-success'
              type='switch'
              id='success33'
              name='success33'
              inline
              defaultChecked
            /> */}
          </td>
          <td>
          {/* <CustomInput
            type='switch'
            id='exampleCustomSwitch3'
            name='customSwitch3'
            // label='Toggle this switch element'
            inline
          /> */}
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                <Link to='./view'> <Edit className='mr-50' size={15} /> <span className='align-middle'>Edit</span></Link>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='mr-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr>
          <td>
          <img className='mr-75' src={country} alt='country' height='40' width='40' />
            {/* <span className='align-middle font-weight-bold'>Bootstrap Project</span> */}
          </td>
          <td></td>
          <td>
            {/* <AvatarGroup data={avatarGroupData4} /> */}
          </td>
          <td>
          {/* <CustomInput
              className='custom-control-success'
              type='switch'
              id='success44'
              name='success44'
              inline
              defaultChecked
            /> */}
          </td>
          <td>
          {/* <CustomInput
            type='switch'
            id='exampleCustomSwitch4'
            name='customSwitch4'
            // label='Toggle this switch element'
            inline
          /> */}
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                <Link to='./view'> <Edit className='mr-50' size={15} /> <span className='align-middle'>Edit</span></Link>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='mr-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default TableHover
