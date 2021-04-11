import { useRef } from "preact/hooks";

import Development from "./experience/development";
import Training from "./experience/training";
import Support from "./experience/support";
import CCW from "./projects/ccw";
import CLI from "./projects/cli";

const AsidePage = ({ setActiveView, activeView }) => {
  const page = () => {
    switch (activeView.aside) {
      case "development":
        return <Development />;
      case "training":
        return <Training />;
      case "support":
        return <Support />;
      case "ccw":
        return <CCW />;
      case "cli":
        return <CLI />;
      default:
        return "";
    }
  };

  const scroll = () => {
    // window.scrollTo(0, 0);
    ref.current.scrollIntoView();
  };

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="px-2 pt-4 flex-grow flex flex-col justify-center" ref={ref}>
      {page()}
      <button
        className="bg-secondary-600 hover:bg-secondary-500 active:bg-secondary-600 text-white h-12 w-48 mt-12 mb-4 rounded-sm"
        onClick={() => {
          ref.current.scrollIntoView({ behavior: "smooth" });
          setActiveView({ ...activeView, view: "main" });
        }}
      >
        Return
      </button>
    </div>
  );
};

export default AsidePage;
