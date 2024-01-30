import ChildB from "./ChildB";

// hm es tarah se v child me data le sakte hai
function ChildA({ name }) {

  return (<>

    <h3>Child A</h3>
    <ChildB name={name} />

  </>)

}
export default ChildA;