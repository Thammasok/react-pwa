import React from 'react'
import { Modal } from 'react-bootstrap'

import TireFrom from '../../components/Pages/Tire/Form'

const updateTire = ({ isShow, isClose, data, submit }) => {
  return (
    <Modal
      show={isShow}
      onHide={isClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <TireFrom
        data={data}
        action="update"
        submitForm={submit}
        handleClose={isClose}
      />
    </Modal>
  )
}

export default updateTire
