import React from 'react'
import { Button, Modal } from 'react-bootstrap'

// Components
import List from './list'

const CustomColumn = ({ isShow, isClose }) => {
  const handleSave = () => {
    window.location.reload()
  }

  return (
    <Modal
      show={isShow}
      onHide={isClose}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>กำหนดคอลัมน์เริ่มต้น</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <List />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => isClose()}>
          ปิด
        </Button>
        <Button variant="primary" onClick={() => handleSave()}>
          บันทึก
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CustomColumn
