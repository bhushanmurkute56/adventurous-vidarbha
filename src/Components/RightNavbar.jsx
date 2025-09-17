import React from 'react'
import "./../index.css"
import Buttons from './Buttons';

function RightNavbar() {
  return (
    <div className='min-h-screen w-[270px] min-w-[127px] bg-blue-200 border border-none flex flex-col right-navbar-bg p-5'>
        <Buttons title="Home" className={"mt-50"}></Buttons>
        <Buttons title="Villages"></Buttons>
        <Buttons title="Certificates"></Buttons>
        <Buttons title="Awards"></Buttons>
    </div>
  )
}

export default RightNavbar;