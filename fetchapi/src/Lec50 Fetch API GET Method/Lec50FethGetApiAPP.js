import { useEffect, useState } from 'react';
function MyGetApiAppLec51() {

  const [data, setData] = useState([])

  useEffect(() => {

    fetch("https://gauravimages.onrender.com/api/getAllData").then((result) => {
      result.json().then((resp) => {
        // console.log(resp);

        setData(resp);

      })
    })



  }, []);
  // Hm [] pass karenge taki ek bar hi chale

  // console.log(data);

  return (
    <>
      <h1>Get API Call</h1>

      {/* <h2>{data}</h2> */}

      <table border="1">
        <tr>
          <td>ID</td>
          <td>Name</td>

          <td>Image</td>
        </tr>
        {/* jo data hia usko map karenge */}

        {
          data.map((item) =>
            <tr>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.images}</td>
            </tr>
          )
        }



      </table>


    </>
  );
}

export default MyGetApiAppLec51;
