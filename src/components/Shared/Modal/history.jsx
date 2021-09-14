import React, { useEffect, useState } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import { Button, Modal, Tabs, Tab } from 'react-bootstrap'

import { db } from '../../../actions/Firebase'
import moneyFormat from '../../../actions/money-format'

const gridStyle = { height: 'calc(100vh - 400px)' }

const History = ({ isShow, isClose, type, source }) => {
  const [addLists, setAddLists] = useState([])
  const [sellLists, setSellLists] = useState([])

  const getHistory = () => {
    if (source) {
      db.collection(`transaction_buy_${type}`)
        .where(`${type}_id`, '==', source.id)
        .get()
        .then(querySnapshot => {
          if (querySnapshot) {
            const { docs } = querySnapshot
            const lists = docs.map(result => {
              return {
                id: result.id,
                ...result.data()
              }
            })

            setAddLists(lists)
          }

          return true
        })

      db.collection(`transaction_sell_${type}`)
        .where(`${type}_id`, '==', source.id)
        .get()
        .then(querySnapshot => {
          if (querySnapshot) {
            const { docs } = querySnapshot
            const lists = docs.map(result => {
              return {
                id: result.id,
                ...result.data()
              }
            })
            setSellLists(lists)
          }

          return true
        })
    }
  }

  useEffect(() => {
    getHistory()
  }, [isShow])

  // ReactDataGrid Columns
  const filterValue = [
    { name: 'createdAt', operator: 'contains', type: 'string', value: '' }
  ]

  const columns = [
    {
      name: 'createdAt',
      header: 'วันที่',
      textAlign: 'center',
      defaultFlex: 1,
      minWidth: 150
    },
    {
      name: 'amount',
      header: 'จำนวน',
      textAlign: 'end',
      defaultFlex: 1,
      render: ({ data }) =>
        moneyFormat({ number: data.amount, isDecimal: false })
    }
  ]

  return (
    <Modal
      show={isShow}
      onHide={isClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>ประวัติ</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs defaultActiveKey="add">
          <Tab eventKey="add" title="การเพิ่มสินค้า">
            <ReactDataGrid
              columns={columns}
              defaultFilterValue={filterValue}
              dataSource={addLists}
              style={gridStyle}
              enableSelection={false}
              defaultLimit={20}
              pagination="local"
            />
          </Tab>
          <Tab eventKey="sell" title="การขายสินค้า">
            <ReactDataGrid
              columns={columns}
              defaultFilterValue={filterValue}
              dataSource={sellLists}
              style={gridStyle}
              enableSelection={false}
              defaultLimit={20}
              pagination="local"
            />
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => isClose()}>
          ปิด
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default History
