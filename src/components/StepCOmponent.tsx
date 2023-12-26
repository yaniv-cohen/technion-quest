import { Step } from "../data";
import HelmetIcon from "../assets/closed-barbute.svg";
import potionBall from "../assets/potion-ball.svg";
function StepComponent({ step }: { step: Step }) {
  return (
    <div key={step.name}>
      <h2>{step.name}</h2>
      {step.text ? <p>{step.text}</p> : <></>}
      {step.links && step.links.length > 0 ? (
        <ul>
          {step.links.map((link) => (
            <li key={link.url} className="LeftRightLI">
              {/* <img src={HelmetIcon} alt="icon" className="itemIcon"/> */}
              <img src={potionBall} alt="icon" className="itemIcon"/>
              <a href={link.url} target="_blank">
                {link.title ?? link.url}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

export default StepComponent;
