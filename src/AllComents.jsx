import React from 'react'

const AllComents = ({imgg,data}) => {
  return (
    <div>
      <ul> 
      <li className='flex flex-row font-bold text-xl'><img src={imgg} className='rounded-full w-10 h-10' alt="" /> {data} </li>

      </ul>
    </div>
  )
}

export default AllComents
