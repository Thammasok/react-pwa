import React, { useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import { get, set } from 'local-storage'
import { Button, Col, Row } from 'react-bootstrap'

import { db } from '../../actions/firebase'

// Components
import TireTable from './table'
import NewTire from './new-tire'
import UpdateTire from './update-tire'
// import CustomColumn from './Column';
// export interface TirePageProps {}

const TirePage = () => {
  const { addToast } = useToasts()
  const [tireLists, setTireLists] = useState([])
  const [showNewTireModal, setShowNewTireModal] = useState(false)
  const [showUpdateTireModal, setShowUpdateTireModal] = useState(false)
  const [updateData, setUpdateData] = useState(null)
  // const [showColumnModal, setShowColumnModal] = useState(false);

  const handleUpdateTireShowModal = data => {
    setUpdateData(data)
    setShowUpdateTireModal(true)
  }

  const getTire = () => {
    db.collection('tire')
      .get()
      .then(querySnapshot => {
        if (querySnapshot) {
          const { docs } = querySnapshot
          const lists = docs.map(tire => {
            return {
              id: tire.id,
              ...tire.data()
            }
          })
          set < string > ('tire-lists', JSON.stringify(lists))
          setTireLists(lists)
        }

        return true
      })
  }

  const submitForm = data => {
    db.collection('tire')
      .add(data)
      .then(() => {
        // console.log('docRef', docRef.id);
        addToast('บันทึกเรียบร้อยแล้ว', {
          appearance: 'success',
          autoDismiss: true
        })
        setShowNewTireModal(false)

        getTire()

        return true
      })
      .catch(() => {
        // console.error('Error adding document: ', error);
        addToast('เกิดข้อผิดพลาด ไม่สามารถบันทึกข้อมูลได้', {
          appearance: 'error',
          autoDismiss: true
        })
        setShowNewTireModal(false)
      })
  }

  const submitFormUpdate = ({ id, data }) => {
    const tireRef = db.collection('tire').doc(id)

    tireRef
      .update(data)
      .then(() => {
        setShowUpdateTireModal(false)
        addToast('บันทึกเรียบร้อยแล้ว', {
          appearance: 'success',
          autoDismiss: true
        })

        getTire()

        return true
      })
      .catch(() => {
        setShowUpdateTireModal(false)
        addToast('เกิดข้อผิดพลาด ไม่สามารถบันทึกข้อมูลได้', {
          appearance: 'error',
          autoDismiss: true
        })
      })
  }

  useEffect(() => {
    const cp = get('current-page')
    const tlLocal = get('tire-lists')

    if (cp === 'tire') {
      if (tlLocal) {
        setTireLists(JSON.parse(tlLocal))
      }
      getTire()
    }
  }, [])

  return (
    <div id="tire" className="container-fluid mx-auto">
      <div className="content">
        <div className="content-title">
          <Row>
            <Col md={6} lg={4}>
              <h3>ยางรถยนต์</h3>
            </Col>
            <Col md={6} lg={8} className="text-right">
              {/* <Button
                variant="outline-primary"
                className="mr-2"
                onClick={() => setShowColumnModal(true)}
              >
                กำหนดคอลัมน์เริ่มต้น
              </Button> */}
              <Button
                variant="primary"
                onClick={() => setShowNewTireModal(true)}
              >
                เพิ่มข้อมูล
              </Button>
            </Col>
          </Row>
        </div>
        <div className="content-body">
          <TireTable
            lists={tireLists}
            editDetail={handleUpdateTireShowModal}
            updateDetail={submitFormUpdate}
          />
        </div>
      </div>

      {/* <CustomColumn
        isShow={showColumnModal}
        isClose={() => setShowColumnModal(false)}
      /> */}

      <NewTire
        isShow={showNewTireModal}
        isClose={() => setShowNewTireModal(false)}
        submit={submitForm}
      />

      <UpdateTire
        isShow={showUpdateTireModal}
        isClose={() => setShowUpdateTireModal(false)}
        data={updateData}
        submit={submitFormUpdate}
      />
    </div>
  )
}

export default TirePage
