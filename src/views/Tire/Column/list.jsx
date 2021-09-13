import React, { useState } from 'react'
import { get, set } from 'local-storage'
import { Form } from 'react-bootstrap'

const fieldTire = JSON.parse(get('field_tire'))

const List = () => {
  const [visible, setVisible] = useState({
    brand: fieldTire ? fieldTire.brand : true,
    model: fieldTire ? fieldTire.model : true,
    tireNumber: fieldTire ? fieldTire.tireNumber : true,
    tireWidth: fieldTire ? fieldTire.tireWidth : false,
    sidewallHeight: fieldTire ? fieldTire.sidewallHeight : false,
    wheelDiameter: fieldTire ? fieldTire.wheelDiameter : false,
    typeOfTire: fieldTire ? fieldTire.typeOfTire : false,
    payload: fieldTire ? fieldTire.payload : false,
    rateOfSpeed: fieldTire ? fieldTire.rateOfSpeed : false,
    manufacture: fieldTire ? fieldTire.manufacture : false,
    amount: fieldTire ? fieldTire.amount : true,
    cost: fieldTire ? fieldTire.cost : true,
    priceDelivery: fieldTire ? fieldTire.priceDelivery : true,
    priceRetail: fieldTire ? fieldTire.priceRetail : true,
    otherDetail: fieldTire ? fieldTire.otherDetail : false
    // monthOfManufacture: fieldTire ? fieldTire.monthOfManufacture : false,
    // yearOfManufacture: fieldTire ? fieldTire.yearOfManufacture : false,
  })

  const handleVisible = e => {
    const { id } = e.target
    const newVisible = visible

    if (id === 'brand') {
      newVisible.brand = !visible.brand
    } else if (id === 'model') {
      newVisible.model = !visible.model
    } else if (id === 'tireNumber') {
      newVisible.tireNumber = !visible.tireNumber
    } else if (id === 'tireWidth') {
      newVisible.tireWidth = !visible.tireWidth
    } else if (id === 'sidewallHeight') {
      newVisible.sidewallHeight = !visible.sidewallHeight
    } else if (id === 'wheelDiameter') {
      newVisible.wheelDiameter = !visible.wheelDiameter
    } else if (id === 'typeOfTire') {
      newVisible.typeOfTire = !visible.typeOfTire
    } else if (id === 'payload') {
      newVisible.payload = !visible.payload
    } else if (id === 'rateOfSpeed') {
      newVisible.rateOfSpeed = !visible.rateOfSpeed
    } else if (id === 'manufacture') {
      newVisible.manufacture = !visible.manufacture
    } else if (id === 'amount') {
      newVisible.amount = !visible.amount
    } else if (id === 'cost') {
      newVisible.cost = !visible.cost
    } else if (id === 'priceDelivery') {
      newVisible.priceDelivery = !visible.priceDelivery
    } else if (id === 'priceRetail') {
      newVisible.priceRetail = !visible.priceRetail
    } else if (id === 'otherDetail') {
      newVisible.otherDetail = !visible.otherDetail
    }

    // else if (id === 'monthOfManufacture') {
    //   newVisible.monthOfManufacture = !visible.monthOfManufacture;
    // } else if (id === 'yearOfManufacture') {
    //   newVisible.yearOfManufacture = !visible.yearOfManufacture;
    // }

    set < string > ('field_tire', JSON.stringify(newVisible))
    setVisible(newVisible)
  }

  return (
    <div>
      <Form.Check
        type="checkbox"
        id="brand"
        label="แบรนด์"
        onChange={handleVisible}
        defaultChecked={visible.brand}
        custom
      />
      <Form.Check
        type="checkbox"
        id="model"
        label="รุ่น"
        onChange={handleVisible}
        defaultChecked={visible.model}
        custom
      />
      <Form.Check
        type="checkbox"
        id="tireNumber"
        label="เบอร์ยาง"
        onChange={handleVisible}
        defaultChecked={visible.tireNumber}
        custom
      />
      <Form.Check
        type="checkbox"
        id="tireWidth"
        label="ความกว้าง"
        onChange={handleVisible}
        defaultChecked={visible.tireWidth}
        custom
      />
      <Form.Check
        type="checkbox"
        id="sidewallHeight"
        label="แก้มยาง"
        onChange={handleVisible}
        defaultChecked={visible.sidewallHeight}
        custom
      />
      <Form.Check
        type="checkbox"
        id="wheelDiameter"
        label="เส้นผ่าศูนย์กลาง"
        onChange={handleVisible}
        defaultChecked={visible.wheelDiameter}
        custom
      />
      <Form.Check
        type="checkbox"
        id="typeOfTire"
        label="ชนิดยาง"
        onChange={handleVisible}
        defaultChecked={visible.typeOfTire}
        custom
      />
      <Form.Check
        type="checkbox"
        id="payload"
        label="ดัชนีบรรทุก"
        onChange={handleVisible}
        defaultChecked={visible.payload}
        custom
      />
      <Form.Check
        type="checkbox"
        id="rateOfSpeed"
        label="ความเร็วสูงสุด"
        onChange={handleVisible}
        defaultChecked={visible.rateOfSpeed}
        custom
      />
      <Form.Check
        type="checkbox"
        id="manufacture"
        label="เดือนปีที่ผลิต"
        onChange={handleVisible}
        defaultChecked={visible.manufacture}
        custom
      />
      {/* <Form.Check
        type="checkbox"
        id="monthOfManufacture"
        label="เดือนที่ผลิต"
        onChange={handleVisible}
        defaultChecked={visible.monthOfManufacture}
        custom
      />
      <Form.Check
        type="checkbox"
        id="yearOfManufacture"
        label="ปีที่ผลิต"
        onChange={handleVisible}
        defaultChecked={visible.yearOfManufacture}
        custom
      /> */}
      <Form.Check
        type="checkbox"
        id="cost"
        label="ราคาต้นทุน"
        onChange={handleVisible}
        defaultChecked={visible.cost}
        custom
      />
      <Form.Check
        type="checkbox"
        id="priceDelivery"
        label="ราคาขายส่ง"
        onChange={handleVisible}
        defaultChecked={visible.priceDelivery}
        custom
      />
      <Form.Check
        type="checkbox"
        id="priceRetail"
        label="ราคาหน้าร้าน"
        onChange={handleVisible}
        defaultChecked={visible.priceRetail}
        custom
      />
      <Form.Check
        type="checkbox"
        id="amount"
        label="จำนวน"
        onChange={handleVisible}
        defaultChecked={visible.amount}
        custom
      />
      <Form.Check
        type="checkbox"
        id="otherDetail"
        label="อื่นๆ"
        onChange={handleVisible}
        defaultChecked={visible.otherDetail}
        custom
      />
    </div>
  )
}

export default List
