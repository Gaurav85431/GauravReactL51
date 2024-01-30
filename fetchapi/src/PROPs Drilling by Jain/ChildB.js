import ChildC from "./ChildC";

function ChildB(props) {

  return (<>

    <h3>Child B</h3>
    <ChildC name={props.name} />

  </>)

}
export default ChildB;