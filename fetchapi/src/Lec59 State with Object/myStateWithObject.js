import { useState } from "react";

function MyAppStateWithObjectLec59() {

  const [data, setData] = useState({ name: "Gaurav", age: 27 });

  return (<>

    {/* Problem:- Jb 1 data ko update karte hai to other gayab */}
    {/* iska karan ye hai ki-- Jaise hi hm state ko update karte hai to isko lagta hia ki ab ek hi property hai jisko ki edit kr rhe hai, to remaining ko remove kar deta hia */}
    <h1>State With Object (Problem )</h1>

    <input type="text" placeholder="Enter Name " value={data.name} onChange={(e) => { setData({ name: e.target.value }) }} />
    {/* e.target.value = jo input box me likhte hai */}
    <input type="text" placeholder="Enter age " value={data.age} onChange={(e) => { setData({ age: e.target.value }) }} />

    <h2>{data.name}</h2>
    <h2>{data.age}</h2>

  </>)


}
export default MyAppStateWithObjectLec59;