import { useEffect, useState } from 'react';
function MyDeleteAPILec53B() {

  const [data, setData] = useState([])

  // data delete ho without refresh to iske liye hm fetch() api ko ek function me rakh denge, to isko hm 1 bar useEffect me call kar denge jahan per list refresh ek upper aayegi. Jb result success hoga i.e. deleteUser() ke last me fir isko call kar denge.

  useEffect(() => {

    getList();
    // to show data

  }, []);

  // getList() me total data show hoga.  //deleteUser() me delete data ka kaam hoga
  function getList() {
    fetch("https://gauravimages.onrender.com/api/getAllData").then((result) => {
      result.json().then((resp) => {

        setData(resp);

      })
    })
  }


  // deleteUser // isme hme id lenge taki jo data ko delete karna chahte hai uska id aa jayega.
  /*
  function deleteUser(id){
      alert(id);
  }
  */

  // Isme hm id lenge taki jo data delete karna chahte hia wo id aa jayega 
  function deleteUser(id) {

    // hm fetch ka use karenge

    // delete data ke liye hm deleteData wala api ka use karenge.
    fetch(`https://gauravimages.onrender.com/api/deleteData/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);

        getList();


      })
    })           // then apne aap me ek response dega.i.e. result .  TO ab jo result aaya usko hm JSON me convert karenge

  }

  return (
    <>
      <h1>Delete API Call</h1>
      <h2>Delete hoga without refresh kiye.</h2>

      <table border="1">
        <tr>

          <td>id</td>
          <td>title</td>
          <td>description</td>
          <td>Image</td>
          <td>Operation</td>
        </tr>

        {
          data.map((item, i) =>
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.images}</td>
              {/* hm yaha per button bana denge Lec54 ka */}
              {/* <td><button>deleteUser</button></td> */}
              {/* es button per onClick per function call karenge to deleteUser()   */}
              {/* <td><button  onClick={()=> deleteUser()}>deleteUser</button></td> */}
              {/* deleteUser() ke under hm id send karenge ki kon sa id ke data ko delete karna hia */}
              {/* <td><button  onClick={()=> deleteUser(item.id)}>deleteUser</button></td> */}

              {/* deleteUser() ke under hm title pass karenge, jo title match hoga wo delete */}
              <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>

            </tr>
          )
        }

      </table>

    </>
  );


}
export default MyDeleteAPILec53B;