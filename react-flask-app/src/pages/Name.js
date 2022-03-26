 import React, { useState } from "react";
 import TextField from "@material-ui/core/TextField";
 
 // the input and output fields
 export default function Fields() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("User Not Found")

  return(
    <div
      className="fields"
    >
      <div
        className="inputField"
      >
        <h2>Your input request to server</h2>
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={input}
          onChange={
            (e) => {
              setInput(e.target.value);
              // fetch the flask app's response
              // fetch("http://127.0.0.1:5000/first_name/" + e.target.value)
              fetch("/first_name/" + e.target.value)
                // set the output text to what the flask app responded with
                .then(data => {
                  setOutput(data)
                })
                // log an error if it occurred
                .catch(error => {
                  setOutput(error)
                })
            }
          }
        />
      </div>
      <div
        className="outputField"
      >
        <h2>Response from server</h2>
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={output}
        />
      </div>
    </div>
  );
 }