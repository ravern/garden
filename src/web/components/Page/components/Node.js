import get from "lodash/get";

export default function Node({ node }) {
  function renderContent() {
    return node.content.map((node, index) => <Node key={index} node={node} />);
  }

  switch (node.type) {
    case "doc":
      return <>{renderContent()}</>;
    case "title":
      return <h1>{renderContent()}</h1>;
    case "heading":
      switch (node.attrs.level) {
        case 1:
          return <h2>{renderContent()}</h2>;
        case 2:
          return <h3>{renderContent()}</h3>;
        case 3:
          return <h4>{renderContent()}</h4>;
        case 4:
          return <h5>{renderContent()}</h5>;
        case 5:
          return <h6>{renderContent()}</h6>;
      }
      break;
    case "paragraph":
      return <p>{renderContent()}</p>;
    case "text":
      return get(node, "marks", []).reduce(
        (children, mark) => <Mark mark={mark}>{children}</Mark>,
        node.text
      );
    default:
      throw new Error(`Node ${node.type} unaccounted for in page rendering`);
  }
}

function Mark({ mark, children }) {
  switch (mark.type) {
    case "em":
      return <em>{children}</em>;
    case "strong":
      return <strong>{children}</strong>;
    default:
      throw new Error(`Mark ${mark.type} unaccounted for in page rendering`);
  }
}
