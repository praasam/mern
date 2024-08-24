import React from 'react'

const ChildComponent = ({onMessageChange}) => {
    // p to c
//   return (
//     <button onClick= {onButtonClick}>Click Me</button>
// )

// c to p
const handleClick = () => {
    onMessageChange("Message updated by child");
  };

  return (
    <button onClick={handleClick}>Click Me</button>
  );
}

export default ChildComponent