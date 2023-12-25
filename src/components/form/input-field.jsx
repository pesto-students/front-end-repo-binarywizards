import PropTypes from "prop-types";

const InputField = ({ field, data, order }) => {
  return (
    <>
      {order ? (
        <>
          <label
            htmlFor={`${field.key}-${order}`}
            className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
          >
            {`${field.label}`}
          </label>
          <input
            data-repeatable="true"
            data-order={order}
            data-key={field.key}
            type="text"
            id={`${field.key}-${order}`}
            name={`${field.key}-${order}`}
            defaultValue={data[field.key]}
            placeholder={field.placeholder}
            maxLength={field.maxLength}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </>
      ) : (
        <>
          <label
            htmlFor={field.key}
            className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
          >
            {field.label}
          </label>
          <input
            type="text"
            id={field.key}
            name={field.key}
            defaultValue={data[field.key]}
            placeholder={field.placeholder}
            maxLength={field.maxLength}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </>
      )}
    </>
  );
};

InputField.propTypes = {
  field: PropTypes.object,
  data: PropTypes.object,
  order: PropTypes.number,
};

export default InputField;
