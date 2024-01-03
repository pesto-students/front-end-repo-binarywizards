import PropTypes from "prop-types";
import { propTypes } from "src/utils/props";

const TextArea = ({ field, data, order, children }) => {
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
          <div className="relative">
            {children}
            <textarea
              data-repeatable="true"
              data-order={order}
              data-key={field.key}
              id={`${field.key}-${order}`}
              name={`${field.key}-${order}`}
              defaultValue={data[field.key]}
              placeholder={field.placeholder}
              rows={field.rows}
              maxLength={field.maxLength}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none custom-scrollbar pr-[40px]"
            ></textarea>
          </div>
        </>
      ) : (
        <>
          <label
            htmlFor={field.key}
            className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
          >
            {field.label}
          </label>
          <div className="relative">
            {children}
            <textarea
              id={field.key}
              name={field.key}
              defaultValue={data[field.key]}
              placeholder={field.placeholder}
              rows={field.rows}
              maxLength={field.maxLength}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none custom-scrollbar pr-[40px]"
            ></textarea>
          </div>
        </>
      )}
    </>
  );
};

TextArea.propTypes = {
  field: PropTypes.object,
  data: PropTypes.object,
  order: PropTypes.number,
  children: propTypes["children?"],
};

export default TextArea;
