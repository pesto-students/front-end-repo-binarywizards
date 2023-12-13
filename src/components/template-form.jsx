import PropTypes from "prop-types";
import { useRef } from "react";
import { debounce } from "src/utils/utils";
const TemplateForm = ({ dataSchema, data, onChange, section }) => {
  const formRef = useRef();

  const onFormChange = () => {
    debounceUpdateFormData();
  };
  const updateFormData = () => {
    const formData = formRef.current;
    const newData = {};
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        let value = formData[key].value;
        value = value ? value.replace(/[{}]/g, "") : "";
        newData[key] = value;
      }
    }
    console.log("newData: ", newData);
    const finalData = {};
    finalData[section] = { ...data, ...newData };
    onChange(finalData);
  };
  const debounceUpdateFormData = debounce(updateFormData, 400);
  return (
    <div>
      <form onChange={onFormChange} ref={formRef}>
        {dataSchema.map((field) => {
          if (field.type === "input") {
            return (
              <div key={field.label} className="mb-6">
                <label
                  htmlFor="default-input"
                  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                >
                  {field.label}
                </label>
                <input
                  type="text"
                  id={field.key}
                  name={field.key}
                  defaultValue={field.value}
                  placeholder={field.placeholder}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            );
          }
        })}
      </form>
    </div>
  );
};
TemplateForm.propTypes = {
  section: PropTypes.string,
  dataSchema: PropTypes.array,
  data: PropTypes.object,
  onChange: PropTypes.func,
};

export default TemplateForm;
