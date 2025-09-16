import React from 'react'
import { Link } from 'react-router'

function Box({boxTitle,to}) {
  return (
    <div>
        <Link to={to} className='h-[200px] w-[200px] border-1 flex items-center justify-center cursor-pointer m-2 rounded-xl card'>{boxTitle}</Link>
    </div>
  )
}

export default Box;