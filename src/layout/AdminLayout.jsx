import React from 'react'
import Sidebar from '../pages/admin/Sidebar'

const AdminLayout = (props) => {
  return (
    <div className='d-flex'>
      <Sidebar/>
      <main className='dash'>
        {props.children}
      </main>
    </div>
  )
}
export default AdminLayout