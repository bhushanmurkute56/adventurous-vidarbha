import React from 'react'

function Buttons({title, className}) {
  return (
    <div>
        <button className={`${className} border border-orange-300 h-12 w-full rounded-lg text-orange-500 bg-white/70 font-semibold my-1 cursor-pointer transition-all duration-200 hover:bg-orange-200 hover:text-white hover:border-orange-500 shadow-sm`}>{title}</button>
    </div>
  )
}

export default Buttons;