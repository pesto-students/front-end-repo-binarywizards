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

const formValidator = (formData, validations) => {
  let valid = true;
  for (const field in validations) {
    if (Object.hasOwnProperty.call(validations, field)) {
      const rules = validations[field];
      let input = formData[field];
      if (!input) continue; // Skip if the field is not found

      const [isRequired, isRequiredPeer] = normalizeToArray(rules.isRequired);
      if (isRequired && (!input.value || !input.value.trim())) {
        input.classList.add(normalizeToString(isRequiredPeer));
        valid = false;
        continue;
      }
      input.classList.remove(normalizeToString(isRequiredPeer));

      const [min, minPeer] = normalizeToArray(rules.min);
      if (min && input.value.length < min) {
        input.classList.add(normalizeToString(minPeer));
        valid = false;
        continue;
      }
      input.classList.remove(normalizeToString(minPeer));

      const [max, maxPeer] = normalizeToArray(rules.max);
      if (max && input.value.length > max) {
        input.classList.add(normalizeToString(maxPeer));
        valid = false;
        continue;
      }
      input.classList.remove(normalizeToString(maxPeer));
    }
  }
  return valid;
};

export {
  formValidator,
  arrayFrom,
  isArray,
  normalizeToArray,
  normalizeToString,
};
