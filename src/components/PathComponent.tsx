import { Path } from "../data";
import TreeComponent from "./TreeComponent";

function PathComponent({ path }: { path: Path }) {
  return (
    <div className="pathBlob rpgui-container framed-golden-2 flexCol">
      {path.name ? <h2>{"THE PATH OF :" + path.name.toUpperCase()}</h2> : <></>}
      <div className="flexRow">
        {path.tree.map((tree) => (
          <TreeComponent key={tree.name} tree={tree}></TreeComponent>
          // <Step key={index} Tree={step}></Step>
        ))}
      </div>
    </div>
  );
}

export default PathComponent;
