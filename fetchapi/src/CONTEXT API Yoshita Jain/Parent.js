import { createContext } from "react";
import ChildA from "./ChildA";
// 1st we will create context:-

let data = createContext();
// yaha pr data liye hai so niche data.Provider ka use kiye.

function ParentCONTEXTAPI() {

  const name = "Yoshita";
  // Hme es data i.e. name ko provide karana hia 
  return (<>
    <h3>Parent</h3>

    {/* 2nd is provide = Hme jo sb component me data ko send krna hai to usko hm <data.Provider> ke under wrap kr denge  */}
    <data.Provider value={name}> {/* data i.e. jisme createContext() ko rakhe hai */}
      {/* hme jo data pass karne hia usko hm data.Provider ke under value me pass karayenge */}
      <ChildA />
    </data.Provider>
  </>)
}
export default ParentCONTEXTAPI;
// jo context ko create kiye hia usko hme export karna hoga taki hm aage user kr saken

export { data }; // hm 1 hi default component ko export kar sakte hia so hm {data} ko default me export nhi kiya.
// Jahan per hme isko use karna hia wahan pr hm isko import kar lenge.