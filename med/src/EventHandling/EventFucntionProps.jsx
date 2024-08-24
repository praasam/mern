import React from 'react'
import EventHandling from './EventHandling'

const EventFucntionProps = () => {
    const handleClick = () => {
        console.log("Button clicked");
        alert("Button clicked");
    }

  return (
    <EventHandling onButtonClick={handleClick}/>
)
}

export default EventFucntionProps