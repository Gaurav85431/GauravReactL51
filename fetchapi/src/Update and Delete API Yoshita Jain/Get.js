import axios from "axios";
import { useEffect, useState } from "react";

function GetApiByAxios() {

  const [userData, setUserData] = useState([]); //data array me hai so we pass empty array []

  // api ko useEffect ke under call karte hai.
  useEffect(() => {
    axios.get('https://jsonplaceholder.typeicode.com/users').then((response) => {
      console.log("32");
      console.log(response);
      console.log("2");
      // response ke under data hai json me usi ko fetch kr rhe hia.
      setUserData(response.data);
    })
  }, []);


  return (<>

    {
      userData.map((data) => {
        <h1>{data.name}</h1>
      })
    }

  </>)


}
export default GetApiByAxios;