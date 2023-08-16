
import React from "react";
import './../styles/App.css';
import Form from "./Form.js";

const App = () => {

  function displayData(data){
    console.log(data);
  }


  return (
    <div>
        <Form onSubmit = {displayData}/>
    </div>
  )
}

export default App
