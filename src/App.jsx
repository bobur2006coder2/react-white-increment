import React from 'react'
import { useState } from 'react'

export default function App() {
  const [count,setcount]=useState(0)

function myfunc() {
  
  let p=document.querySelector(".pcha")
 
  
  if ( count==0) {
    p.innerHTML+=" "+count +" Toq , "
  } else if (count<0) {
    setcount(0)
   
  }else if(count%2==0){
    p.innerHTML+=" "+count +" Juft , "
  }else if(count%2==1 ){
    p.innerHTML+=count +" Toq , "
  }else{
    console.log("xato");
  }
}




  return (
    
   <div className='container'>
    <center>

   <h1>{count}</h1>
   <button onClick={()=>{setcount(count+1 )|| myfunc() }} className="btnone">
    oshirish
   </button>
   <button onClick={()=>setcount(count-1) || myfunc()} className="btntwo">
    tushirish
   </button>
   <br />
   <p className='pcha'>

   </p>
    </center>
   </div>
   
  )
}
