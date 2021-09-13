import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { get } from 'local-storage'
import { Button, ButtonGroup, Col, Form, Row, Tab, Tabs } from 'react-bootstrap'

import { db } from '../../actions/firebase'

import SellTable from './sell-table'
import BuyTable from './buy-table'

// export interface ReportPageProps {}

const ReportPage = () => {
  const [reportType, setReportType] = useState('tire')
  const [buyLists, setBuyLists] = useState([])
  const [sellLists, setSellLists] = useState([])
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [validated, setValidated] = useState(false)

  const getSellTransactionTire = () => {
    let tireLists = []

    db.collection('tire')
      .get()
      .then(querySnapshot => {
        if (querySnapshot) {
          const { docs } = querySnapshot
          const list = docs.map(tire => {
            return {
              id: tire.id,
              ...tire.data()
            }
          })
          tireLists = list
        }

        return true
      })

    db.collection('transaction_sell_tire')
      .where('createdAt', '>=', moment(startDate).format('DD/MM/YYYY'))
      .where('createdAt', '<=', moment(endDate).format('DD/MM/YYYY'))
      .get()
      .then(querySnapshot => {
        if (querySnapshot) {
          const { docs } = querySnapshot
          const list = docs.map(tireData => {
            const tlr = tireLists.find(
              data => data.id === tireData.data().tire_id
            )

            return {
              id: tireData.id,
              ...tireData.data(),
              tire: tlr
            }
          })

          setSellLists(list)
        }

        return true
      })
  }

  const getBuyTransactionTire = () => {
    let tireLists = []

    db.collection('tire')
      .get()
      .then(querySnapshot => {
        if (querySnapshot) {
          const { docs } = querySnapshot
          const list = docs.map(tire => {
            return {
              id: tire.id,
              ...tire.data()
            }
          })
          tireLists = list
        }

        return true
      })

    db.collection('transaction_buy_tire')
      .where('createdAt', '>=', moment(startDate).format('DD/MM/YYYY'))
      .where('createdAt', '<=', moment(endDate).format('DD/MM/YYYY'))
      .get()
      .then(querySnapshot => {
        if (querySnapshot) {
          const { docs } = querySnapshot
          const list = docs.map(tireData => {
            const tlr = tireLists.find(
              data => data.id === tireData.data().tire_id
            )

            return {
              id: tireData.id,
              ...tireData.data(),
              tire: tlr
            }
          })

          setBuyLists(list)
        }

        return true
      })
  }

  const getSellTransactionAlloy = () => {
    let alloyLists = []

    db.collection('alloy')
      .get()
      .then(querySnapshot => {
        if (querySnapshot) {
          const { docs } = querySnapshot
          const list = docs.map(tire => {
            return {
              id: tire.id,
              ...tire.data()
            }
          })
          alloyLists = list
        }

        return true
      })

    db.collection('transaction_sell_alloy')
      .where('createdAt', '>=', moment(startDate).format('DD/MM/YYYY'))
      .where('createdAt', '<=', moment(endDate).format('DD/MM/YYYY'))
      .get()
      .then(querySnapshot => {
        if (querySnapshot) {
          const { docs } = querySnapshot
          const list = docs.map(alloyData => {
            const tlr = alloyLists.find(
              data => data.id === alloyData.data().alloy_id
            )

            return {
              id: alloyData.id,
              ...alloyData.data(),
              alloy: tlr
            }
          })

          setSellLists(list)
        }

        return true
      })
  }

  const getBuyTransactionAlloy = () => {
    let alloyLists = []

    db.collection('alloy')
      .get()
      .then(querySnapshot => {
        if (querySnapshot) {
          const { docs } = querySnapshot
          const list = docs.map(tire => {
            return {
              id: tire.id,
              ...tire.data()
            }
          })
          alloyLists = list
        }

        return true
      })

    db.collection('transaction_buy_alloy')
      .where('createdAt', '>=', moment(startDate).format('DD/MM/YYYY'))
      .where('createdAt', '<=', moment(endDate).format('DD/MM/YYYY'))
      .get()
      .then(querySnapshot => {
        if (querySnapshot) {
          const { docs } = querySnapshot
          const list = docs.map(alloyData => {
            const tlr = alloyLists.find(
              data => data.id === alloyData.data().alloy_id
            )

            return {
              id: alloyData.id,
              ...alloyData.data(),
              alloy: tlr
            }
          })

          setBuyLists(list)
        }

        return true
      })
  }

  const handleStartDate = date => {
    if (date <= endDate) {
      setStartDate(date)
    } else {
      setStartDate(endDate)
    }
  }

  const handleEndDate = date => {
    if (date >= startDate) {
      setEndDate(date)
    } else {
      setEndDate(startDate)
    }
  }

  const handleSelectType = t => {
    setReportType(t)
    setBuyLists([])
    setSellLists([])

    if (t === 'tire') {
      getSellTransactionTire()
      getBuyTransactionTire()
    } else {
      getSellTransactionAlloy()
      getBuyTransactionAlloy()
    }
  }

  const handleSubmitSearch = event => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
      setValidated(true)
    } else if (reportType === 'tire') {
      getSellTransactionTire()
      getBuyTransactionTire()
    } else {
      getSellTransactionAlloy()
      getBuyTransactionAlloy()
    }
  }

  useEffect(() => {
    const loadData = () => {
      const cp = get('current-page')
      if (cp === 'report') {
        getSellTransactionAlloy()
        getBuyTransactionAlloy()
      }
    }

    loadData()
  }, [])

  return (
    <div id="alloy" className="container-fluid mx-auto">
      <div className="content">
        <div className="content-title">
          <Row>
            <Col md={2} lg={2}>
              <h3>รายงาน</h3>
            </Col>
            <Col
              md={10}
              lg={10}
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center'
              }}
            >
              <ButtonGroup className="mr-2">
                <Button
                  variant={
                    reportType === 'tire' ? 'primary' : 'outline-primary'
                  }
                  onClick={() => handleSelectType('tire')}
                >
                  ยางรถยนต์
                </Button>
                <Button
                  variant={
                    reportType === 'alloy' ? 'primary' : 'outline-primary'
                  }
                  onClick={() => handleSelectType('alloy')}
                >
                  ล้อแม็ก
                </Button>
              </ButtonGroup>
              <Form inline validated={validated} onSubmit={handleSubmitSearch}>
                <Form.Group>
                  <DatePicker
                    className="form-control mr-2"
                    placeholderText="จากวันที่"
                    dateFormat="dd/MM/yyyy"
                    maxDate={new Date()}
                    selected={startDate}
                    onChange={date => handleStartDate(date)}
                  />
                  <DatePicker
                    className="form-control mr-2"
                    placeholderText="ถึงวันที่"
                    dateFormat="dd/MM/yyyy"
                    maxDate={new Date()}
                    selected={endDate}
                    onChange={date => handleEndDate(date)}
                  />
                </Form.Group>
                <Button type="submit" variant="primary">
                  Search
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
        <div className="content-body">
          <Tabs defaultActiveKey="sell" id="uncontrolled-tab-example">
            <Tab eventKey="sell" title="ขายสินค้า">
              <SellTable lists={sellLists} type={reportType} />
            </Tab>
            <Tab eventKey="buy" title="ซื้อสินค้า">
              <BuyTable lists={buyLists} type={reportType} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default ReportPage
