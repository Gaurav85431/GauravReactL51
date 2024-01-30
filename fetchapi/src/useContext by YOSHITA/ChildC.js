import { useContext } from "react";
import { data1, data2 } from "./Parent";
function ChildC() {

  // to hm name variable me useContext ka valueko store kara denge.

  // hme name kon context ka use karke milega to data1; Yaha jaruri nhi hai ki name hi daale dusra variable v le sakte hai
  // const name = useContext(data1);
  const myName = useContext(data1);
  // hme age kis context ka use karke milega to  data2
  const myAge = useContext(data2);


  return (<>
    <h3>Child C</h3>

    <h1>My name is {myName} and age is {myAge}</h1>



    {/* <data.Consumer> */}
    {/* hm data.Consumer me 1 hi function ko send kar sakte hia, lekin hme yahan per 2 function hai 1 hai name ke liye, 2nd hia age */}

  </>)
}
export default ChildC;