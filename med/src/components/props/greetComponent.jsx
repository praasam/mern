import React from "react";

const GreetComponent = (props) => {
    // console.log(props);
    const styles = {
        div:{
            backgroundColor: 'lightblue',
            padding : '10px',
            margin :'10px',
        }
    }
  return (
    <div style = {styles.div}>
        <h1 className= "text-green-500">Greet Component</h1>
        <p>Hello, {props.name} {props.caste}. We are learning props in component.</p>
    </div>
  )
}

export default GreetComponent;