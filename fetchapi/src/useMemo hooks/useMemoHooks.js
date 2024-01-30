import { useMemo, useState } from "react";

function UseMemoHook() {

  const [add, setAdd] = useState(0);

  const [minus, setMinus] = useState(100);

  /*
    function Multiply() {
      console.log("**   *****    ********  *********************        *****************************");
      return add * 10;
    }
  
    // Isme problem ye hai ki Multiply function depend hai a pr , minus se koi relation nhi hia to jb hm substarct button pr click krte hia to ye function dobara call hota hia. Isse performance will decrease.
    */


  //  To overcome above problem we will use useMemo hooks

  const Multiply = useMemo(function multiplication() {
    console.log("***************");
    return add * 10;
  }, [add]);
  // ye function tab call ho jab hmara add variable update ho. ye substaraction pr call nhi hoga.

  return (<>

    <h2>useMemo</h2> <br />
    {Multiply} <br />
    <button onClick={() => setAdd(add + 1)}>Addition</button>
    <span>{add}</span>
    <br />

    <button onClick={() => setMinus(minus - 1)}>Substraction</button>
    <span>{minus}</span>


  </>)

}
export default UseMemoHook;