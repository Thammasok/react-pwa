import React from 'react'

// Pages & Components
import Sidebar from './Sidebar'
import AlertConnectDatabase from '../components/Alert/Connect-database'

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div className="view-wrapper">
        <AlertConnectDatabase />
        {children}
        {/* <div>
          {currentPage === 'home' ? <Home /> : null}
          {currentPage === 'tire' ? <Tire /> : null}
          {currentPage === 'alloy' ? <Alloy /> : null}
          {currentPage === 'report' ? <Report /> : null}
          {currentPage === 'setting' ? <Setting anchor={anchor} /> : null}
        </div> */}
      </div>
    </div>
  )
}

export default Layout
