import axios from "axios";
import { useEffect, useState } from "react";

function GetMyApi() {

  const [userData, setUserData] = useState([]); //data arrar me hai so we pass empty array []
  useEffect(() => {
    axios.get('https://gauravimages.onrender.com/api/getAllData').then((response) => {
      console.log(response);
      // response ke under data hai json me usi ko fetch kr rhe hia.
      setUserData(response.title);
    })
  }, []);


  return (<>

    {
      userData.map((item) => {
        <h1>{item.title}</h1>
      })
    }

  </>)


}
export default GetMyApi;