function debounce(func, delay) {
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
};
