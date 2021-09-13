import React from 'react'
import { Modal } from 'react-bootstrap'

import TireFrom from '../../components/Pages/Tire/Form'

const newTire = ({ isShow, isClose, submit }) => {
  return (
    <Modal
      show={isShow}
      onHide={isClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <TireFrom action="add" submitForm={submit} handleClose={isClose} />
    </Modal>
  )
}

export default newTire
