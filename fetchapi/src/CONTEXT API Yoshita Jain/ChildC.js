// 3rd consume = Jo data provide hua hia usko consume karo
import { data } from "./Parent";

function ChildC() {

  return (<>

    <h3>Child C</h3>

    {/* we'll consume */}

    <data.Consumer>
      {/* <data.Consumer> sirf apne under ek function ko hi accept kar sakta hia. i.e. sirf function hi leta hia */}

      {
        (name) => {
          return (
            <h1>My Name is : {name}</h1>
          )
        }
      }

    </data.Consumer>

  </>)
}
export default ChildC;