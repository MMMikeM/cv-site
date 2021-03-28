import { ComponentChildren } from "preact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

type ChildrenProps = {
  children: ComponentChildren;
  title?: string;
  classes?: string;
  image?: { url: string };
  linkPath?: string;
};

const Card = ({ children, classes, title, image, linkPath }: ChildrenProps) => {
  return (
    <div
      className={
        "dark:bg-tg-800  bg-gray-100 shadow-sm rounded-sm m-3 pt-4 pb-8 px-8 " +
        classes
      }
    >
      {image ? <img src={image.url} /> : ""}
      {title ? <h3 className="h-16">{title}</h3> : ""}
      {children}
      {linkPath ? (
        <div className="flex justify-start">
          <Link
            className="px-8 py-2 border-2 border-solid border-em-800  rounded-sm"
            to={linkPath}
          >
            More info
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
