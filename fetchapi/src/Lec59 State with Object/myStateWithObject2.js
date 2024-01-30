import { useState } from "react";

function MyAppStateWithObjectLec59B() {

  const [data, setData] = useState({ name: "Gaurav", age: 27 });

  return (<>

    {/* Problem:- Jb 1 data ko update karte hai to other gayab */}
    {/* iska karan ye hai ki-- Jaise hi hm state ko update karte hai to isko lagta hia ki ab ek hi property hai jisko ki edit kr rhe hai, to remaining ko remove kar deta hia */}
    <h1>State With Object (solution1 )</h1>

    {/* SOLUTION 1----------------------------- FIRST WAY */}
    {/* isme hm jo value ko update karna hai usme e.target.value denge and other me data.(value like age, name) denge */}

    <input type="text" placeholder="Enter Name " value={data.name} onChange={(e) => { setData({ age: data.age, name: e.target.value }) }} />


    {/* e.target.value = jo input box me likhte hai */}
    <input type="text" placeholder="Enter age " value={data.age} onChange={(e) => { setData({ name: data.name, age: e.target.value }) }} />

    <h2>{data.name}</h2>
    <h2>{data.age}</h2>

    <br /><br />

    {/* SOLUTION 2 ----------------- */}
    <h1>State With Object (solution2)</h1>

    {/* agar object ka size bada ho tb kitna ko isme likhete jayege to ye tarika sahi nhi hai utna, to hm 2nd way lagayenge i.e.  ... (3 dot) ke bad object name likhe(i.e. data) fir comma dekar jo value ko update krna chahte hia usko likho */}
    <input type="text" placeholder="Enter Name " value={data.name} onChange={(e) => { setData({ ...data, name: e.target.value }) }} />


    <input type="text" placeholder="Enter age " value={data.age} onChange={(e) => { setData({ ...data, age: e.target.value }) }} />


    <h2>{data.name}</h2>
    <h2>{data.age}</h2>

  </>)


}
export default MyAppStateWithObjectLec59B;