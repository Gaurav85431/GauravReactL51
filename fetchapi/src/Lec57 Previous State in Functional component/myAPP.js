import { useState } from "react";

function MyPreviousStateLec57() {

  const [count, setCount] = useState(1);

  function updateCounter() {
    // setCount(count + 1);
    let randomVal = Math.floor(Math.random() * 10);// 0-9 tak i.e. 0.5*10 =5
    setCount((prev) => {
      console.log(prev);
      // return randomVal;


      if (prev < 5) {
        alert("low value");
      }

      else {
        // agar value less then 5 hoga to undefined aayega bcz us vlaue ko hm return nhi kiye hai.
        // return randomVal;
      }
      return randomVal;


    });
  }


  return (<>

    <h1>Previous state</h1>
    <h2>{count}</h2><br />

    <button onClick={updateCounter}>Click ME to update counter</button>

  </>)


}
export default MyPreviousStateLec57;