import React, { useState } from 'react'

const DigitalClock = () => {

   let getTime = new Date().toLocaleTimeString()
   const [currentTime, setCurrentTime] = useState(getTime)

   setInterval(() => {
      setCurrentTime(
         getTime = new Date().toLocaleTimeString()
      )
   }, 1000);

   return (
      <>
         <time style={{ fontSize: '50px', fontWeight: 'bold ' }}>{currentTime}</time>
      </>
   )
}

export default DigitalClock