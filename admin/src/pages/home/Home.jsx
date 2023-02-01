import React from 'react'
import Navbar from '../../assets/components/navbar/Navbar'
import Sidebar from '../../assets/components/sidebar/Sidebar'
import Widget from '../../assets/components/widget/Widget'
import Featured from '../../assets/components/featured/Featured'
import Chart from '../../assets/components/chart/Chart'

export const Home = () => {
  return (
    <>
    <div className='flex'>
    <Sidebar />
      <div className='flex-1'>
        <Navbar />
        <div className='flex p-5 gap-5'>
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
          <Widget type=""/>
        </div>
        <div>
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
    </>
  )
}
