import PropTypes from "prop-types";
import { useEffect } from "react";
import { createHTMLFromJSON } from "src/utils/template-parser";
import { arrayFrom, isNodeList } from "src/utils/utils";

function createMarkup(template) {
  return {
    __html: template.outerHTML,
  };
}

const Template = ({ json, data, onSelectedSection, onSelectFile }) => {
  let uploadListeners = [];
  let myTemplate = createHTMLFromJSON(json, data);
  const handleSectionSelected = (event) => {
    const target = event.currentTarget;
    onSelectedSection(target.dataset.section);
  };
  const fileSelectionHandler = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        let imageObj = {
          src: reader.result?.toString() || "",
          fileName: file.name,
        };
        e.target.value = "";
        onSelectFile(imageObj);
      });
      reader.readAsDataURL(file);
    }
  };
  const handleFileSelection = () => {
    let fileInput = document.getElementById("upload-image-in-resume-fileInput");
    if (!fileInput) return;
    fileInput.addEventListener("change", fileSelectionHandler);
    uploadListeners.push({
      node: fileInput,
      eventType: "change",
      handler: fileSelectionHandler,
    });
    fileInput.click();
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
    let fileInputs = document.querySelectorAll(".upload-image-in-resume");
    if (fileInputs && isNodeList(fileInputs)) {
      let nodes = arrayFrom(fileInputs);
      nodes.forEach(function (node) {
        node.addEventListener("click", handleFileSelection);
        listeners.push({
          node: node,
          eventType: "click",
          handler: handleFileSelection,
        });
      });
    }

    return () => {
      listeners.forEach((listener) => {
        const { node, eventType, handler } = listener;
        node.removeEventListener(eventType, handler);
      });
      uploadListeners.forEach((listener) => {
        const { node, eventType, handler } = listener;
        node.removeEventListener(eventType, handler);
      });
      console.log("✅ Event listener removed");
    };
  }, [data]);
  return (
    <div
      className="w-full h-full min-h-[842px] max-h-[890px] overflow-y-auto overflow-x-hidden custom-scrollbar"
      dangerouslySetInnerHTML={createMarkup(myTemplate)}
    ></div>
  );
};

Template.propTypes = {
  json: PropTypes.object,
  data: PropTypes.object,
  onSelectedSection: PropTypes.func,
  onSelectFile: PropTypes.func,
};

export default Template;
