import ChildA from "./ChildA";

function Parent() {

  const name = "Yoshita";
  return (<>

    <h3>Parent</h3>

    <ChildA name={name} />
  </>)

}
export default Parent;