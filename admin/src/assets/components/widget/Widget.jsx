import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'

const Widget = ({ type }) => {
  let data
  const amount = 100
  const diff = 20
  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
        icon: (
            <PersonOutlinedIcon
              className='text-lg p-1 rounded self-end text-red-400 bg-red-200'
            />
        )
      }
      break
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'View all orders',
        icon: (
            <ShoppingCartOutlinedIcon
            className='text-lg p-1 rounded self-end text-yellow-400 bg-yellow-200'
            />
        )
      }
      break
    case 'earning':
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: 'View net earnings',
        icon: (
            <MonetizationOnOutlinedIcon
            className='text-lg p-1 rounded self-end text-blue-400 bg-blue-200'
            />
        )
      }
      break
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'See details',
        icon: (
            <AccountBalanceWalletOutlinedIcon
            className='text-lg p-1 rounded self-end text-green-400 bg-green-200'
            />
        )
      }
      break
    default: return 'Widget no encontrado'
  }

  return (
    <div className='flex flex-1 p-2 justify-between rounded-xl shadow-md h-28'>
        <div className='flex flex-col justify-between'>
            <span className='text-bold text-sm text-gray-400'>{data.title}</span>
            <span className='text-3xl font-light'>{data.isMoney && '$'}{amount}</span>
            <span className='max-w-max text-xs border-2 border-white border-b-gray-300'>{data.link}</span>
        </div>
        <div className='flex flex-col justify-between'>
            <div className='flex items-center text-sm'>
                <KeyboardArrowUpIcon />
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget
