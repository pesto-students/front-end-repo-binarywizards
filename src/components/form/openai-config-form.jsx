import { Modal } from "flowbite-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAiConfig } from "src/store/openAiSlice";
import {
  clearErrors,
  parseErrors,
  renderErrors,
  validator,
} from "src/utils/form-validator";
import { debounce } from "src/utils/utils";

const maxJobDescriptionLength = 450;

const validate = validator({
  type: "object",
  required: ["jobTitle", "jobDescription"],
  properties: {
    jobTitle: {
      type: "string",
      minLength: 1,
      errorMessage: {
        minLength: "Job Title is required",
      },
    },
    jobDescription: {
      type: "string",
      minLength: 1,
      maxLength: maxJobDescriptionLength,
      errorMessage: {
        minLength: "Job Description is required",
        maxLength: "Job Description should not be more than 450 characters",
      },
    },
  },
  errorMessage: {
    required: {
      jobTitle: "Job Title is required",
      jobDescription: "Job Description is required",
    },
  },
});

function OpenAiConfigForm({ openModal, setOpenModal }) {
  const { config } = useSelector((state) => state.openAiState);
  const dispatch = useDispatch();

  const [jobDescriptionLength, setJobDescriptionLength] = useState(0);
  const formRef = useRef();

  const handleJobDescriptionChange = (e) => {
    e.preventDefault();
    const value = e.target.value.trim();
    setJobDescriptionLength(value.length);
  };

  const debouncedJobDescriptionChange = debounce(
    handleJobDescriptionChange,
    200,
  );
  const handleSaveAiConfig = async (e) => {
    e.preventDefault();
    const formData = formRef.current;
    const { jobTitle, jobDescription } = formData;
    const isValid = validate({
      jobTitle: jobTitle.value,
      jobDescription: jobDescription.value,
    });
    if (!isValid) {
      const errors = parseErrors(validate.errors);
      renderErrors(errors, formData, ["jobTitle", "jobDescription"]);
      return;
    }
    clearErrors(formData, ["jobTitle", "jobDescription"]);

    const config = {
      jobTitle: jobTitle.value,
      jobDescription: jobDescription.value,
    };
    dispatch(setAiConfig({ config: config }));
    setOpenModal(false);
  };

  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)} size={"2xl"}>
        <Modal.Header>AI Configuration</Modal.Header>
        <Modal.Body>
          <form className="" ref={formRef}>
            <div className="mb-5">
              <label
                htmlFor="jobTitle"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                defaultValue={config["jobTitle"]}
                className="peer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="e.g Fullstack developer MERN stack"
                required
              />
              <p
                data-error="true"
                className="hidden peer-[.error]:block mt-2 text-sm text-red-600 dark:text-red-500"
              ></p>
            </div>
            <div className="mb-5 relative">
              <label
                htmlFor="jobDescription"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Job Description
              </label>
              <textarea
                id="jobDescription"
                name="jobDescription"
                defaultValue={config["jobDescription"]}
                placeholder="e.g We are seeking a highly skilled and motivated Full Stack Developer with a proven track record of 4 to 7 years in web development."
                rows="4"
                maxLength={maxJobDescriptionLength}
                className="peer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onInput={debouncedJobDescriptionChange}
              ></textarea>
              <div className="absolute right-0 flex justify-end my-1 text-gray-400 text-sm">
                <span>
                  {jobDescriptionLength}/{maxJobDescriptionLength}
                </span>
              </div>
              <p
                data-error="true"
                className="hidden peer-[.error]:block mt-2 text-sm text-red-600 dark:text-red-500"
              ></p>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className={"justify-end"}>
          <button
            type="button"
            onClick={() => setOpenModal(false)}
            className="group flex items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-accent-700 :ring-accent-700 focus:text-accent-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 rounded-lg focus:ring-2"
          >
            <span className="flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2">
              Cancel
            </span>
          </button>
          <button
            type="button"
            onClick={(event) => handleSaveAiConfig(event)}
            className="group flex items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-accent border border-transparent enabled:hover:bg-primary focus:ring-accent dark:bg-accent-600 dark:enabled:hover:bg-accent dark:focus:ring-accent-800 rounded-lg focus:ring-2"
          >
            <span className="flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2">
              Save
            </span>
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

OpenAiConfigForm.propTypes = {
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func,
};

export default OpenAiConfigForm;
