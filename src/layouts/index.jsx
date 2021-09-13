import React, { useEffect, useState } from 'react'
import { get, set } from 'local-storage'

// Pages & Components
import Sidebar from './Sidebar'
import AlertConnectDatabase from '../components/Alert/Connect-database'
import Tire from '../views/Tire'
import Alloy from '../views/Alloy'
import Report from '../views/Report'
import Setting from '../views/Setting'

// export interface LayoutProps {
//   children: JSX.Element;
// }

const Layout = () => {
  const [currentPage, setCurrentPage] = useState('tire')
  const [anchor, setAnchor] = useState('')

  const handleRouter = data => {
    set('current-page', data.page)
    set('current-anchor', data.anchor || '')
    setCurrentPage(data.page)
    setAnchor(data.anchor ? data.anchor : '')
  }

  useEffect(() => {
    setCurrentPage(get('current-page'))
    setAnchor(get('current-anchor'))
  }, [])

  return (
    <div>
      <Sidebar currentPage={currentPage} handleRouter={handleRouter} />
      <div className="view-wrapper">
        <AlertConnectDatabase handleRouter={handleRouter} />
        <div>
          {/* {currentPage === 'home' ? <Home /> : null} */}
          {currentPage === 'tire' ? <Tire /> : null}
          {currentPage === 'alloy' ? <Alloy /> : null}
          {currentPage === 'report' ? <Report /> : null}
          {currentPage === 'setting' ? <Setting anchor={anchor} /> : null}
        </div>
      </div>
    </div>
  )
}

export default Layout
