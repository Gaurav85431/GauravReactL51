import { useEffect, useState } from 'react';
function MyDeleteAPILec53C() {

  const [data, setData] = useState([])


  useEffect(() => {

    getList();


  }, []);


  // GetLIst function
  function getList() {
    fetch("https://gauravimages.onrender.com/api/getAllData").then((result) => {
      result.json().then((resp) => {

        setData(resp);

      })
    })
  }


  // delete user
  function deleteUser(id) {
    // alert(id);



    fetch(`https://gauravimages.onrender.com/api/deleteData/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);

        getList();


      })
    })

  }



  return (
    <>
      <h1>Delete API Call</h1>
      <h2>Delete hoga without refresh kiye. 2nd . isme hm id show kar rhe hia.</h2>

      <table border="1">
        <tr>

          <td>id</td>
          <td>title</td>
          <td>description</td>
          <td>Image</td>
        </tr>

        {
          data.map((item, i) =>
            <tr key={i}>

              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.images}</td>

              <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>

            </tr>
          )
        }

      </table>

    </>
  );

}
export default MyDeleteAPILec53C;