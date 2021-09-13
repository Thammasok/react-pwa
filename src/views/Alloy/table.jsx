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
const defaultAlloy = {
  id: '',
  brand: '',
  model: '',
  rimSize: '',
  alloyWidth: '',
  holeSize: '',
  numberOfHoles: '',
  offset: '',
  color: '',
  otherDetail: '',
  cost: '',
  priceDelivery: '',
  priceRetail: '',
  amount: ''
}

const AlloyTable = ({ lists, showEditDetail, updateDetail }) => {
  const alloyField = JSON.parse(get('field_alloy'))

  const [showOtherDetailModal, setShowOtherDetailModal] = useState(false)
  const [otherDetail, setOtherDetail] = useState('')
  const [showSellProduct, setShowSellProduct] = useState(false)
  const [showAddItem, setShowAddItem] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [selectDetail, setSelectDetail] = useState(defaultAlloy)

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

  const handleSellAlloy = data => {
    setSelectDetail(data)
    setShowSellProduct(true)
  }

  const handleHistoryAlloy = data => {
    setSelectDetail(data)
    setShowHistory(true)
  }

  const filterValue = [
    { name: 'brand', operator: 'contains', type: 'string', value: '' },
    { name: 'model', operator: 'contains', type: 'string', value: '' },
    { name: 'color', operator: 'contains', type: 'string', value: '' },
    { name: 'rimSize', operator: 'startsWith', type: 'string', value: '' },
    { name: 'alloyWidth', operator: 'startsWith', type: 'string', value: '' },
    { name: 'holeSize', operator: 'startsWith', type: 'string', value: '' },
    {
      name: 'numberOfHoles',
      operator: 'startsWith',
      type: 'string',
      value: ''
    },
    { name: 'offset', operator: 'startsWith', type: 'string', value: '' },
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
  ]

  const columns = [
    {
      name: 'brand',
      header: 'แบรนด์',
      defaultFlex: 1,
      minWidth: 200,
      defaultVisible: alloyField ? alloyField.brand : true
    },
    {
      name: 'model',
      header: 'รุ่น',
      defaultFlex: 1,
      minWidth: 200,
      defaultVisible: alloyField ? alloyField.model : true
    },
    {
      name: 'color',
      header: 'สี / ลาย',
      defaultFlex: 1,
      minWidth: 250,
      textAlign: 'center',
      defaultVisible: alloyField ? alloyField.color : true
    },
    {
      name: 'rimSize',
      header: 'ขนาดขอบ (นิ้ว)',
      textAlign: 'center',
      defaultVisible: alloyField ? alloyField.rimSize : true
    },
    {
      name: 'alloyWidth',
      header: 'ความกว้าง (นิ้ว)',
      textAlign: 'center',
      defaultVisible: alloyField ? alloyField.alloyWidth : true
    },
    {
      name: 'holeSize',
      header: 'ขนาดรู',
      textAlign: 'center',
      defaultVisible: alloyField ? alloyField.holeSize : true
    },
    {
      name: 'numberOfHoles',
      header: 'จำนวนรู',
      textAlign: 'center',
      defaultVisible: alloyField ? alloyField.numberOfHoles : true
    },
    {
      name: 'offset',
      header: 'ออฟเซ็ต (มม.)',
      textAlign: 'center',
      defaultVisible: alloyField ? alloyField.offset : true
    },
    {
      name: 'amount',
      header: 'จำนวนสินค้า',
      defaultWidth: 100,
      textAlign: 'center',
      defaultVisible: alloyField ? alloyField.amount : true
    },
    {
      id: 'cost',
      header: 'ราคาต้นทุน',
      textAlign: 'end',
      defaultVisible: alloyField ? alloyField.cost : true,
      render: ({ data }) => moneyFormat({ number: data.cost, isDecimal: true })
    },
    {
      id: 'priceDelivery',
      header: 'ราคาขายปลีก',
      textAlign: 'end',
      defaultVisible: alloyField ? alloyField.priceDelivery : true,
      render: ({ data }) =>
        moneyFormat({ number: data.priceDelivery, isDecimal: true })
    },
    {
      id: 'priceRetail',
      header: 'ราคาขายส่ง',
      textAlign: 'end',
      defaultVisible: alloyField ? alloyField.priceRetail : true,
      render: ({ data }) =>
        moneyFormat({ number: data.priceRetail, isDecimal: true })
    },
    {
      name: 'otherDetail',
      header: 'อื่นๆ',
      textAlign: 'center',
      defaultVisible: alloyField ? alloyField.otherDetail : true,
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
                handleSellAlloy(data)
              }}
            >
              ขาย
            </Button>
            <Button
              variant="link"
              onClick={() => {
                handleHistoryAlloy(data)
              }}
            >
              ประวัติ
            </Button>
            <Button
              variant="link"
              className="mr-1"
              onClick={() => {
                if (showEditDetail) {
                  showEditDetail({ id: data.id, data })
                }
              }}
            >
              แก้ไข
            </Button>
          </div>
        )
      }
    }
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
        type="alloy"
        isShow={showAddItem}
        isClose={() => setShowAddItem(false)}
        updateDetail={updateDetail}
        source={selectDetail}
      />

      <Sell
        type="alloy"
        isShow={showSellProduct}
        isClose={() => setShowSellProduct(false)}
        updateDetail={updateDetail}
        source={selectDetail}
      />

      <History
        type="alloy"
        isShow={showHistory}
        isClose={() => setShowHistory(false)}
        source={selectDetail}
      />
    </div>
  )
}

export default AlloyTable
