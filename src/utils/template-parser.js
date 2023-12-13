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

  // Handle element nodes
  if (json.type === "element") {
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

    // Process children
    if (json.children) {
      json.children.forEach((childJson) => {
        let childElement = createHTMLFromJSON(childJson, data);
        if (childElement) {
          element.appendChild(childElement);
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

const placeholderRegex = /{([\w.-]+)}/g;
function replacePlaceholders(str, data) {
  return str.replace(placeholderRegex, (match, key) => {
    // Split the key by '.' to access nested properties
    const keys = key.split(".");
    let currentValue = data;

    // Iterate through the keys to access the nested property
    for (const k of keys) {
      if (
        currentValue !== null &&
        currentValue !== undefined &&
        k in currentValue
      ) {
        currentValue = currentValue[k];
      } else {
        // If the key doesn't exist, return an empty string
        return "";
      }
    }

    // Replace with the value; if null or undefined, use an empty string
    return currentValue !== null && currentValue !== undefined
      ? currentValue
      : "";
  });
}

export { createHTMLFromJSON, createJSONFromHTML, ignoreTags };
