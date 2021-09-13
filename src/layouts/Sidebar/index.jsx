import React, { useEffect } from 'react'
import { get } from 'local-storage'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import {
  Codesandbox,
  Disc,
  FileText,
  Settings
  // Search,
} from 'react-feather'

const Sidebar = ({ currentPage, handleRouter }) => {
  useEffect(() => {
    const cp = get('current-page')

    if (cp) {
      handleRouter({ page: cp })
    } else {
      handleRouter({ page: 'tire' })
    }
  }, [])

  return (
    <div className="main-sidebar">
      <div className="sidebar-inner">
        <ul className="icon-menu">
          {/* <li>
            <a
              href="#home"
              className={currentPage === 'home' ? 'link-active' : ''}
              onClick={() => handleRouter({ page: 'home' })}
            >
              <Search className="sidebar-svg" />
            </a>
          </li> */}
          <li>
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip id="tooltip-tire">ยางรถยนต์</Tooltip>}
            >
              <a
                href="#tire"
                className={currentPage === 'tire' ? 'link-active' : ''}
                onClick={() => handleRouter({ page: 'tire' })}
              >
                <Disc className="sidebar-svg" />
              </a>
            </OverlayTrigger>
          </li>
          <li>
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip id="tooltip-alloy">ล้อแม็ก</Tooltip>}
            >
              <a
                href="#alloy"
                className={currentPage === 'alloy' ? 'link-active' : ''}
                onClick={() => handleRouter({ page: 'alloy' })}
              >
                <Codesandbox className="sidebar-svg" />
              </a>
            </OverlayTrigger>
          </li>
          <li>
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip id="tooltip-report">รายงาน</Tooltip>}
            >
              <a
                href="#report"
                className={currentPage === 'report' ? 'link-active' : ''}
                onClick={() => handleRouter({ page: 'report' })}
              >
                <FileText className="sidebar-svg" />
              </a>
            </OverlayTrigger>
          </li>
          <li>
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip id="tooltip-setting">ตั้งค่า</Tooltip>}
            >
              <a
                href="#setting"
                className={currentPage === 'setting' ? 'link-active' : ''}
                onClick={() => handleRouter({ page: 'setting' })}
              >
                <Settings className="sidebar-svg" />
              </a>
            </OverlayTrigger>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
