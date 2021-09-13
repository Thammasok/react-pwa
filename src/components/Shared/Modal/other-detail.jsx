import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const OtherDetail = ({ isShow, isClose, source }) => {
  return (
    <Modal
      show={isShow}
      onHide={isClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>ข้อมูลอื่นๆ</Modal.Title>
      </Modal.Header>
      <Modal.Body>{source}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => isClose()}>
          ปิด
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default OtherDetail
