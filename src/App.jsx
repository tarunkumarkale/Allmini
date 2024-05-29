import React, { useState } from 'react'
import { FaArrowUp } from "react-icons/fa";
import AllComents from './AllComents';
const App = () => {


const [first,setfirst]=useState('')





cosnt[Second,setSecond]=useState([])


const OK=()=>{
  setfirst((pre)=>[...pre,first])
}
const Todo=()=>{
setSecond(first)
setfirst('')
}





  return (

<>
{
  Second.map((Ele,index) => <AllComents data={Ele}  key={index} imgg="" />)
}

    <div className='flex justify-center items-end h-screen'>
    <div class="wrap-input-8" >
  <input class="input" type="text" placeholder="Name"  onChange={OK}/>
   <button class="btn absolute bottom-0 right-0 bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-purple-700" onClick={Todo}>
   <FaArrowUp />
  </button>
  <span class="focus-border">
    <i></i>
  </span>
</div>
</div>
</>
  )
}

export default App
