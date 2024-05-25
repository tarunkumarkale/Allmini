import React, { useState } from 'react'

const First = () => {

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

const onSubmit=(()=>{


seto((pre)=>[...pre,ok])
})




  return (
    <div>
<form onSubmit={onSubmit}>
  <input type="text" onChange={fun} name='fname'  value={ok} />
  <input type="text" onChange={fun} name='lname'  value={ok} />
  <button type='click'>click</button>
</form>      

<div>{o.map((Element=>Element))}</div>
    </div>
  )
}

export default First
