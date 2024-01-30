/*
import { useState } from "react";

function POSTapiAppLec52C() {

  // Hme 5 placeholder ki value chahiye to hm state define karenge


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  state = {
    file: null
  }


  handleFile(e) {
    let file = e.target.files[0];
    this.setState({ file: file });
  }

  handleUpload(e){
    console.log(this.state, "The state");
  }



  function saveUser() {


    console.log({ title, description });
    let data = { title, description };

    fetch("https://gauravimages.onrender.com/api/insertData", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((result) => {
      result.json().then((resp) => {
        console.log("Result is ", result);
      })

    })
    //ye  hme promise return karta hai to isko handle krne ke liye hm .then() ka 
  }

  return (<>


    <h1>POST API</h1>


    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} name="title" /> <br /> <br />

    <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} name="description" /> <br /> <br />

    <label>Select files</label>
    <input type="file" name="file" onChange={(e) => this.handleFile(e)} />


    <button type="button" onClick={(e) => this.handleClick(e)}>Upload</button>

  </>)


}
export default POSTapiAppLec52C;

*/