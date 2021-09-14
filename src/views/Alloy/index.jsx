import React, { useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import { get, set } from 'local-storage'
import { Button, Col, Row } from 'react-bootstrap'

import { db } from '../../actions/Firebase'

import AlloyTable from './table'
import NewAlloy from './new-alloy'
import UpdateAlloy from './update-alloy'
// import CustomColumn from './Column';

// export interface AlloyPageProps {}

const AlloyPage = () => {
  const { addToast } = useToasts()
  const [alloyLists, setAlloyLists] = useState([])
  const [showNewAlloyModal, setShowNewAlloyModal] = useState(false)
  const [showUpdateAlloyModal, setShowUpdateAlloyModal] = useState(false)
  const [updateData, setUpdateData] = useState(null)
  // const [showColumnModal, setShowColumnModal] = useState(false);

  const handleUpdateAlloyShowModal = data => {
    setUpdateData(data)
    setShowUpdateAlloyModal(true)
  }

  const getAlloy = () => {
    db.collection('alloy')
      .get()
      .then(querySnapshot => {
        if (querySnapshot) {
          const { docs } = querySnapshot
          const lists = docs.map(alloy => {
            return {
              id: alloy.id,
              ...alloy.data()
            }
          })
          set < string > ('alloy-lists', JSON.stringify(lists))
          setAlloyLists(lists)
        }

        return true
      })
  }

  const submitForm = data => {
    db.collection('alloy')
      .add(data)
      .then(() => {
        // (docRef) console.log('docRef', docRef.id);
        setShowNewAlloyModal(false)
        addToast('บันทึกเรียบร้อยแล้ว', {
          appearance: 'success',
          autoDismiss: true
        })

        getAlloy()

        return true
      })
      .catch(() => {
        // error console.error('Error adding document: ', error);
        setShowNewAlloyModal(false)
        addToast('เกิดข้อผิดพลาด ไม่สามารถบันทึกข้อมูลได้', {
          appearance: 'error',
          autoDismiss: true
        })
      })
  }

  const submitFormUpdate = ({ id, data }) => {
    const alloyRef = db.collection('alloy').doc(id)

    alloyRef
      .update(data)
      .then(() => {
        // then((docRef)
        setShowUpdateAlloyModal(false)
        addToast('บันทึกเรียบร้อยแล้ว', {
          appearance: 'success',
          autoDismiss: true
        })

        getAlloy()

        return true
      })
      .catch(() => {
        // catch((error)
        setShowUpdateAlloyModal(false)
        addToast('เกิดข้อผิดพลาด ไม่สามารถบันทึกข้อมูลได้', {
          appearance: 'error',
          autoDismiss: true
        })
      })
  }

  useEffect(() => {
    const loadData = () => {
      const cp = get('current-page')
      const alLocal = get('alloy-lists')

      if (cp === 'alloy') {
        if (alLocal) {
          setAlloyLists(JSON.parse(alLocal))
        }
        getAlloy()
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
              <h3>ล้อแม็ก</h3>
            </Col>
            <Col md={10} lg={10} className="text-right">
              {/* <Button
                variant="outline-primary"
                className="mr-2"
                onClick={() => setShowColumnModal(true)}
              >
                กำหนดคอลัมน์เริ่มต้น
              </Button> */}
              <Button
                variant="primary"
                onClick={() => setShowNewAlloyModal(true)}
              >
                เพิ่มข้อมูล
              </Button>
            </Col>
          </Row>
        </div>
        <div className="content-body">
          <AlloyTable
            lists={alloyLists}
            showEditDetail={handleUpdateAlloyShowModal}
            updateDetail={submitFormUpdate}
          />
        </div>
      </div>

      {/* <CustomColumn
        isShow={showColumnModal}
        isClose={() => setShowColumnModal(false)}
      /> */}

      <NewAlloy
        isShow={showNewAlloyModal}
        isClose={() => setShowNewAlloyModal(false)}
        submit={submitForm}
      />

      <UpdateAlloy
        isShow={showUpdateAlloyModal}
        isClose={() => setShowUpdateAlloyModal(false)}
        data={updateData}
        submit={submitFormUpdate}
      />
    </div>
  )
}

export default AlloyPage
