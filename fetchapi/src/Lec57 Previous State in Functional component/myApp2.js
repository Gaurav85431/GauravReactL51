import { useState } from "react";

function MyPreviousStateLec57B() {

  const [count, setCount] = useState(1);

  function updateCounter() {
    // if we want to update count value inside for loop to loop me setCount 1 bar hi increase hoga.
    for (let i = 0; i < 5; i++) {

      // jb tk count ki vlaue increase hoti hai tb tk pechle loop chal jati hai, har bar +1 kr diya lekin usko async value  5 bar chalne tk nhi mil pati hai. 
      // setCount(count + 1);
      // to overcome this problem we will use arrow function

      // setCount((pre) => pre + 1)
      setCount((pre) => {
        return pre + 1
      }
      )
    }
  }
  return (<>
    <h2>{count}</h2><br />
    <button onClick={updateCounter}>Click ME to update counter</button>
  </>)
}
export default MyPreviousStateLec57B;