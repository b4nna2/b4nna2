import { Fragment, useState, useRef } from 'react'
import ExtensionsHeader from '@components/extensions-header'
import XLSX from 'xlsx'
import * as FileSaver from 'file-saver'
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  FormGroup,
  CustomInput,
  Label
} from 'reactstrap'

const initialData = []


const Export = () => {
  const tableRef = useRef()

  const [data] = useState(initialData)
  const [filteredData, setFilteredData] = useState([])
  const [value, setValue] = useState('')
  const [modal, setModal] = useState(false)
  const [fileName, setFileName] = useState('')
  const [fileFormat, setFileFormat] = useState('xlsx')

  const toggleModal = () => {
    setModal(!modal)
  }

  const handleFilter = e => {
    const dataArr = data
    let filteredData = []
    const value = e.target.value
    setValue(value)
    if (value.length) {
      filteredData = dataArr.filter(col => {
        const startsWithCondition =
          col.name.toLowerCase().startsWith(value.toLowerCase()) ||
          col.email.toLowerCase().startsWith(value.toLowerCase()) ||
          col.website.toLowerCase().startsWith(value.toLowerCase()) ||
          col.id.toString().toLowerCase().startsWith(value.toLowerCase())

        const includesCondition =
          col.name.toLowerCase().includes(value.toLowerCase()) ||
          col.email.toLowerCase().includes(value.toLowerCase()) ||
          col.website.toLowerCase().includes(value.toLowerCase()) ||
          col.id.toString().toLowerCase().includes(value.toLowerCase())

        if (startsWithCondition) return startsWithCondition
        else if (!startsWithCondition && includesCondition) return includesCondition
        else return null
      })
      setFilteredData(filteredData)
      setValue(value)
    }
  }

  const handleExport = () => {
    toggleModal()
    const bookType = fileFormat
    const wb = XLSX.utils.table_to_book(tableRef.current, { sheet: 'Sheet JS' })
    const wbout = XLSX.write(wb, { bookType, bookSST: true, type: 'binary' })

    const s2ab = s => {
      const buf = new ArrayBuffer(s.length)
      const view = new Uint8Array(buf)
      for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff
      return buf
    }
    const file = fileName.length ? `${fileName}.${fileFormat}` : `excel-sheet.${fileFormat}`

    return FileSaver.saveAs(new Blob([s2ab(wbout)], { type: 'application/octet-stream' }), file)
  }

  const array = value ? filteredData : data
  const renderTableData = array.map(col => {
    return (
     <></>
    )
  })
  return (
    <Fragment>
      
      <Row className='export-component'>
        <Col sm='12'>
              <div className='d-flex justify-content-between flex-wrap flex-sm-row flex-column'>
                <Button.Ripple color='primary' onClick={() => toggleModal()}>
                  Export
                </Button.Ripple>
               
              </div>
          
        </Col>
      </Row>
      <Modal
        isOpen={modal}
        toggle={() => toggleModal()}
        className='modal-dialog-centered'
        onClosed={() => setFileName('')}
      >
        <ModalHeader toggle={() => toggleModal()}>Export To Excel</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Input
              type='text'
              value={fileName}
              onChange={e => setFileName(e.target.value)}
              placeholder='Enter File Name'
            />
          </FormGroup>
          <FormGroup>
            <CustomInput
              type='select'
              id='selectFileFormat'
              name='customSelect'
              value={fileFormat}
              onChange={e => setFileFormat(e.target.value)}
            >
              <option>xlsx</option>
              <option>csv</option>
              <option>txt</option>
            </CustomInput>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={() => handleExport()}>
            Export
          </Button>
          <Button color='flat-danger' onClick={() => toggleModal()}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  )
}

export default Export
