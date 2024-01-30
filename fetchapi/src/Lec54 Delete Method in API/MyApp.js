import { useEffect, useState } from 'react';
function MyDeleteAPILec53() {

  const [data, setData] = useState([])

  useEffect(() => {

    fetch("https://gauravimages.onrender.com/api/getAllData").then((result) => {
      result.json().then((resp) => {

        setData(resp);

      })
    })



  }, []);


  // deleteUser // isme hme id lenge taki jo data ko delete karna chahte hai uska id aa jayega.
  /*
  function deleteUser(id){
      alert(id);
  }
  */

  // Isme hm title lenge taki jo data delete karna chahte hia wo title aa jayega
  function deleteUser(title) {
    // alert(title);
    // hm fetch ka use karenge

    fetch(`https://gauravimages.onrender.com/api/getAllData/${title}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
      })
    })           // then apne aap me ek response dega.i.e. result .  TO ab jo result aaya usko hm JSON me convert karenge

  }



  return (
    <>
      <h1>Delete API Call</h1>
      <h2>Isme delete hoga to refresh karna hoga</h2>

      <table border="1">
        <tr>

          <td>title</td>
          <td>description</td>
          <td>Image</td>
        </tr>

        {
          data.map((item, i) =>
            <tr key={i}>
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
              <td><button onClick={() => deleteUser(item.title)}>Delete</button></td>


            </tr>
          )
        }

      </table>

    </>
  );

}
export default MyDeleteAPILec53;