import { useState } from "react";
import User from "./MyUser";

function MyPreviousPropsLec58() {

  const [count, setCount] = useState(0);

  return (<>

    {/* <User /> */}

    {/* hm count name se count props ko user me send kr rhe hai. */}
    <User count={count} />
    {/* <button onClick={() => setCount(count + 1)}>Update Counter</button> */}
    <button onClick={() => setCount(Math.floor(Math.random() * 10))}>Update Counter</button>

  </>)


}
export default MyPreviousPropsLec58;