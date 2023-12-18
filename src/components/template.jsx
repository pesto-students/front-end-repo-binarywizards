import PropTypes from "prop-types";
import { useEffect } from "react";
import { createHTMLFromJSON } from "src/utils/template-parser";
import { arrayFrom, isNodeList } from "src/utils/utils";

function createMarkup(template) {
  return {
    __html: template.outerHTML,
  };
}

const Template = ({ json, data, onSelectedSection }) => {
  console.log("props: ", data);
  let myTemplate = createHTMLFromJSON(json, data);
  const handleSectionSelected = (event) => {
    console.log(event.currentTarget);
    const target = event.currentTarget;
    console.log("section: ", target.dataset.section);
    onSelectedSection(target.dataset.section);
  };
  useEffect(() => {
    let editBtns = document.querySelectorAll(".resume-edit-btn");
    const listeners = [];
    if (editBtns && isNodeList(editBtns)) {
      let nodes = arrayFrom(editBtns);
      nodes.forEach(function (node) {
        node.addEventListener("click", handleSectionSelected);
        listeners.push({
          node: node,
          eventType: "click",
          handler: handleSectionSelected,
        });
      });
      console.log("✅ Event listener added");
    }

    return () => {
      listeners.forEach((listener) => {
        const { node, eventType, handler } = listener;
        node.removeEventListener(eventType, handler);
      });
      console.log("✅ Event listener removed");
    };
  }, []);
  return (
    <div
      className="w-full h-full"
      dangerouslySetInnerHTML={createMarkup(myTemplate)}
    ></div>
  );
};

Template.propTypes = {
  json: PropTypes.object,
  data: PropTypes.object,
  onSelectedSection: PropTypes.func,
};

export default Template;
