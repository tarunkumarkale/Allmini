import React, { useState } from 'react';

const GANN = () => {
    const arr=[1,2,3,4,5,6,7,8]

const [ok,setok]=useState('')
const [ok1,setok1]=useState()

const hello=()=>{

let nummm=parseInt(ok)

    if(arr.includes(nummm)) console.log(ok)}

  return (
    <div>

<input type="text"  onChange={(e)=>{setok(e.target.value)}}  value={ok}  />

      <button onClick={hello}>click</button>
    </div>
  );
};

export default GANN;
