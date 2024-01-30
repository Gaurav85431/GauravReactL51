import { useState } from "react";

function POSTapiAppLec52() {

  // Hme 3 placeholder ki value chahiye to hm state define karenge

  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  function saveUser() {
    // console.log(name, email, mobile);

    // if we want to send data using POSTMan then we need fetch. Inside fetch we will pass the url in whcih we can pass the data 
    // Hm GET  ke liye sirf ek parameter send krte thhe jo ki url hota thha.
    // isme hme 2 parameter pass karna hota hia ek to method hota hia i.e. POST 
    //  2nd parameter hoga headers, aur headers ke under v 2 chiz send karenge 1st hoga Accept i.e. kiya chiz accept karega, to ye JSON value ko accept karega. Aur 2nd hoga ki iske under content  yani ki content type me jo result me hmko kiya milega. 'Content-Type' me hm v hm 'application/json' ko send karenge.
    // 3rd parameter hota hia body, body me hmara actual result rehne wala hai. Jo ki Object ke form me rehta hia



    console.log({ title, description, price });


    let data = { title, description, price };

    fetch("https://react-w0uk.onrender.com/api/insertData", {
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



    {/* Hme 3 placeholder ki value chahiye to hm state define karenge */}


    {/* Ab hm en value ko hm input me attach karenge  like value={email} */}


    <h1>POST API</h1>

    {/*
    
<input type="text" value={name} name="name" /> <br /> <br />

    isme bind kr diye hai value to isme edit karne ke liye hm onChange lagayenge 
         onChange={(e) => { setName(e.target.value) }}+-
    */}

    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} name="title" /> <br /> <br />

    <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} name="description" /> <br /> <br />
    <input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} name="price" /> <br /> <br />
    <button type="button" onClick={saveUser}>Save</button>

  </>)


}
export default POSTapiAppLec52;

