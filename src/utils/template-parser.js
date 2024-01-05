import { validator } from "./form-validator";
import { isArray, isObject } from "./utils";

const ignoreTags = ["input", "form", "select", "textarea", "script"];
function createJSONFromHTML(node) {
  let obj = {};

  if (
    node.nodeType === Node.ELEMENT_NODE &&
    ignoreTags.includes(node.tagName.toLowerCase())
  ) {
    return null;
  }
  switch (node.nodeType) {
    case Node.ELEMENT_NODE:
      obj.type = "element";
      obj.tagName = node.tagName.toLowerCase();
      obj.attributes = {};

      // Capture attributes
      Array.from(node.attributes).forEach((attr) => {
        obj.attributes[attr.name] = attr.value;
      });

      // Handle class names differently for SVG elements
      if (node instanceof SVGElement) {
        // For SVG elements, className is an SVGAnimatedString
        obj.className = node.className.baseVal;
      } else {
        // For other elements, className is a string
        if (node.className) {
          obj.className = node.className;
        }
      }

      // Capture inline styles
      if (node.style && node.style.cssText) {
        obj.styles = node.style.cssText;
      }

      // Special handling for img elements to capture the src attribute
      if (obj.tagName === "img" && node.src) {
        obj.src = node.src;
      }

      obj.children = Array.from(node.childNodes)
        .map((child) => createJSONFromHTML(child))
        .filter((child) => child !== null);

      break;

    case Node.TEXT_NODE:
      obj.type = "text";
      obj.content = node.nodeValue.trim();
      break;

    default: // Handle or ignore other types of nodes
      break;
  }

  return obj;
}

function createHTMLFromJSON(json, data) {
  let element;

  // Handle blocks
  if (json.type === "block") {
    const blocksData = data;
    if (blocksData && blocksData.length) {
      const blockJson = { ...json, type: "element" };
      const blockElements = blocksData.map((blockData) => {
        let blockElement = null;
        if (blockJson.data) {
          if (!validateData(blockJson.data.schema, blockData)) return null;
          let childData = blockJson.data.key
            ? blockData[blockJson.data.key]
            : blockData;
          blockElement = createHTMLFromJSON(blockJson, childData);
        } else {
          blockElement = createHTMLFromJSON(blockJson, blockData);
        }
        return blockElement;
      });
      return blockElements;
    }
  }

  // Handle element nodes
  if (json.type === "element") {
    // if (json.data && !validateData(json.data.schema, data)) {
    //   return false;
    // }

    element = document.createElement(json.tagName);

    // Set attributes
    if (json.attributes) {
      for (let attr in json.attributes) {
        element.setAttribute(attr, json.attributes[attr]);
      }
    }

    // Set class names
    if (json.className) {
      element.className = json.className;
    }

    // Set styles
    if (json.styles) {
      element.style.cssText = json.styles;
    }

    if (
      json.tagName === "img" &&
      json.className &&
      json.className.includes("upload-image-in-resume")
    ) {
      let imageSrc = replacePlaceholders(json.src, data);
      element.setAttribute("src", imageSrc);
      const fileInput = document.createElement("input");
      fileInput.setAttribute("type", "file");
      fileInput.setAttribute("accept", "image/*");
      fileInput.classList.add("hidden", "w-full", "h-full");
      fileInput.id = "upload-image-in-resume-fileInput";
      fileInput.style.display = "none";
      fileInput.style.width = "100%";
      fileInput.style.height = "100%";
      element = [element, fileInput];
    }

    // Process children
    if (json.children) {
      json.children.forEach((childJson) => {
        let childElement = null;
        if (childJson.type !== "block" && childJson.data) {
          if (childJson.data.key === "profilePic") {
            console.log("data: ", data);
            console.log(childJson.data.schema);
            console.log(validateData(childJson.data.schema, data));
          }
          if (!validateData(childJson.data.schema, data)) return;
          let childData = childJson.data.key ? data[childJson.data.key] : data;
          childElement = createHTMLFromJSON(childJson, childData);
        } else {
          childElement = createHTMLFromJSON(childJson, data);
        }

        if (childElement) {
          if (isArray(childElement)) {
            childElement.forEach((child) => {
              if (!child) return;
              element.appendChild(child);
            });
          } else {
            element.appendChild(childElement);
          }
        }
      });
    }
  }
  // Handle text nodes
  else if (json.type === "text") {
    let content = replacePlaceholders(json.content, data);
    element = document.createTextNode(content);
  }

  return element;
}

function validateData(schema, data) {
  const validate = validator({
    ...schema,
  });
  return validate(data);
}

const placeholderRegex = /{([\w.-]+)}/g;
function replacePlaceholders(str, data) {
  // console.log(str, ": ", data);
  return str.replace(placeholderRegex, (match, key) => {
    let currentValue = data;
    if (isObject(data)) {
      currentValue = data[key];
    }
    if (isArray(data)) {
      currentValue = data[key];
    }

    // Replace with the value; if null or undefined, use an empty string
    return currentValue !== null && currentValue !== undefined
      ? currentValue
      : "";
  });
}

export { createHTMLFromJSON, createJSONFromHTML, ignoreTags };
