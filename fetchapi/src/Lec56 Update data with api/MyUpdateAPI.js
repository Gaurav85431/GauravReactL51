import { useEffect, useState } from 'react';

function UpdateLec56() {

  const [data, setData] = useState([])

  // 
  const [id, setID] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([])


  useEffect(() => {

    getList();


  }, []);



  function getList() {
    fetch("https://gauravimages.onrender.com/api/getAllData").then((result) => {

      // Jaise hi hmari api create ho jati hai, to hm uske saath hi value fir se fill karna chahunga. to hm yaha setData() ke niche likh denge setName aur hm setName ke under 0th index ka data leke aana hai

      result.json().then((resp) => {

        setData(resp);


        setID(resp[0].id);
        setTitle(resp[0].title);
        // isko jo sa input field me dekhna chahte hia to uske value me hame state ka name likhne hai.
        setDescription(resp[0].description);
        setImages(resp[0].images);


      })
    })
  }


  // delete
  function deleteUser(id) {

    fetch(`https://gauravimages.onrender.com/api/deleteData/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        // console.log(resp);

        getList();


      })
    })
  }



  // Here we are declared selectUser() function that will select user and print thier data in input field

  function selectUser(id) {
    // console.log(id);

    // console.log({ data });
    // console.log(data[id]);
    // To hm id 1 se start hota hia aur hmara array 0 se suru hota hia. to isse yadi hm 1st wala pr click karenge to wo 2nd ka data dega. 
    // To overcome this problem  we will use data[id-1]

    // console.log(data[id - 1]);



    setID(data.id);
    setTitle(data.title);

    setDescription(data.description);
    setImages(data.images);





  }


  // Update user
  const updateUser = () => {
    console.log(title, description);
  }



  return (
    <>
      <h1>Update data api</h1>


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
              <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>

              {/* hm chahte hia ki button ke onClick per hm chizo ko fill karwate hia     */}

              <td><button onClick={() => selectUser(item.id)}>Update</button></td>
              {/* To jo sa user ko select karenge to wo user ka detail i.e. id aa jayega. */}




            </tr>
          )
        }

      </table>

      <div>

        <br /><br /><br />

        {/* TO avi agar hm kuch change krna chahte hai to wo nhi kr skte hai bcz ki bina onChange k nhi change kr skte hai to hme onChange() ko use karna hoga */}
        <input type='text' value={id} onChange={(e) => { setID(e.target.value) }} /><br /> <br />
        {/* to 'e' event parameter hai */}


        <input type='text' value={title} onChange={(e) => { setTitle(e.target.value) }} /><br /> <br />
        {/* jb value={title}  likhenge to wo  title ka value is input field me aa jayega */}

        <input type='text' value={description} onChange={(e) => { setDescription(e.target.value) }} /><br /> <br />
        <input type='text' value={images} /><br /> <br />
        {/* <input type='file' value={images} /><br /> <br /> */}

        <button onClick={updateUser}>Update User</button>

      </div>



    </>
  );


}
export default UpdateLec56;