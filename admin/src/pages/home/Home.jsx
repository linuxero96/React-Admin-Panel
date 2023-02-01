import React from 'react'
import Sidebar from '../../assets/components/sidebar/Sidebar'

export const Home = () => {
  return (
    <>
    <div className="flex">
    <Sidebar />
      <div className="bg-blue-700 flex-1">
        Container
      </div>
    </div>
    </>
  )
}
