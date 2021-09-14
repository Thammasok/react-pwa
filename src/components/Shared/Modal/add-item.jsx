import React, { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { useToasts } from 'react-toast-notifications'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'

import { db } from '../../../actions/Firebase'
import moneyFormat from '../../../actions/money-format'
import MiniInfo from '../Mini-info'

const AddItem = ({ isShow, isClose, type, source, updateDetail }) => {
  const { addToast } = useToasts()
  const defaultNumberFormat = {
    formattedValue: '',
    floatValue: '',
    value: ''
  }

  const [amount, setAmount] = useState(defaultNumberFormat)
  const [price, setPrice] = useState(defaultNumberFormat)
  const [priceType, setPriceType] = useState('cost')
  const [addDate, setAddDate] = useState(new Date())
  const [validated, setValidated] = useState(false)

  const handleSelectPriceType = pt => {
    setPriceType(pt)
    if (pt === 'cost') {
      setPrice({
        formattedValue: source.cost,
        floatValue: source.cost,
        value: source.cost
      })
    } else {
      setPrice(defaultNumberFormat)
    }
  }

  const handleSubmitAddItem = event => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
      setValidated(true)
    } else {
      const totalAmount =
        parseInt(source.amount, 10) + parseInt(amount.value, 10)
      const totalPrice = price.value * amount.value

      setValidated(false)
      isClose()

      // Add Transactions
      if (type === 'alloy') {
        db.collection('transaction_buy_alloy')
          .add({
            alloy_id: source.id,
            type: priceType,
            amount: amount.value,
            price: price.value,
            total: totalPrice.toString(),
            createdAt: moment(addDate).format('DD/MM/YYYY')
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
        db.collection('transaction_buy_tire')
          .add({
            tire_id: source.id,
            type: priceType,
            amount: amount.value,
            price: price.value,
            total: totalPrice.toString(),
            createdAt: moment(addDate).format('DD/MM/YYYY')
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
    setAddDate(new Date())
    setPriceType('cost')

    if (source) {
      setPrice({
        formattedValue: source.cost,
        floatValue: source.cost,
        value: source.cost
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
      <Form noValidate validated={validated} onSubmit={handleSubmitAddItem}>
        <Modal.Header closeButton>
          <Modal.Title>เพิ่มจำนวนสินค้า</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>{source ? <MiniInfo data={source} /> : null}</div>
          <hr />

          <Form.Group>
            <Form.Check
              id="price-retail"
              type="radio"
              label="ราคาต้นทุน"
              onChange={() => handleSelectPriceType('cost')}
              checked={priceType === 'cost'}
              inline
            />
            <Form.Check
              id="price-custom"
              type="radio"
              label="กำหนดราคาต้นทุนเอง"
              onChange={() => handleSelectPriceType('custom')}
              checked={priceType === 'custom'}
              inline
            />
          </Form.Group>
          <Form.Group className={priceType !== 'custom' ? 'd-none' : ''}>
            <Form.Label>ราคาที่ต้นทุน</Form.Label>
            <NumberFormat
              className="form-control"
              placeholder="ราคาที่ต้นทุน"
              thousandSeparator
              fixedDecimalScale
              decimalScale={2}
              value={price.formattedValue}
              onValueChange={values => setPrice(values)}
              required
            />
            <Form.Control.Feedback type="invalid">
              ใส่ข้อมูลราคาที่ต้นทุน
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>จำนวน</Form.Label>
            <NumberFormat
              className="form-control"
              placeholder="จำนวน"
              thousandSeparator
              fixedDecimalScale={false}
              decimalScale={0}
              value={amount.formattedValue}
              onValueChange={values => {
                setAmount(values)
              }}
              required
            />
            <Form.Control.Feedback type="invalid">
              ใส่ข้อมูลจำนวน
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>วันที่ขาย</Form.Label>
            <DatePicker
              className="form-control"
              dateFormat="dd/MM/yyyy"
              maxDate={new Date()}
              selected={addDate}
              onChange={date => setAddDate(date)}
            />
          </Form.Group>

          <hr />
          <Row>
            <Col>
              <h5>ราคาซื้อรวม:</h5>
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

export default AddItem
