import React, { useState } from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [message, setMessage] = useState("Hello from Parent");

    // p to c
    // const handleClick = () => {
    //     setMessage("Message updated by child");
    // }

    // c to p
    const updateMessage = (newMessage) => {
        setMessage(newMessage);
      };
    
//   return (
//     <div>
//         <h1>{message}</h1>
//         <ChildComponent onButtonClick = {handleClick}/>
//     </div>
//   )

  return (
    <div>
      <h1>{message}</h1>
      <ChildComponent onMessageChange={updateMessage} />
    </div>
  );
}

export default ParentComponent;