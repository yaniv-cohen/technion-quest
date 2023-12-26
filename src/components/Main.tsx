import { useState } from "react";
import Card from "./Card";
import LeftRightLI from "./LeftRightLI";
import { Path, getPath } from "../data";
import PathComponent from "./PathComponent";

function Main() {
  const [path, setPath] = useState<null | Path>(null);
  const [searchPath, setSearchPath] = useState<undefined | string>(
    'Enter Path name: for exmaple:"technion addmisions"'
  );

  const fetchPath = async (name: string) => {
    setPath(getPath(name));
  };
  return (
    <div className="flexRow">
      <div className="flexCol">
        <h1>Welcome to Pathways</h1>
        <h2>
          The DIY toolkit to change real-world problems into simple actionable
          steps
        </h2>
        <div>
          <textarea
            name="searchBar"
            placeholder={searchPath}
            id="searchBar"
            cols={30}
            rows={10}
            onChange={(e) => {
              setSearchPath(e.target.value);
            }}
          />
        </div>
        <button
          type="button"
          className="rpgui-button"
          onClick={() => {
            if (searchPath) fetchPath(searchPath);
          }}
        >
          Go!
        </button>
      </div>
      <div>
        {path ? (
          <PathComponent path={path}></PathComponent>
        ) : (
          <div
            className="rpgui-container framed-golden-2"
            // style="position:relative; width:32%; height:300px; display:inline-block"
          >
            <Card>
              <div
                className="rpgui-container framed"
                // style={{"position:relative; width:32%; height:300px; display:inline-block"}}
              >
                <p>class:rpgui-container framed</p>
              </div>

              <ul>
                <LeftRightLI title="step 1:" text="Load a path." />
                <LeftRightLI
                  title="step 2:"
                  text="Find resources, tips and tricks."
                />
                <LeftRightLI
                  title="step 3:"
                  text="Track your Progress across multiple devices."
                />
              </ul>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
