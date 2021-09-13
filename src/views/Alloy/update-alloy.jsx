/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { Modal } from 'react-bootstrap';

import AlloyFrom from '../../components/Pages/Alloy/Form';

export interface UpdateAlloyProps {
  isShow: boolean;
  isClose: Function;
  data: any;
  submit: Function;
}

const UpdateAlloy = ({ isShow, isClose, data, submit }: UpdateAlloyProps) => {
  return (
    <Modal
      show={isShow}
      onHide={isClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <AlloyFrom
        action="update"
        data={data}
        submitForm={submit}
        handleClose={isClose}
      />
    </Modal>
  );
};

export default UpdateAlloy;
