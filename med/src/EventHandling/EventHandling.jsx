import React from 'react'

const EventHandling = ({onButtonClick}) => {


  return (
    <div>
        <h1>Event Handling</h1>
        <button onClick={()=>onButtonClick()} className="hover:bg-red-500 rounded-xl">Click Me</button>
    </div>
  )
}

export default EventHandling