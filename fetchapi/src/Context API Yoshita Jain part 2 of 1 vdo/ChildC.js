
import { data, mydata } from "./Parent";
function ChildC() {
  return (<>
    <h3>Child C</h3>

    <data.Consumer>
      {/* hm data.Consumer me 1 hi function ko send kar sakte hia, lekin hme yahan per 2 function hai 1 hai name ke liye, 2nd hia age */}
      {
        (name) => {
          return (
            <mydata.Consumer>
              {
                (age) => {
                  return (
                    <h1>My Name is : {name} and age is {age}</h1>
                  )
                }
              }
            </mydata.Consumer>
          )
          // To yaha per childC me wo dono data jo ki parent se send hua hai wo aaa gya lekin. Hm jante hai ki <data.Consumer> sirf 1 hi function leta hia to yahan per hmarae pass 2 function aa gaya to ye isko hm return() ke under hi likhenge. i.e. 1 return ke under 2nd return. 
          // To Agar hmare pass 15-20-25-50 etc. data function ho to ye callback hell ban jayega. 
          // To overcome this problem we’ll use useContext Hooks.

        }
      }

    </data.Consumer>
  </>)
}
export default ChildC;