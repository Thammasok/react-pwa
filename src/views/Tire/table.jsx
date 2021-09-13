import React, { useState } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import { get } from 'local-storage'
import { Button } from 'react-bootstrap'

import moneyFormat from '../../actions/money-format'

// Components
import OtherDetail from '../../components/Shared/Modal/other-detail'
import AddItem from '../../components/Shared/Modal/add-item'
import Sell from '../../components/Shared/Modal/sell'
import History from '../../components/Shared/Modal/history'

const gridStyle = { height: 'calc(100vh - 125px)' }
const defaultTire = {
  id: '',
  brand: '',
  model: '',
  tireWidth: '',
  sidewallHeight: '',
  wheelDiameter: '',
  typeOfTire: '',
  payload: '',
  rateOfSpeed: '',
  manufacture: '',
  monthOfManufacture: '',
  yearOfManufacture: '',
  amount: '',
  cost: '',
  priceDelivery: '',
  priceRetail: '',
  otherDetail: ''
}

const TireTable = ({ lists, editDetail, updateDetail }) => {
  const tireField = JSON.parse(get('field_tire'))

  const [showOtherDetailModal, setShowOtherDetailModal] = useState(false)
  const [otherDetail, setOtherDetail] = useState('')
  const [showSellProduct, setShowSellProduct] = useState(false)
  const [showAddItem, setShowAddItem] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [selectDetail, setSelectDetail] = useState(defaultTire)

  const handleOtherDetailShowModal = data => {
    if (data && data.otherDetail) {
      setOtherDetail(data.otherDetail)
    } else {
      setOtherDetail('ไม่มีข้อมูล')
    }
    setShowOtherDetailModal(true)
  }

  const handleAddTire = data => {
    setSelectDetail(data)
    setShowAddItem(true)
  }

  const handleSellTire = data => {
    setSelectDetail(data)
    setShowSellProduct(true)
  }

  const handleHistoryTire = data => {
    setSelectDetail(data)
    setShowHistory(true)
  }

  // ReactDataGrid Columns
  const filterValue = [
    { name: 'brand', operator: 'contains', type: 'string', value: '' },
    { name: 'model', operator: 'contains', type: 'string', value: '' },
    {
      name: 'tireNumber',
      operator: 'contains',
      type: 'string',
      value: ''
    },
    { name: 'tireWidth', operator: 'startsWith', type: 'string', value: '' },
    {
      name: 'sidewallHeight',
      operator: 'startsWith',
      type: 'string',
      value: ''
    },
    {
      name: 'wheelDiameter',
      operator: 'startsWith',
      type: 'string',
      value: ''
    },
    { name: 'typeOfTire', operator: 'startsWith', type: 'string', value: '' },
    { name: 'payload', operator: 'startsWith', type: 'string', value: '' },
    { name: 'rateOfSpeed', operator: 'startsWith', type: 'string', value: '' },
    { name: 'manufacture', operator: 'contains', type: 'string', value: '' },
    {
      name: 'monthOfManufacture',
      operator: 'startsWith',
      type: 'string',
      value: ''
    },
    {
      name: 'yearOfManufacture',
      operator: 'startsWith',
      type: 'string',
      value: ''
    },
    { name: 'amount', operator: 'startsWith', type: 'string', value: '' },
    { name: 'cost', operator: 'startsWith', type: 'string', value: '' },
    {
      name: 'priceDelivery',
      operator: 'startsWith',
      type: 'string',
      value: ''
    },
    { name: 'priceRetail', operator: 'startsWith', type: 'string', value: '' }
    // { name: 'otherDetail', operator: 'startsWith', type: 'string', value: '' },
    // { name: 'tireFullType', operator: 'startsWith', type: 'string', value: '' },
    // { name: 'manufacture', operator: 'startsWith', type: 'string', value: '' },
  ]

  const columns = [
    {
      name: 'brand',
      header: 'แบรนด์',
      defaultFlex: 1,
      minWidth: 200,
      defaultVisible: tireField ? tireField.brand : true
    },
    {
      name: 'model',
      header: 'รุ่น',
      defaultFlex: 1,
      minWidth: 150,
      defaultVisible: tireField ? tireField.model : true
    },
    {
      name: 'tireNumber',
      header: 'เบอร์ยาง',
      textAlign: 'center',
      minWidth: 200,
      defaultFlex: 1,
      defaultVisible: tireField ? tireField.tireNumber : true
    },
    {
      name: 'tireWidth',
      header: 'ความกว้าง (มม.)',
      textAlign: 'center',
      defaultVisible: tireField ? tireField.tireWidth : false
    },
    {
      name: 'sidewallHeight',
      header: 'แก้มยาง',
      textAlign: 'center',
      defaultVisible: tireField ? tireField.sidewallHeight : false
    },
    {
      name: 'wheelDiameter',
      header: 'เส้นผ่าศูนย์กลาง (นิ้ว)',
      textAlign: 'center',
      defaultVisible: tireField ? tireField.wheelDiameter : false
    },
    {
      name: 'typeOfTire',
      header: 'ชนิดของยาง',
      textAlign: 'center',
      defaultVisible: tireField ? tireField.typeOfTire : false
    },
    {
      name: 'payload',
      header: 'ดัชนีบรรทุก',
      textAlign: 'center',
      defaultVisible: tireField ? tireField.payload : false
    },
    {
      name: 'rateOfSpeed',
      header: 'ความเร็วสูงสุด',
      textAlign: 'center',
      defaultVisible: tireField ? tireField.rateOfSpeed : false
    },
    {
      name: 'manufacture',
      header: 'เดือนปีที่ผลิต',
      textAlign: 'center',
      defaultVisible: tireField ? tireField.manufacture : false
    },
    {
      name: 'amount',
      header: 'จำนวน',
      defaultWidth: 100,
      textAlign: 'center',
      defaultVisible: tireField ? tireField.amount : true
    },
    {
      id: 'cost',
      header: 'ราคาต้นทุน',
      textAlign: 'end',
      defaultVisible: tireField ? tireField.cost : true,
      render: ({ data }) => moneyFormat({ number: data.cost, isDecimal: true })
    },
    {
      id: 'priceDelivery',
      header: 'ราคาขายปลีก',
      textAlign: 'end',
      defaultVisible: tireField ? tireField.priceDelivery : true,
      render: ({ data }) =>
        moneyFormat({ number: data.priceDelivery, isDecimal: true })
    },
    {
      id: 'priceRetail',
      header: 'ราคาขายส่ง',
      textAlign: 'end',
      defaultVisible: tireField ? tireField.priceRetail : true,
      render: ({ data }) =>
        moneyFormat({ number: data.priceRetail, isDecimal: true })
    },
    {
      name: 'otherDetail',
      header: 'อื่นๆ',
      textAlign: 'center',
      defaultVisible: tireField ? tireField.otherDetail : false,
      render({ data }) {
        return (
          <a
            href="#other-detail"
            onClick={() => handleOtherDetailShowModal(data)}
          >
            ดูเพิ่มเติม
          </a>
        )
      }
    },
    {
      id: 'editTire',
      header: 'จัดการ',
      textAlign: 'center',
      minWidth: 370,
      render({ data }) {
        return (
          <div>
            <Button
              variant="link"
              className="mr-1"
              onClick={() => {
                handleAddTire(data)
              }}
            >
              เพิ่มสินค้า
            </Button>
            <Button
              variant="link"
              className="mr-1"
              onClick={() => {
                handleSellTire(data)
              }}
            >
              ขาย
            </Button>
            <Button
              variant="link"
              onClick={() => {
                handleHistoryTire(data)
              }}
            >
              ประวัติ
            </Button>
            <Button
              variant="link"
              onClick={() => {
                if (editDetail) {
                  editDetail({ id: data.id, data })
                }
              }}
            >
              แก้ไข
            </Button>
          </div>
        )
      }
    }
    // {
    //   name: 'monthOfManufacture',
    //   header: 'เดือนที่ผลิต',
    //   textAlign: 'center',
    //   defaultVisible: tireField ? tireField.monthOfManufacture : false,
    // },
    // {
    //   name: 'yearOfManufacture',
    //   header: 'ปีที่ผลิต',
    //   textAlign: 'center',
    //   defaultVisible: tireField ? tireField.yearOfManufacture : false,
    // },
  ]

  return (
    <div>
      <ReactDataGrid
        columns={columns}
        dataSource={lists}
        defaultFilterValue={filterValue}
        enableSelection={false}
        style={gridStyle}
        defaultLimit={20}
        pagination="local"
      />

      <OtherDetail
        isShow={showOtherDetailModal}
        isClose={() => setShowOtherDetailModal(false)}
        source={otherDetail}
      />

      <AddItem
        type="tire"
        isShow={showAddItem}
        isClose={() => setShowAddItem(false)}
        updateDetail={updateDetail}
        source={selectDetail}
      />

      <Sell
        type="tire"
        isShow={showSellProduct}
        isClose={() => setShowSellProduct(false)}
        updateDetail={updateDetail}
        source={selectDetail}
      />

      <History
        type="tire"
        isShow={showHistory}
        isClose={() => setShowHistory(false)}
        source={selectDetail}
      />
    </div>
  )
}

export default TireTable
