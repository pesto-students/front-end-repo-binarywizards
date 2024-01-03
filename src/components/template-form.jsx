import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { debounce, isArray } from "src/utils/utils";
import TextArea from "./form/text-area";
import InputField from "./form/input-field";
import AiButton from "./ai-btn";
import Loader from "./loader";

const TemplateForm = ({ formSchema, data, onChange, onDelete, section }) => {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const rephrase = (key, value) => {
    console.log("key: ", key);
    console.log("value: ", value);
    setIsLoading(true);
  };

  const onFormChange = () => {
    debounceUpdateFormData();
  };

  const deleteBlock = (blockId) => {
    if (isArray(data)) {
      let newData = data.filter((item) => item.order !== blockId);
      let finalData = { [section]: newData };
      onDelete(finalData);
    }
  };

  function mergeItemsByOrder(arr) {
    return Object.values(
      arr.reduce((acc, item) => {
        const order = item.order;

        // If the order doesn't exist in the accumulator, initialize an empty object
        acc[order] = acc[order] || {};

        // Merge the current item into the object for this order
        Object.assign(acc[order], item);

        return acc;
      }, {}),
    );
  }
  const updateFormData = () => {
    const formData = formRef.current;

    const finalData = {};
    if (formSchema.fieldType.repeatable && formSchema.fieldType.isBlock) {
      const newFormData = new FormData(formRef.current);
      let tempData = [];
      for (let [key, value] of newFormData.entries()) {
        let order = formData[key].dataset.order;
        let actualKey = formData[key].dataset.key;
        value = value ? value.replace(/[{}]/g, "") : "";
        tempData.push({ [actualKey]: value, order: parseInt(order) });
      }
      let newData = mergeItemsByOrder(tempData);
      finalData[section] = newData;
    }
    if (formSchema.fieldType.repeatable && !formSchema.fieldType.isBlock) {
      const newFormData = new FormData(formRef.current);
      let newData = [];
      for (let [key, value] of newFormData.entries()) {
        let order = formData[key].dataset.order;
        let actualKey = formData[key].dataset.key;
        value = value ? value.replace(/[{}]/g, "") : "";
        newData.push({ [actualKey]: value, order: parseInt(order) });
      }
      finalData[section] = newData;
    }
    if (!formSchema.fieldType.repeatable) {
      let newData = {};
      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          let value = formData[key].value;
          value = value ? value.replace(/[{}]/g, "") : "";
          newData[key] = value;
        }
      }

      finalData[section] = { ...data, ...newData };
    }

    // console.log("newData: ", finalData[section]);
    onChange(finalData);
  };

  const generateNewBlock = (formSchema, order) => {
    const { schema } = formSchema;
    const newBlock = schema.reduce((acc, current) => {
      acc[current.key] = current.placeholder;
      return acc;
    }, {});
    newBlock["order"] = order + 1;
    const finalData = { [section]: [...data, newBlock] };
    onChange(finalData);
  };

  const generateForm = (formSchema, data) => {
    if (formSchema.fieldType.repeatable && isArray(data)) {
      let formFields = [];
      data.forEach((item) => {
        formSchema.schema.forEach((fieldData) => {
          let field = null;
          if (fieldData.type === "input") {
            field = (
              <div key={`${fieldData.label}-${item["order"]}`} className="mb-6">
                <InputField
                  field={fieldData}
                  data={item}
                  order={item["order"]}
                />
              </div>
            );
          }
          if (fieldData.type === "textarea") {
            field = (
              <div key={`${fieldData.label}-${item["order"]}`} className="mb-6">
                <TextArea field={fieldData} data={item} order={item["order"]}>
                  {fieldData.includeAi ? (
                    <div className="absolute right-0 bottom-[9px]  z-50">
                      <AiButton
                        onClick={() =>
                          rephrase(fieldData.key, item[fieldData.key])
                        }
                      />
                    </div>
                  ) : null}
                </TextArea>
              </div>
            );
          }
          formFields.push(field);
        });
        if (formSchema.fieldType.isBlock) {
          let action = (
            <div key={`Delete-block-${item.order}`} className="mt-4 mb-20">
              <button
                type="button"
                onClick={() => deleteBlock(item.order)}
                className="rounded py-1.5 text-sm text-red-500 uppercase font-semibold border border-red-500 border-dashed w-full"
              >
                Delete Block
              </button>
            </div>
          );
          formFields.push(action);
        }
      });
      if (
        formSchema.fieldType.isBlock &&
        data.length < formSchema.fieldType.max
      ) {
        let largestOrder = data.reduce(
          (max, item) => (item.order > max ? item.order : max),
          data[0].order,
        );
        let action = (
          <div key={`Add-block`} className="mt-4 mb-2">
            <button
              type="button"
              className="rounded py-1.5 text-sm text-primary uppercase font-semibold border border-accent-900 border-dashed w-full"
              onClick={() => {
                generateNewBlock(formSchema, largestOrder);
              }}
            >
              Add Block
            </button>
          </div>
        );
        formFields.push(action);
      }
      return formFields;
    }
    if (!(formSchema.fieldType.repeatable || isArray(data))) {
      return formSchema.schema.map((fieldData) => {
        if (fieldData.type === "input") {
          return (
            <div key={fieldData.label} className="mb-6">
              <InputField field={fieldData} data={data} />
            </div>
          );
        }
        if (fieldData.type === "textarea") {
          return (
            <div key={fieldData.label} className="mb-6">
              <TextArea field={fieldData} data={data}>
                {fieldData.includeAi ? (
                  <div className="absolute right-0 bottom-[9px]  z-50">
                    <AiButton onClick={(e) => rephrase(e)} />
                  </div>
                ) : null}
              </TextArea>
            </div>
          );
        }
      });
    }

    return "loading...";
  };
  const debounceUpdateFormData = debounce(updateFormData, 400);

  return (
    <div className="max-h-[840px] p-8 overflow-auto mb-10 custom-scrollbar">
      <Loader openModal={isLoading} setOpenModal={setIsLoading} />
      <form onChange={onFormChange} ref={formRef}>
        {generateForm(formSchema, data)}
      </form>
    </div>
  );
};
TemplateForm.propTypes = {
  section: PropTypes.string,
  formSchema: PropTypes.shape({
    fieldType: PropTypes.shape({
      repeatable: PropTypes.bool,
      isBlock: PropTypes.bool,
      max: PropTypes.number,
      includeAi: PropTypes.bool,
    }),
    schema: PropTypes.arrayOf(PropTypes.object),
  }),
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
};

export default TemplateForm;
