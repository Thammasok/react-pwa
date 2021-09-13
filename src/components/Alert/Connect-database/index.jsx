import React, { useEffect, useState } from 'react'
import { get } from 'local-storage'
import { Alert } from 'react-bootstrap'

const ConnectDatabase = ({ handleRouter }) => {
  const [isConnectDatabase, setIsConnectDatabase] = useState(false)

  useEffect(() => {
    const firebase = get('firebase')
    setIsConnectDatabase(!!firebase)
  }, [])

  return (
    <div className="container-fluid">
      <Alert show={!isConnectDatabase} variant="danger">
        <Alert.Heading>แจ้งเตือน</Alert.Heading>
        <div>
          {`ยังไม่ได้ตั้งค่าการเชื่อมต่อฐานข้อมูล `}
          <a
            href="#database"
            onClick={() =>
              handleRouter({
                page: 'setting',
                anchor: 'database'
              })
            }
          >
            ตั้งค่าเดี๋ยวนี้
          </a>
        </div>
      </Alert>
    </div>
  )
}

export default ConnectDatabase
