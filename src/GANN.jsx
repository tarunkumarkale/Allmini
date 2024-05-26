import React, { useState } from 'react'

const GANN = () => {


  let name= [ 
{name:'taun',class:'kla'},
{name:'taun',class:'kla'},
]

const [first,setfirst]=useState(name)
  console.log(name[0].name)

  const hello=()=>{
   setfirst((pre))
  }

  return (
    <div>
      <button onClick={hello} className='border-blue-950 bg-gray-500'> click</button>
      {first.name}
    </div>
  )
}

export default GANN
