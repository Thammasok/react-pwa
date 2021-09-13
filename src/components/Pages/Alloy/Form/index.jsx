import React, { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format'
import { Button, Col, Form, Modal } from 'react-bootstrap'

const AlloyFrom = ({ action, data, handleClose, submitForm }) => {
  const defaultNumberFormat = {
    formattedValue: '',
    floatValue: '',
    value: ''
  }

  const [alloyId, setAlloyId] = useState('')
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [rimSize, setRimSize] = useState(defaultNumberFormat)
  const [alloyWidth, setAlloyWidth] = useState(defaultNumberFormat)
  const [holeSize, setHoleSize] = useState(defaultNumberFormat)
  const [numberOfHoles, setNumberOfHoles] = useState(defaultNumberFormat)
  const [offset, setOffset] = useState(defaultNumberFormat)
  const [color, setColor] = useState('')
  const [otherDetail, setOtherDetail] = useState('')
  const [cost, setCost] = useState(defaultNumberFormat)
  const [priceDelivery, setPriceDelivery] = useState(defaultNumberFormat)
  const [priceRetail, setPriceRetail] = useState(defaultNumberFormat)
  const [amount, setAmount] = useState(defaultNumberFormat)
  const [validated, setValidated] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
      setValidated(true)
    } else if (action === 'add') {
      submitForm({
        brand,
        model,
        rimSize: rimSize.value,
        alloyWidth: alloyWidth.value,
        holeSize: holeSize.value,
        numberOfHoles: numberOfHoles.value,
        offset: offset.value,
        color,
        otherDetail,
        cost: cost.value,
        priceDelivery: priceDelivery.value,
        priceRetail: priceRetail.value,
        amount: amount.value
      })
    } else {
      submitForm({
        id: alloyId,
        data: {
          brand,
          model,
          rimSize: rimSize.value,
          alloyWidth: alloyWidth.value,
          holeSize: holeSize.value,
          numberOfHoles: numberOfHoles.value,
          offset: offset.value,
          color,
          otherDetail,
          cost: cost.value,
          priceDelivery: priceDelivery.value,
          priceRetail: priceRetail.value,
          amount: amount.value
        }
      })
    }
  }

  useEffect(() => {
    if (data) {
      setAlloyId(data.id)
      setBrand(data.data.brand)
      setModel(data.data.model)
      setRimSize({
        formattedValue: data.data.rimSize,
        floatValue: data.data.rimSize,
        value: data.data.rimSize
      })
      setAlloyWidth({
        formattedValue: data.data.alloyWidth,
        floatValue: data.data.alloyWidth,
        value: data.data.alloyWidth
      })
      setHoleSize({
        formattedValue: data.data.holeSize,
        floatValue: data.data.holeSize,
        value: data.data.holeSize
      })
      setNumberOfHoles({
        formattedValue: data.data.numberOfHoles,
        floatValue: data.data.numberOfHoles,
        value: data.data.numberOfHoles
      })
      setOffset({
        formattedValue: data.data.offset,
        floatValue: data.data.offset,
        value: data.data.offset
      })
      setColor(data.data.color)
      setOtherDetail(data.data.otherDetail)
      setCost({
        formattedValue: data.data.cost,
        floatValue: data.data.cost,
        value: data.data.cost
      })
      setPriceDelivery({
        formattedValue: data.data.priceDelivery,
        floatValue: data.data.priceDelivery,
        value: data.data.priceDelivery
      })
      setPriceRetail({
        formattedValue: data.data.priceRetail,
        floatValue: data.data.priceRetail,
        value: data.data.priceRetail
      })
      setAmount({
        formattedValue: data.data.amount,
        floatValue: data.data.amount,
        value: data.data.amount
      })
    }
  }, [data])

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Modal.Header closeButton>
        <Modal.Title>
          {action === 'add' ? 'เพิ่มข้อมูลยางรถยนต์' : 'แก้ไขข้อมูลยางรถยนต์'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <fieldset className="mt-3">
          <legend>ข้อมูลสินค้า:</legend>
          <Form.Row>
            <Form.Group as={Col} md={6}>
              <Form.Label>แบรนด์</Form.Label>
              <Form.Control
                type="text"
                placeholder="แบรนด์"
                value={brand}
                onChange={e => setBrand(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                ใส่ข้อมูลแบรนด์
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md={6}>
              <Form.Label>รุ่น</Form.Label>
              <Form.Control
                type="text"
                placeholder="รุ่น"
                value={model}
                onChange={e => setModel(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                ใส่ข้อมูลรุ่น
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>จำนวนสินค้า</Form.Label>
              <NumberFormat
                className="form-control"
                placeholder="จำนวนสินค้า"
                thousandSeparator
                fixedDecimalScale={false}
                decimalScale={0}
                value={amount.formattedValue}
                onValueChange={values => setAmount(values)}
                required
              />
              <Form.Control.Feedback type="invalid">
                ใส่ข้อมูลจำนวนสินค้า
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
        </fieldset>

        <fieldset>
          <legend>ข้อมูลล้อแม็ก:</legend>
          <Form.Row>
            <Form.Group as={Col} md="4">
              <Form.Label>ขนาดขอบ (นิ้ว)</Form.Label>
              <NumberFormat
                className="form-control"
                placeholder="ขนาดขอบ (นิ้ว)"
                thousandSeparator
                fixedDecimalScale
                decimalScale={2}
                value={rimSize.formattedValue}
                onValueChange={values => setRimSize(values)}
                required
              />
              <Form.Control.Feedback type="invalid">
                ใส่ข้อมูลขนาดขอบ (นิ้ว)
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>ความกว้าง (นิ้ว)</Form.Label>
              <NumberFormat
                className="form-control"
                placeholder="ความกว้าง (นิ้ว)"
                thousandSeparator
                fixedDecimalScale
                decimalScale={2}
                value={alloyWidth.formattedValue}
                onValueChange={values => setAlloyWidth(values)}
                required
              />
              <Form.Control.Feedback type="invalid">
                ใส่ข้อมูลความกว้าง (นิ้ว)
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>ขนาดรู</Form.Label>
              <NumberFormat
                className="form-control"
                placeholder="ขนาดรู"
                fixedDecimalScale
                decimalScale={2}
                value={holeSize.formattedValue}
                onValueChange={values => setHoleSize(values)}
                required
              />
              <Form.Control.Feedback type="invalid">
                ใส่ข้อมูลขนาดรู
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4">
              <Form.Label>จำนวนรู</Form.Label>
              <NumberFormat
                className="form-control"
                placeholder="จำนวนรู"
                fixedDecimalScale={false}
                decimalScale={0}
                maxLength={10}
                value={numberOfHoles.formattedValue}
                onValueChange={values => setNumberOfHoles(values)}
                required
              />
              <Form.Control.Feedback type="invalid">
                ใส่ข้อมูลจำนวนรู
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>ออฟเซ็ต (มม.)</Form.Label>
              <NumberFormat
                className="form-control"
                placeholder="ออฟเซ็ต"
                fixedDecimalScale={false}
                decimalScale={0}
                value={offset.formattedValue}
                onValueChange={values => setOffset(values)}
                required
              />
              <Form.Control.Feedback type="invalid">
                ใส่ข้อมูลออฟเซ็ต
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>สี/ลาย</Form.Label>
              <Form.Control
                type="text"
                placeholder="สี/ลาย"
                value={color}
                onChange={e => setColor(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                ใส่ข้อมูลสี/ลาย
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Label>อื่นๆ</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="อื่นๆ"
              value={otherDetail}
              onChange={e => setOtherDetail(e.target.value)}
            />
          </Form.Group>
        </fieldset>

        <fieldset>
          <legend>ราคา:</legend>
          <Form.Row>
            <Form.Group as={Col} md="4">
              <Form.Label>ราคาต้นทุน</Form.Label>
              <NumberFormat
                className="form-control"
                placeholder="ราคาต้นทุน"
                thousandSeparator
                fixedDecimalScale
                decimalScale={2}
                value={cost.formattedValue}
                onValueChange={values => setCost(values)}
                required
              />
              <Form.Control.Feedback type="invalid">
                ใส่ข้อมูลความกว้าง (มม.)
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>ราคาขายส่ง</Form.Label>
              <NumberFormat
                className="form-control"
                placeholder="ราคาขายส่ง"
                thousandSeparator
                fixedDecimalScale
                decimalScale={2}
                value={priceDelivery.formattedValue}
                onValueChange={values => setPriceDelivery(values)}
                required
              />
              <Form.Control.Feedback type="invalid">
                ใส่ข้อมูลราคาขายส่ง
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>ราคาหน้าร้าน</Form.Label>
              <NumberFormat
                className="form-control"
                placeholder="ราคาหน้าร้าน"
                thousandSeparator
                fixedDecimalScale
                decimalScale={2}
                value={priceRetail.formattedValue}
                onValueChange={values => setPriceRetail(values)}
                required
              />
              <Form.Control.Feedback type="invalid">
                ใส่ข้อมูลราคาหน้าร้าน
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
        </fieldset>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          ปิด
        </Button>
        <Button type="submit" variant="primary">
          {action === 'add' ? 'บันทึกข้อมูล' : 'อัพเดทข้อมูล'}
        </Button>
      </Modal.Footer>
    </Form>
  )
}

export default AlloyFrom
