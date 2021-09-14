import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import {
  Codesandbox,
  Disc,
  FileText,
  Settings
  // Search,
} from 'react-feather'

const Sidebar = () => {
  const url = window.location.pathname
  const menu = url.split('/')

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
                href="/tire"
                className={menu[1] === 'tire' ? 'link-active' : ''}
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
                href="/alloy"
                className={menu[1] === 'alloy' ? 'link-active' : ''}
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
                href="/report"
                className={menu[1] === 'report' ? 'link-active' : ''}
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
                href="/setting"
                className={menu[1] === 'setting' ? 'link-active' : ''}
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
