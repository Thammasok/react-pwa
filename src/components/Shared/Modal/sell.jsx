import React, { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { useToasts } from 'react-toast-notifications'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'

import { db } from '../../../actions/firebase'
import moneyFormat from '../../../actions/money-format'

import MiniInfo from '../Mini-info'

const SellItem = ({ isShow, isClose, type, source, updateDetail }) => {
  const { addToast } = useToasts()
  const defaultNumberFormat = {
    formattedValue: '',
    floatValue: '',
    value: ''
  }

  const [amount, setAmount] = useState(defaultNumberFormat)
  const [price, setPrice] = useState(defaultNumberFormat)
  const [priceType, setPriceType] = useState('retail')
  const [sellDate, setSellDate] = useState(new Date())
  const [validated, setValidated] = useState(false)

  const handleSelectPriceType = pt => {
    setPriceType(pt)
    if (pt === 'retail') {
      setPrice({
        formattedValue: source.priceRetail,
        floatValue: source.priceRetail,
        value: source.priceRetail
      })
    } else if (pt === 'delivery') {
      setPrice({
        formattedValue: source.priceDelivery,
        floatValue: source.priceDelivery,
        value: source.priceDelivery
      })
    } else {
      setPrice(defaultNumberFormat)
    }
  }

  const handleSubmitSellProduct = event => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
      setValidated(true)
    } else {
      const totalAmount =
        parseInt(source.amount, 10) - parseInt(amount.value, 10)
      const totalPrice = price.value * amount.value

      setValidated(false)
      isClose()

      // Add Transactions
      if (type === 'alloy') {
        db.collection('transaction_sell_alloy')
          .add({
            alloy_id: source.id,
            type: priceType,
            amount: amount.value,
            price: price.value,
            total: totalPrice.toString(),
            createdAt: moment(sellDate).format('DD/MM/YYYY')
          })
          .then(() => {
            updateDetail({
              id: source.id,
              data: {
                ...source,
                type: priceType,
                amount: totalAmount.toString(),
                price: totalPrice.toString()
              }
            })
            return true
          })
          .catch(() => {
            addToast('เกิดข้อผิดพลาด ไม่สามารถบันทึกข้อมูลได้', {
              appearance: 'error',
              autoDismiss: true
            })
          })
      }

      if (type === 'tire') {
        db.collection('transaction_sell_tire')
          .add({
            tire_id: source.id,
            type: priceType,
            amount: amount.value,
            price: price.value,
            total: totalPrice.toString(),
            createdAt: moment(sellDate).format('DD/MM/YYYY')
          })
          .then(() => {
            updateDetail({
              id: source.id,
              data: {
                ...source,
                type: priceType,
                amount: totalAmount.toString(),
                price: totalPrice.toString()
              }
            })
            return true
          })
          .catch(() => {
            addToast('เกิดข้อผิดพลาด ไม่สามารถบันทึกข้อมูลได้', {
              appearance: 'error',
              autoDismiss: true
            })
          })
      }
    }
  }

  const init = () => {
    setValidated(false)
    setAmount(defaultNumberFormat)
    setSellDate(new Date())
    setPriceType('retail')

    if (source) {
      setPrice({
        formattedValue: source.priceRetail,
        floatValue: source.priceRetail,
        value: source.priceRetail
      })
    }
  }

  useEffect(() => {
    init()
  }, [isShow])

  return (
    <Modal
      show={isShow}
      onHide={isClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form noValidate validated={validated} onSubmit={handleSubmitSellProduct}>
        <Modal.Header closeButton>
          <Modal.Title>ตัดสต๊อกสินค้า</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>{source ? <MiniInfo data={source} /> : null}</div>
          <hr />

          <Form.Group>
            <Form.Check
              id="price-retail"
              type="radio"
              label="ราคาขายปลีก"
              onChange={() => handleSelectPriceType('retail')}
              checked={priceType === 'retail'}
              inline
            />
            <Form.Check
              id="price-delivery"
              type="radio"
              label="ราคาขายส่ง"
              onChange={() => handleSelectPriceType('delivery')}
              checked={priceType === 'delivery'}
              inline
            />
            <Form.Check
              id="price-custom"
              type="radio"
              label="กำหนดราคาขายเอง"
              onChange={() => handleSelectPriceType('custom')}
              checked={priceType === 'custom'}
              inline
            />
          </Form.Group>
          <Form.Group className={priceType !== 'custom' ? 'd-none' : ''}>
            <Form.Label>ราคาที่ขาย</Form.Label>
            <NumberFormat
              className="form-control"
              placeholder="ราคาที่ขาย"
              thousandSeparator
              fixedDecimalScale
              decimalScale={2}
              value={price.formattedValue}
              onValueChange={values => setPrice(values)}
              required
            />
            <Form.Control.Feedback type="invalid">
              ใส่ข้อมูลราคาที่ขาย
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>จำนวนที่ขาย</Form.Label>
            <NumberFormat
              className="form-control"
              placeholder="จำนวนที่ขาย"
              thousandSeparator
              fixedDecimalScale={false}
              decimalScale={0}
              value={amount.formattedValue}
              onValueChange={values => {
                const { value } = values
                if (parseInt(value, 10) > parseInt(source.amount, 10)) {
                  setAmount({
                    formattedValue: source.amount,
                    floatValue: source.amount,
                    value: source.amount
                  })
                } else {
                  setAmount(values)
                }
              }}
              required
            />
            <Form.Control.Feedback type="invalid">
              ใส่ข้อมูลจำนวนที่ขาย
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>วันที่ขาย</Form.Label>
            <DatePicker
              className="form-control"
              dateFormat="dd/MM/yyyy"
              maxDate={new Date()}
              selected={sellDate}
              onChange={date => setSellDate(date)}
            />
          </Form.Group>

          <hr />
          <Row>
            <Col>
              <h5>ราคารวม:</h5>
            </Col>
            <Col className="text-right">
              <h5>
                {moneyFormat({
                  number: (price.value * amount.value).toString(),
                  isDecimal: true
                })}
              </h5>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => isClose()}>
            ปิด
          </Button>
          <Button type="submit" variant="primary">
            บันทึก
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default SellItem
