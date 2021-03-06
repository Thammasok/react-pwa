import React, { useState } from 'react'
import { get, set } from 'local-storage'
import { Form } from 'react-bootstrap'

const fieldAlloy = JSON.parse(get('field_alloy'))

const List = () => {
  const [visible, setVisible] = useState({
    brand: fieldAlloy ? fieldAlloy.brand : true,
    model: fieldAlloy ? fieldAlloy.model : true,
    rimSize: fieldAlloy ? fieldAlloy.rimSize : true,
    alloyWidth: fieldAlloy ? fieldAlloy.alloyWidth : true,
    holeSize: fieldAlloy ? fieldAlloy.holeSize : true,
    numberOfHoles: fieldAlloy ? fieldAlloy.numberOfHoles : true,
    offset: fieldAlloy ? fieldAlloy.offset : true,
    color: fieldAlloy ? fieldAlloy.color : true,
    amount: fieldAlloy ? fieldAlloy.amount : true,
    cost: fieldAlloy ? fieldAlloy.cost : true,
    priceDelivery: fieldAlloy ? fieldAlloy.priceDelivery : true,
    priceRetail: fieldAlloy ? fieldAlloy.priceRetail : true,
    otherDetail: fieldAlloy ? fieldAlloy.otherDetail : true
  })

  const handleVisible = event => {
    const { id } = event.target
    const newVisible = visible

    if (id === 'brand') {
      newVisible.brand = !visible.brand
    } else if (id === 'model') {
      newVisible.model = !visible.model
    } else if (id === 'rimSize') {
      newVisible.rimSize = !visible.rimSize
    } else if (id === 'alloyWidth') {
      newVisible.alloyWidth = !visible.alloyWidth
    } else if (id === 'holeSize') {
      newVisible.holeSize = !visible.holeSize
    } else if (id === 'numberOfHoles') {
      newVisible.numberOfHoles = !visible.numberOfHoles
    } else if (id === 'offset') {
      newVisible.offset = !visible.offset
    } else if (id === 'color') {
      newVisible.color = !visible.color
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

    set < string > ('field_alloy', JSON.stringify(newVisible))
    setVisible(newVisible)
  }

  return (
    <div>
      <Form.Check
        type="checkbox"
        id="brand"
        label="??????????????????"
        onChange={handleVisible}
        defaultChecked={visible.brand}
        custom
      />
      <Form.Check
        type="checkbox"
        id="model"
        label="????????????"
        onChange={handleVisible}
        defaultChecked={visible.model}
        custom
      />
      <Form.Check
        type="checkbox"
        id="color"
        label="?????? / ?????????"
        onChange={handleVisible}
        defaultChecked={visible.color}
        custom
      />
      <Form.Check
        type="checkbox"
        id="rimSize"
        label="?????????????????????"
        onChange={handleVisible}
        defaultChecked={visible.rimSize}
        custom
      />
      <Form.Check
        type="checkbox"
        id="alloyWidth"
        label="???????????????????????????"
        onChange={handleVisible}
        defaultChecked={visible.alloyWidth}
        custom
      />
      <Form.Check
        type="checkbox"
        id="holeSize"
        label="??????????????????"
        onChange={handleVisible}
        defaultChecked={visible.holeSize}
        custom
      />
      <Form.Check
        type="checkbox"
        id="numberOfHoles"
        label="?????????????????????"
        onChange={handleVisible}
        defaultChecked={visible.numberOfHoles}
        custom
      />
      <Form.Check
        type="checkbox"
        id="offset"
        label="?????????????????????"
        onChange={handleVisible}
        defaultChecked={visible.offset}
        custom
      />
      <Form.Check
        type="checkbox"
        id="amount"
        label="?????????????????????????????????"
        onChange={handleVisible}
        defaultChecked={visible.amount}
        custom
      />
      <Form.Check
        type="checkbox"
        id="cost"
        label="??????????????????????????????"
        onChange={handleVisible}
        defaultChecked={visible.cost}
        custom
      />
      <Form.Check
        type="checkbox"
        id="priceDelivery"
        label="??????????????????????????????"
        onChange={handleVisible}
        defaultChecked={visible.priceDelivery}
        custom
      />
      <Form.Check
        type="checkbox"
        id="priceRetail"
        label="????????????????????????????????????"
        onChange={handleVisible}
        defaultChecked={visible.priceRetail}
        custom
      />
      <Form.Check
        type="checkbox"
        id="otherDetail"
        label="???????????????"
        onChange={handleVisible}
        defaultChecked={visible.otherDetail}
        custom
      />
    </div>
  )
}

export default List
