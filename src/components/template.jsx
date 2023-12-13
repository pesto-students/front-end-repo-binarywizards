import PropTypes from "prop-types";
import { useEffect } from "react";
import { createHTMLFromJSON } from "src/utils/template-parser";

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
    let editBtns = document.getElementById("edit-btn");
    if (editBtns) {
      editBtns.addEventListener("click", handleSectionSelected);
    }
    return () => {
      editBtns.removeEventListener("click", handleSectionSelected);
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
