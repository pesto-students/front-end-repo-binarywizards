import { normalizeToArray, normalizeToString } from "./utils";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import addErrors from "ajv-errors";

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
addErrors(ajv);

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

// Define a priority for the keywords
const priority = {
  required: 1,
  minLength: 2,
  format: 3,
  // ... add other priorities as needed
};

const validator = (schema) => {
  const validate = ajv.compile(schema);
  return validate;
};

const parseErrors = (errors, customPriority) => {
  // Sort errors based on priority
  const errorPriority = customPriority || priority;
  const sortedErrors = errors.sort((a, b) => {
    const priorityA = errorPriority[a.keyword] || Number.MAX_VALUE; // default to lowest priority if not found
    const priorityB = errorPriority[b.keyword] || Number.MAX_VALUE; // default to lowest priority if not found
    return priorityA - priorityB;
  });
  // Construct the error map with priority, only keeping the highest priority error for each field
  const errorMap = {};
  for (const error of sortedErrors) {
    const fieldName = error.instancePath.substring(1); // Assuming instancePath is like '/email'
    // Only set the error if one hasn't been set for this field yet, or this error has higher priority
    if (
      !errorMap[fieldName] ||
      errorPriority[error.keyword] < errorPriority[errorMap[fieldName].keyword]
    ) {
      errorMap[fieldName] = error.message; // or construct a custom message if needed
    }
  }
  return errorMap;
};

const clearErrors = (formData, keys) => {
  keys.forEach((key) => {
    const element = formData[key];
    element.classList.remove("error");
  });
};

const renderErrors = (errors, formData, keys) => {
  clearErrors(formData, keys);
  for (const key in errors) {
    if (Object.hasOwnProperty.call(errors, key)) {
      const element = formData[key];
      let errorEle = element && element.nextElementSibling;
      while (errorEle) {
        if (errorEle.matches('p[data-error="true"]')) {
          // Found the sibling p tag with the data-error attribute
          break;
        }
        errorEle = errorEle.nextElementSibling; // move to the next sibling
      }
      element.classList.add("error");
      errorEle.textContent = errors[key];
    }
  }
};

export { formValidator, validator, parseErrors, renderErrors, clearErrors };
