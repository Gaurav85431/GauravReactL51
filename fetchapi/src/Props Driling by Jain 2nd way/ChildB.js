import ChildC from "./ChildC";

function ChildB({ name }) {

  return (<>

    <h3>Child B</h3>
    <ChildC name={name} />

  </>)

}
export default ChildB;