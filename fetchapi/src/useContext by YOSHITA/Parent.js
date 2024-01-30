import { createContext } from "react";
import ChildA from "./ChildA";

// To hmare pass 2 data hai i.e. name, age to hme 2 context create karne padenge.
const data1 = createContext();
const data2 = createContext();

function ParentCONTEXTAPI3() {

  const name = "Gaurav";
  const age = 24;

  return (<>
    <h3>Parent</h3>

    <data1.Provider value={name}>

      <data2.Provider value={age}>
        <ChildA />
      </data2.Provider>

    </data1.Provider>

  </>)
}
export default ParentCONTEXTAPI3;

export { data1, data2 };   
