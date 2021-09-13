import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

import { db } from '../../actions/firebase'
import AlloyTable from '../Alloy/table'
import TireTable from '../Tire/table'

// export interface HomePageProps {}

const HomePage = () => {
  const [searchType, setSearchType] = useState('tire')
  const [keyword, setKeyword] = useState('')
  const [resultLists, setResultLists] = useState([])

  const handleSearch = () => {
    db.collection(searchType)
      .where('brand', '==', keyword)
      .get()
      .then(querySnapshot => {
        if (querySnapshot) {
          const { docs } = querySnapshot
          const lists = docs.map(detail => {
            return {
              id: detail.id,
              ...detail.data()
            }
          })
          console.log('lists', lists)
          setResultLists(lists)
        }
      })
      .catch(errors => {
        // eslint-disable-next-line no-console
        console.log('errors', errors)
      })
  }

  return (
    <div id="home" className="container-fluid mx-auto">
      <div className="content">
        <div className="content-title text-center">
          <h3>ค้นหา</h3>
        </div>
        <div className="content-body text-center">
          <Row className="justify-content-md-center">
            <Col xs md={10} lg={5}>
              <Form onSubmit={handleSearch}>
                <div className="mb-3">
                  <Form.Check
                    id="type-search-tire"
                    name="typeTire"
                    type="radio"
                    label="ยางรถยนต์"
                    value="tire"
                    onChange={e => setSearchType(e.target.value)}
                    checked={searchType === 'tire'}
                    inline
                  />
                  <Form.Check
                    id="type-search-alloy"
                    name="typeAlloy"
                    type="radio"
                    label="ล้อแม็ก"
                    value="alloy"
                    onChange={e => setSearchType(e.target.value)}
                    checked={searchType === 'alloy'}
                    inline
                  />
                </div>
                <Form.Row className="mb-2">
                  <Col className="text-left">
                    <Form.Control
                      type="text"
                      placeholder="คำค้นหา"
                      value={keyword}
                      onChange={e => setKeyword(e.target.value)}
                    />
                  </Col>
                </Form.Row>
                <Button variant="primary" type="submit">
                  ค้นหา
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
      <div className="content">
        <div className="content-title text-center">
          <h3>ผลการค้นหา</h3>
        </div>
        <div className="content-body">
          {searchType === 'tire' ? (
            <TireTable lists={resultLists} isEdit={false} editDetail={null} />
          ) : null}

          {searchType === 'alloy' ? (
            <AlloyTable lists={resultLists} isEdit={false} editDetail={null} />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default HomePage
