import React from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'

import moneyFormat from '../../actions/money-format'

const gridStyle = { height: 'calc(100vh - 125px)' }

const BuyTable = ({ lists, type }) => {
  // ReactDataGrid Columns
  const columnsAlloy = [
    {
      name: 'brand',
      header: 'สินค้า',
      group: 'detail',
      defaultFlex: 1,
      render: ({ data }) => {
        if (data.alloy) {
          return `${data.alloy.brand}: ${data.alloy.model}`
        }
        return ''
      }
    },
    {
      name: 'color',
      header: 'สี',
      group: 'detail',
      defaultFlex: 1,
      render: ({ data }) => {
        if (data.alloy) {
          return data.alloy.color
        }
        return ''
      }
    },
    {
      name: 'createdAt',
      header: 'วันที่ซื้อ',
      textAlign: 'center'
    },
    {
      name: 'price',
      header: 'ราคาต่อหน่วย',
      textAlign: 'end',
      render: ({ data }) => moneyFormat({ number: data.price, isDecimal: true })
    },
    {
      name: 'amount',
      header: 'จำนวน',
      textAlign: 'center',
      render: ({ data }) =>
        moneyFormat({ number: data.amount, isDecimal: false })
    },
    {
      name: 'total',
      header: 'ราคารวม',
      textAlign: 'end',
      render: ({ data }) => moneyFormat({ number: data.total, isDecimal: true })
    }
  ]

  const columnsTire = [
    {
      name: 'brand',
      header: 'สินค้า',
      group: 'detail',
      defaultFlex: 1,
      render: ({ data }) => {
        if (data.tire) {
          return `${data.tire.brand}: ${data.tire.model}`
        }
        return ''
      }
    },
    {
      name: 'tireNumber',
      header: 'เบอร์ยาง',
      group: 'detail',
      defaultFlex: 1,
      render: ({ data }) => {
        if (data.tire) {
          return `${data.tire.tireNumber}`
        }
        return ''
      }
    },
    {
      name: 'manufacture',
      header: 'เดือนปีที่ผลิต',
      group: 'detail',
      render: ({ data }) => {
        if (data.tire) {
          return `${data.tire.manufacture}`
        }
        return ''
      }
    },
    {
      name: 'createdAt',
      header: 'วันที่ซื้อ',
      textAlign: 'center'
    },
    {
      name: 'price',
      header: 'ราคาต่อหน่วย',
      textAlign: 'end',
      render: ({ data }) => moneyFormat({ number: data.price, isDecimal: true })
    },
    {
      name: 'amount',
      header: 'จำนวน',
      textAlign: 'center',
      render: ({ data }) =>
        moneyFormat({ number: data.amount, isDecimal: false })
    },
    {
      name: 'total',
      header: 'ราคารวม',
      textAlign: 'end',
      render: ({ data }) => moneyFormat({ number: data.total, isDecimal: true })
    }
  ]

  const groups = [{ name: 'detail', header: 'รายการ' }]

  return (
    <div>
      <ReactDataGrid
        columns={type === 'tire' ? columnsTire : columnsAlloy}
        groups={groups}
        dataSource={lists || []}
        enableSelection={false}
        style={gridStyle}
        defaultLimit={20}
        pagination="local"
      />
    </div>
  )
}

export default BuyTable
