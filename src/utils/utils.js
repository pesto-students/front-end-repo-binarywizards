function debounce(func, delay = 300) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func(...args);
    }, delay);
  };
}

const isArray = (value) => Array.isArray(value);
const isFunction = (value) => typeof value === "function";
function isObject(value) {
  return (
    value && typeof value === "object" && !isArray(value) && !isFunction(value)
  );
}

function normalizeToArray(value) {
  return [].concat(value);
}
function normalizeToString(value) {
  return value + "";
}

function arrayFrom(value) {
  return [].slice.call(value);
}

function isType(value, type) {
  const str = {}.toString.call(value);
  return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
}
function isElement(value) {
  return ["Element", "Fragment"].some(function (type) {
    return isType(value, type);
  });
}
function isNodeList(value) {
  return isType(value, "NodeList");
}

function getUsernameAbbreviation(username) {
  // Split the username into words based on spaces
  const words = username.trim().split(/\s+/);

  // Check the number of words in the username
  if (words.length > 1) {
    // Return the first letter of the first two words
    return words[0][0] + words[1][0];
  } else {
    // Return the first two letters of the username
    return username.substring(0, 2);
  }
}
export {
  debounce,
  arrayFrom,
  isArray,
  isObject,
  normalizeToArray,
  normalizeToString,
  isType,
  isElement,
  isNodeList,
  getUsernameAbbreviation,
};
