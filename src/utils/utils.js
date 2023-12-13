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

function normalizeToArray(value) {
  return [].concat(value);
}
function normalizeToString(value) {
  return value + "";
}

function arrayFrom(value) {
  return [].slice.call(value);
}
export { debounce, arrayFrom, isArray, normalizeToArray, normalizeToString };
