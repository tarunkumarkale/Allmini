import React, { useState } from 'react'

const GANN = () => {

const obj={
  fname:'',
  lname:''
  }


const [ok,setok]=useState(obj)
const [o,seto]=useState([])


const fun=(e)=>{
  let name=e.target.name
  let value=e.target.value

  setok((pre)=>{
   if(name==='name'){
  return {
    fname:value,
  lname:pre.lname
  }

   } else {
    return{
      fname:pre.fname,
      lname:value
    }
  
   }
  })
}

const Submit=(()=>{


seto((pre)=>[...pre,ok])
})




  return (
    <div>
<form onSubmit={Submit}>
  <input type="text" onChange={fun} name='fname'  value={ok.fname} />
  <input type="text" onChange={fun} name='lname'  value={ok.lname} />
  <button type='click'>click</button>
</form>      

<div>{o.map((Element=>Element))}</div>
    </div>
  )
}

export default GANN
