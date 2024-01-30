import { createContext } from "react";
import ChildA from "./ChildA";

let data = createContext();
let mydata = createContext();

function ParentCONTEXTAPI2() {

  const name = "Gaurav";
  const age = 24;

  return (<>
    <h3>Parent</h3>

    <data.Provider value={name}>

      <mydata.Provider value={age}>

        {/* we are passing data through A,B and go to C */}
        <ChildA />

      </mydata.Provider>
    </data.Provider>
  </>)
}
export default ParentCONTEXTAPI2;

export { data, mydata };   
