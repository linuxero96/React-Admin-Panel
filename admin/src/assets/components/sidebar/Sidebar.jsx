import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import StoreIcon from '@mui/icons-material/Store'
import InsertChartIcon from '@mui/icons-material/InsertChart'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'

function Sidebar () {
  return (
    <div className='bg-white flex-none border-r-2 border-black-500 min-h-screen'>
        <div className='h-12 flex-none items-center justify-center'>
            <span className='text-xl font-bold text-black'>Andres Diaz</span>
        </div>
        <hr className='h-0 border border-black-500' />
        <div className='pl-2'>
            <ul className='m-0 p-0 list-none'>
                <p className='text-xs font-bold text-gray-600 mt-4 mb-1'>MAIN</p>
                <li className='flex items-center p-1 cursor-pointer hover:bg-gray-300'>
                    <DashboardIcon className='text-lg text-gray-800'/>
                    <span className='text-xs font-semibold text-gray-600 ml-2'>Dashboard</span>
                </li>
                <p className='text-xs font-bold text-gray-600 mt-4 mb-1'>LIST</p>
                <li className='flex items-center p-1 cursor-pointer hover:bg-gray-300'>
                    <PersonOutlineIcon className='text-lg text-gray-800'/>
                    <span className='text-xs font-semibold text-gray-600 ml-2'>Users</span>
                </li>
                <li className='flex items-center p-1 cursor-pointer hover:bg-gray-300'>
                    <StoreIcon className='text-lg text-gray-800'/>
                    <span className='text-xs font-semibold text-gray-600 ml-2'>Products</span>
                </li>
                <li className='flex items-center p-1 cursor-pointer hover:bg-gray-300'>
                    <CreditCardIcon className='text-lg text-gray-800'/>
                    <span className='text-xs font-semibold text-gray-600 ml-2'>Orders</span>
                </li>
                <li className='flex items-center p-1 cursor-pointer hover:bg-gray-300'>
                    <LocalShippingIcon className='text-lg text-gray-800'/>
                    <span className='text-xs font-semibold text-gray-600 ml-2'>Delivery</span>
                </li>
                <p className='text-xs font-bold text-gray-600 mt-4 mb-1'>USEFUL</p>
                <li className='flex items-center p-1 cursor-pointer hover:bg-gray-300'>
                    <InsertChartIcon className='text-lg text-gray-800'/>
                    <span className='text-xs font-semibold text-gray-600 ml-2'>Stats</span>
                </li>
                <li className='flex items-center p-1 cursor-pointer hover:bg-gray-300'>
                    <NotificationsNoneIcon className='text-lg text-gray-800'/>
                    <span className='text-xs font-semibold text-gray-600 ml-2'>Notifications</span>
                </li>
                <p className='text-xs font-bold text-gray-600 mt-4 mb-1'>USER</p>
                <li className='flex items-center p-1 cursor-pointer hover:bg-gray-300'>
                    <AccountCircleOutlinedIcon className='text-lg text-gray-800'/>
                    <span className='text-xs font-semibold text-gray-600 ml-2'>Profile</span>
                </li>
                <li className='flex items-center p-1 cursor-pointer hover:bg-gray-300'>
                    <ExitToAppIcon className='text-lg text-gray-800'/>
                    <span className='text-xs font-semibold text-gray-600 ml-2'>Logout</span>
                </li>
            </ul>
        </div>
        <div className='flex items-center m-2'>
            <div className='w-5 h-5 b-0 m-2 cursor-poiner border border-gray-500 bg-white'></div>
            <div className='w-5 h-5 b-0 m-2 cursor-poiner border border-gray-500 bg-gray-500'></div>
        </div>
    </div>
  )
}

export default Sidebar
