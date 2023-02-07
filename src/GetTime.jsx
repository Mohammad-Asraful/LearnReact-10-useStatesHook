import React, { useState } from "react";

const GetTime = () => {

   let time = new Date().toLocaleTimeString()
   const [curTime, setCurTime] = useState(time)

   const updateTime = () => {
      time = new Date().toLocaleTimeString()
      setCurTime(time)
   }

   return (
      <>
         <time>{curTime}</time>
         <button onClick={updateTime}>Get time</button>
      </>
   )
}

export default GetTime