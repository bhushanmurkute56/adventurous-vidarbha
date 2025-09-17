import React from 'react'
import { Link } from 'react-router'

function Box({boxTitle,to}) {
  return (
    <div>
        <Link to={to} className=' flex justify-center items-center w-40 h-40 shadow-xl p-5 cursor-pointer rounded-xl bg-white'>{boxTitle}</Link>
    </div>
  )
}

export default Box;