import ChildB from "./ChildB";

function ChildA(props) {

  return (<>

    <h3>Child A</h3>
    <ChildB name={props.name} />

  </>)

}
export default ChildA;