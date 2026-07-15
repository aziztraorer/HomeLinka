import React from 'react'

function Headeritems({name,Icon}) {
  return (
    <div className='text-white flex items-center gap-3 
    '>
      <Icon />
      <h2 className='text-white text-[18px] font-semibold cursor-pointer'>{name}</h2>
    </div>
  )
}

export default Headeritems
