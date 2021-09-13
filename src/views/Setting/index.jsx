import React, { useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import { get, set } from 'local-storage'
import { Button, Col, Form, Row, Tabs, Tab } from 'react-bootstrap'

// Components
import CustomTireField from '../Tire/Column/list'
import CustomAlloyField from '../Alloy/Column/list'

const SettingPage = ({ anchor }) => {
  const { addToast } = useToasts()

  const [apiKey, setApiKey] = useState('')
  const [authDomain, setAuthDomain] = useState('')
  const [projectId, setProjectId] = useState('')
  const [storageBucket, setStorageBucket] = useState('')
  const [messagingSenderId, setMessagingSenderId] = useState('')
  const [appId, setAppId] = useState('')
  const [measurementId, setMeasurementId] = useState('')
  const [validated, setValidated] = useState(false)

  const handleSaveDatabase = event => {
    setValidated(false)

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      setValidated(true)
    } else {
      event.preventDefault()
      set <
        string >
        ('firebase',
        JSON.stringify({
          apiKey,
          authDomain,
          projectId,
          storageBucket,
          messagingSenderId,
          appId,
          measurementId
        }))

      addToast('บันทึกเรียบร้อยแล้ว', {
        appearance: 'success',
        autoDismiss: true
      })
    }
  }

  const handleSaveColumnConfig = () => {
    window.location.reload()
  }

  useEffect(() => {
    const fbData = get('firebase')
    if (fbData) {
      const firebase = JSON.parse(fbData)
      setApiKey(firebase.apiKey)
      setAuthDomain(firebase.authDomain)
      setProjectId(firebase.projectId)
      setStorageBucket(firebase.storageBucket)
      setMessagingSenderId(firebase.messagingSenderId)
      setAppId(firebase.appId)
      setMeasurementId(firebase.measurementId)
    }
  }, [])

  return (
    <div id="setting" className="container-fluid mx-auto">
      <div className="content">
        <div className="content-title">
          <h3>ตั้งค่า</h3>
        </div>
        <div className="content-body">
          <Tabs defaultActiveKey={anchor || 'column'}>
            <Tab eventKey="column" title="ตั้งค่าคอลัมน์เริ่มต้น">
              <div>
                <Row className="mt-4">
                  <Col>
                    <fieldset>
                      <legend>ยางรถยนต์</legend>
                      <CustomTireField />
                    </fieldset>
                  </Col>
                  <Col>
                    <fieldset>
                      <legend>ล้อแม็ก</legend>
                      <CustomAlloyField />
                    </fieldset>
                  </Col>
                </Row>
                <Row className="text-center my-3">
                  <Col>
                    <Button
                      variant="primary"
                      onClick={() => handleSaveColumnConfig()}
                    >
                      บันทึก
                    </Button>
                  </Col>
                </Row>
              </div>
            </Tab>
            <Tab eventKey="database" title="เชื่อมต่อฐานข้อมูล">
              <Row className="justify-content-md-center my-3">
                <Col md={6}>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSaveDatabase}
                  >
                    <Form.Group controlId="formApiKey">
                      <Form.Label>Api Key</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Api Key"
                        value={apiKey}
                        onChange={e => setApiKey(e.target.value)}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        ใส่ข้อมูล Api Key
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="forAuthDomain">
                      <Form.Label>Auth Domain</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Auth Domain"
                        value={authDomain}
                        onChange={e => setAuthDomain(e.target.value)}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        ใส่ข้อมูล Auth Domain
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formProjectId">
                      <Form.Label>Project ID</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Project ID"
                        value={projectId}
                        onChange={e => setProjectId(e.target.value)}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        ใส่ข้อมูล Project ID
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formStorageBucket">
                      <Form.Label>Storage Bucket</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Storage Bucket"
                        value={storageBucket}
                        onChange={e => setStorageBucket(e.target.value)}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        ใส่ข้อมูล Storage Bucket
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formMessagingSenderId">
                      <Form.Label>Messaging Sender ID</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Messaging Sender ID"
                        value={messagingSenderId}
                        onChange={e => setMessagingSenderId(e.target.value)}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        ใส่ข้อมูล Messaging Sender ID
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formAppId">
                      <Form.Label>App ID</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="App ID"
                        value={appId}
                        onChange={e => setAppId(e.target.value)}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        ใส่ข้อมูล App ID
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formMeasurementId">
                      <Form.Label>Measurement ID</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Measurement ID"
                        value={measurementId}
                        onChange={e => setMeasurementId(e.target.value)}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        ใส่ข้อมูล Measurement ID
                      </Form.Control.Feedback>
                    </Form.Group>
                    <div className="text-right">
                      <Button type="submit" variant="primary">
                        บันทึก
                      </Button>
                    </div>
                  </Form>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default SettingPage
