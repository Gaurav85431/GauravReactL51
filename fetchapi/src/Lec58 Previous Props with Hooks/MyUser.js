import { useEffect, useRef } from "react";

function User(props) {


  const lastVal = useRef();
  useEffect(() => {
    lastVal.current = props.count;
    // current ko change nhi kar sakte hai, ye predefined property hoti hai iske under hi hme change karna hoga. Isliye hm props.count liye
    // lastVal.current me hmari last wala value store ho jayegi.
    // props.count me hm return ke under current value ko send kr rhe hai but yaha pr lastVal.current me props.count se last value aa jayega, how? --------------   Iska reason ye hai ki jab hm isko useEffect me use kar rhe hai to hm useRef() ko use kr rhe hai ye last value lega DOM se. Isko current value ke update hone se pehle hi ye useEffect chal jayega aur ye last value ko store kar lega. Aur fir baad me count ke under new value aayegi 

  })

  const PreviousProps = lastVal.current;

  return (<>
    <h1>User current count : {props.count}</h1>
    <h2>Previous count : {PreviousProps}</h2>
    <h3>Difference is {props.count - PreviousProps}</h3>
  </>)
}
export default User;