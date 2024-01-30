import axios from "axios";
import { useState } from "react";
function UpdateByAxios() {

  const data = { fName: "", lastName: "" };

  const [inputData, setInputData] = useState(data);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value })
  }
  // POST
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/users", inputData).then((response) => {
      console.log(response);
    })
  }

  // PUT
  const handleUpdate = (e) => {
    e.preventDefault(); // stop refresh
    axios.put("https://jsonplaceholder.typicode.com/users/1", inputData).then((response) => {
      console.log(response);
    })
  }

  // delete
  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete("https://jsonplaceholder.typicode.com/users/1", inputData).then((response) => {
      console.log(response);
    })
  }

  return (<>

    <label>First Name</label>
    <input type="text" name="fName" value={inputData.fName} onChange={handleData}></input> <br />

    <label>Last Name</label>
    <input type="text" name="lastName" value={inputData.lastName} onChange={handleData}></input>


    <button onClick={handleSubmit}>Submit</button>
    <button onClick={handleUpdate}>Update</button>
    <button onClick={handleDelete}>Delete</button>



  </>)


}
export default UpdateByAxios;