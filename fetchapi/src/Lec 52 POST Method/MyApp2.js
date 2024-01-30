import { useState } from "react";

function POSTapiAppLec52B() {

  // Hme 5 placeholder ki value chahiye to hm state define karenge. aur isme user data jo insert karega wo data hm tb send karenge backend me

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");


  function saveUser() {


    console.log({ name, email, mobile, password, confirmpassword });
    let data = { name, email, mobile, password, confirmpassword };

    fetch("https://gauravloginsignup.onrender.com/api/register", {
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

    {/* Hme 5 placeholder ki value chahiye to hm state define karenge */}
    {/* Ab hm en value ko hm input me attach karenge  like value={email} */}

    <h1>POST API</h1>

    {/*  
<input type="text" value={name} name="name" /> <br /> <br />
    isme bind kr diye hai value to isme edit karne ke liye hm onChange lagayenge 
         onChange={(e) => { setName(e.target.value) }}+-
    */}

    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} name="name" /> <br /> <br />

    <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" /> <br /> <br />
    <input type="text" value={mobile} onChange={(e) => { setMobile(e.target.value) }} name="mobile" /> <br /> <br />
    <input type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} name="password" /> <br /> <br />
    <input type="text" value={confirmpassword} onChange={(e) => { setConfirmpassword(e.target.value) }} name="confirmpassword" /> <br /> <br />
    <button type="button" onClick={saveUser}>Save</button>

  </>)


}
export default POSTapiAppLec52B;

