import { Tree } from "../data";
import StepComponent from "./StepCOmponent";

function TreeComponent({ tree }: { tree: Tree }) {
  return (
    <div>
      <div className=" rpgui-container framed tree-container">
      {tree.name ? <h1>{"The path of: " + tree.name}</h1> : <></>}
      <div
        id="hp-bar"
        data-value="0.4"
        className="rpgui-progress red"
        data-rpguitype="progress"
      >
        <div className=" rpgui-progress-track">
          <div
            className=" rpgui-progress-fill red"
            style={{ left: "0px", width: "40%" }}
          ></div>
        </div>
        <div className=" rpgui-progress-left-edge"></div>
        <div className=" rpgui-progress-right-edge"></div>
      </div>
        {tree.steps.map((step) => {
          if (step.type == "normalStep") {
            return <StepComponent key={step.name} step={step}></StepComponent>;
          } else if (step.type === "multipleChoiceStep") {
            return step.options.map((option) => {
              return <div key={option.name}>{option.name}</div>;
            });
          }
          return <></>;
        })}
      </div>
    </div>
  );
}

export default TreeComponent;
