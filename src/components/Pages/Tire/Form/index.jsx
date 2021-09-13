import React, { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format'
import { Button, Col, Form, Modal } from 'react-bootstrap'

const TireFrom = ({ action, data, handleClose, submitForm }) => {
  const defaultNumberFormat = {
    formattedValue: '',
    floatValue: '',
    value: ''
  }

  const [tireId, setTireId] = useState('')
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [wheelDiameter, setWheelDiameter] = useState(defaultNumberFormat)
  const [sidewallHeight, setSidewallHeight] = useState(defaultNumberFormat)
  const [typeOfTire, setTypeOfTire] = useState('R')
  const [tireWidth, setTireWidth] = useState(defaultNumberFormat)
  const [payload, setPayload] = useState(defaultNumberFormat)
  const [rateOfSpeed, setRateOfSpeed] = useState('W')
  const [monthOfManufacture, setMonthOfManufacture] = useState('')
  const [yearOfManufacture, setYearOfManufacture] = useState('')
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
        tireNumber: `${tireWidth.value}/${sidewallHeight.value} ${typeOfTire}${wheelDiameter.value} ${payload.value}${rateOfSpeed}`,
        wheelDiameter: wheelDiameter.value,
        sidewallHeight: sidewallHeight.value,
        typeOfTire,
        tireWidth: tireWidth.value,
        payload: payload.value,
        rateOfSpeed,
        manufacture: `${monthOfManufacture}/${yearOfManufacture}`,
        monthOfManufacture,
        yearOfManufacture,
        otherDetail,
        cost: cost.value,
        priceDelivery: priceDelivery.value,
        priceRetail: priceRetail.value,
        amount: amount.value
      })
    } else {
      submitForm({
        id: tireId,
        data: {
          brand,
          model,
          tireNumber: `${tireWidth.value}/${sidewallHeight.value} ${typeOfTire}${wheelDiameter.value} ${payload.value}${rateOfSpeed}`,
          wheelDiameter: wheelDiameter.value,
          sidewallHeight: sidewallHeight.value,
          typeOfTire,
          tireWidth: tireWidth.value,
          payload: payload.value,
          rateOfSpeed,
          manufacture: `${monthOfManufacture}/${yearOfManufacture}`,
          monthOfManufacture,
          yearOfManufacture,
          otherDetail,
          cost: cost.value,
          priceDelivery: priceDelivery.value,
          priceRetail: priceRetail.value,
          amount: amount.value
        }
      })
    }
  }

  const generateYear = () => {
    const offset = 15
    const yearLists = []
    const newYear = new Date().getFullYear()
    for (let i = newYear; i >= newYear - offset; i -= 1) {
      yearLists.push(
        <option key={`year-${i}`} value={i}>
          {i}
        </option>
      )
    }

    return yearLists
  }

  useEffect(() => {
    if (data) {
      setTireId(data.id)
      setBrand(data.data.brand)
      setModel(data.data.model)
      setWheelDiameter({
        formattedValue: data.data.wheelDiameter,
        floatValue: data.data.wheelDiameter,
        value: data.data.wheelDiameter
      })
      setSidewallHeight({
        formattedValue: data.data.sidewallHeight,
        floatValue: data.data.sidewallHeight,
        value: data.data.sidewallHeight
      })
      setTypeOfTire(data.data.typeOfTire)
      setTireWidth({
        formattedValue: data.data.tireWidth,
        floatValue: data.data.tireWidth,
        value: data.data.tireWidth
      })
      setPayload({
        formattedValue: data.data.payload,
        floatValue: data.data.payload,
        value: data.data.payload
      })
      setRateOfSpeed(data.data.rateOfSpeed)
      setMonthOfManufacture(data.data.monthOfManufacture)
      setYearOfManufacture(data.data.yearOfManufacture)
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
              <Form.Label>จำนวนยาง</Form.Label>
              <NumberFormat
                className="form-control"
                placeholder="จำนวนยาง"
                thousandSeparator
                fixedDecimalScale={false}
                decimalScale={0}
                value={amount.formattedValue}
                onValueChange={values => setAmount(values)}
                required
              />
              <Form.Control.Feedback type="invalid">
                ใส่ข้อมูลจำนวนยาง
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
        </fieldset>

        <fieldset>
          <legend>ข้อมูลยาง:</legend>
          <Form.Row>
            <Form.Group as={Col} md="4">
              <Form.Label>ความกว้าง (มม.)</Form.Label>
              <NumberFormat
                className="form-control"
                placeholder="ความกว้าง (มม.)"
                thousandSeparator
                fixedDecimalScale={false}
                decimalScale={0}
                value={tireWidth.formattedValue}
                onValueChange={values => setTireWidth(values)}
                required
              />
              <Form.Control.Feedback type="invalid">
                ใส่ข้อมูลความกว้าง (มม.)
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>แก้มยาง</Form.Label>
              <NumberFormat
                className="form-control"
                placeholder="แก้มยาง"
                thousandSeparator
                fixedDecimalScale
                decimalScale={2}
                value={sidewallHeight.formattedValue}
                onValueChange={values => setSidewallHeight(values)}
                required
              />
              <Form.Control.Feedback type="invalid">
                ใส่ข้อมูลแก้มยาง
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>เส้นผ่าศูนย์กลาง (นิ้ว)</Form.Label>
              <NumberFormat
                className="form-control"
                placeholder="เส้นผ่าศูนย์กลาง (นิ้ว)"
                fixedDecimalScale={false}
                decimalScale={0}
                value={wheelDiameter.formattedValue}
                onValueChange={values => setWheelDiameter(values)}
                required
              />
              <Form.Control.Feedback type="invalid">
                ใส่ข้อมูลเส้นผ่าศูนย์กลาง (นิ้ว)
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4">
              <Form.Label>ชนิดของยาง</Form.Label>
              <Form.Control
                type="text"
                placeholder="ชนิดของยาง"
                value={typeOfTire}
                onChange={e => setTypeOfTire(e.target.value.toUpperCase())}
                required
              />
              <Form.Control.Feedback type="invalid">
                ใส่ข้อมูลชนิดของยาง
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>ดัชนีบรรทุก</Form.Label>
              <NumberFormat
                className="form-control"
                placeholder="ดัชนีบรรทุก"
                thousandSeparator
                fixedDecimalScale
                decimalScale={2}
                value={payload.formattedValue}
                onValueChange={values => setPayload(values)}
                required
              />
              <Form.Control.Feedback type="invalid">
                ใส่ข้อมูลดัชนีบรรทุก
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>ความเร็วสูงสุด</Form.Label>
              <Form.Control
                type="text"
                placeholder="ความเร็วสูงสุด"
                value={rateOfSpeed}
                onChange={e => setRateOfSpeed(e.target.value.toUpperCase())}
                required
              />
              <Form.Control.Feedback type="invalid">
                ใส่ข้อมูลความเร็วสูงสุด
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4">
              <Form.Label>เดือนที่ผลิต</Form.Label>
              <Form.Control
                as="select"
                placeholder="เดือนที่ผลิต"
                value={monthOfManufacture}
                onChange={e => setMonthOfManufacture(e.target.value)}
                required
              >
                <option value="">เลือกเดือนที่ผลิต</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                ใส่ข้อมูลเดือนที่ผลิต
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>ปีที่ผลิต</Form.Label>
              <Form.Control
                as="select"
                placeholder="เดือนที่ผลิต"
                value={yearOfManufacture}
                onChange={e => setYearOfManufacture(e.target.value)}
                required
              >
                <option value="">เลือกปีที่ผลิต</option>
                {generateYear()}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                ใส่ข้อมูลปีที่ผลิต
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>อื่นๆ (Optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="อื่นๆ"
                value={otherDetail}
                onChange={e => setOtherDetail(e.target.value)}
              />
            </Form.Group>
          </Form.Row>
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

export default TireFrom
