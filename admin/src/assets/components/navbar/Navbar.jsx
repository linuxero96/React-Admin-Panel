import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined'

function Navbar () {
  return (
    <div className='h-12 flex items-center text-sm text-gray-600 border-2 border-white border-b-gray-300'>
      <div className='w-full p-5 flex items-center justify-between'>
        <div className='flex items-center p-1 border-2 border-b-gray-300'>
          <input className="border-0 outline-none bg-transparent placeholder:text-sm" type="text" placeholder='Search...'/>
          <SearchOutlinedIcon />
        </div>
        <div className='flex items-center'>
          <div className='flex items-center mx-5 relative'>
            <LanguageOutlinedIcon className='text-sm'/>
            English
          </div>
          <div className='flex items-center mx-5 relative'>
            <DarkModeOutlinedIcon className='text-sm'/>
          </div>
          <div className='flex items-center mx-5 relative'>
            <FullscreenExitOutlinedIcon className='text-sm'/>
          </div>
          <div className='flex items-center mx-5 relative'>
            <NotificationsNoneOutlinedIcon className='text-sm'/>
            <div className='w-4 h-4 bg-red-700 text-white flex items-center justify-center font-bold absolute rounded-3xl text-xs -top-1 -right-1'>1</div>
          </div>
          <div className='flex items-center mx-5 relative'>
            <ChatBubbleOutlineOutlinedIcon className='text-sm'/>
            <div className='w-4 h-4 bg-red-700 text-white flex items-center justify-center font-bold absolute rounded-3xl text-xs -top-1 -right-1'>2</div>
          </div>
          <div className='flex items-center mx-5 relative'>
            <ListOutlinedIcon className='text-sm'/>
          </div>
          <div className='flex items-center mx-5 relative'>
            <img className='w-8 h-8 rounded-full'
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=30"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
