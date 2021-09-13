import React from 'react'
import { Modal } from 'react-bootstrap'

import AlloyFrom from '../../components/Pages/Alloy/Form'

const newAlloy = ({ isShow, isClose, submit }) => {
  return (
    <Modal
      show={isShow}
      onHide={isClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <AlloyFrom action="add" submitForm={submit} handleClose={isClose} />
    </Modal>
  )
}

export default newAlloy
