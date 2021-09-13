import React from 'react'
import { Row, Col } from 'react-bootstrap'

import moneyFormat from '../../../actions/money-format'

const MiniInfo = ({ data }) => {
  return data ? (
    <Row>
      <Col>
        <p>
          <span className="text-muted">แบรนด์: </span>
          {data.brand}
          <br />
          <span className="text-muted">รุ่น: </span>
          {data.model}
          <br />
          <span className="text-muted">จำนวนทั้งหมด: </span>
          {moneyFormat({
            number: data.amount,
            isDecimal: false
          })}
        </p>
      </Col>
      <Col>
        <p>
          <span className="text-muted">ราคาต้นทุน: </span>
          {moneyFormat({
            number: data.cost,
            isDecimal: true
          })}
          <br />
          <span className="text-muted">ราคาขายปลีก: </span>
          {moneyFormat({
            number: data.priceRetail,
            isDecimal: true
          })}
          <br />
          <span className="text-muted">ราคาขายส่ง: </span>
          {moneyFormat({
            number: data.priceDelivery,
            isDecimal: true
          })}
        </p>
      </Col>
    </Row>
  ) : null
}

export default MiniInfo
