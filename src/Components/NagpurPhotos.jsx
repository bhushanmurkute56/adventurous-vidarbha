import React from 'react'

function NagpurPhotos({title,img}) {
  return (
    <div className='cursor-pointer'>
        <img src= {img} alt="" className='h-30 w-30 sm:h-40 sm:w-40 md:h-50 md:w-50 lg:h-60 lg:w-65 rounded-xl m-2'/>
        <p className='text-center text-orange-600 mt-3'>{title}</p>
    </div>
  )
}

export default NagpurPhotos;