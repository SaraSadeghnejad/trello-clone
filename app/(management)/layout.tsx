import React, { ReactNode } from 'react'
import { Navbar } from './_components/navbar'
import Footer from './_components/footer'

const ManagementLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className="h-full"><Navbar/><main>{children}</main><Footer /></div>
  )
}

export default ManagementLayout