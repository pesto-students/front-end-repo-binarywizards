import { Modal } from "flowbite-react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { createResume } from "src/api-service/resume/resume-service";
import { formValidator } from "src/utils/form-validator";
import { htmlToBlob } from "src/utils/htmlToBlob";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoaderContext } from "src/contexts/loader-context";

function CreateResumeForm({ openModal, setOpenModal }) {
  const { toggleLoader } = useContext(LoaderContext);
  const { template, resume, metaData } = useSelector(
    (state) => state.builderState,
  );
  const formRef = useRef();
  const navigate = useNavigate();

  const handleCreateResume = async () => {
    const formData = formRef.current;
    const validations = {
      name: {
        type: "text",
        isRequired: [true, "is-required"],
      },
    };
    let isValid = formValidator(formData, validations);
    if (!isValid) return;
    const { name, isPrivate } = formData;
    const jsonData = {
      ...resume,
      metaData,
      templateId: template.id,
      name: name.value,
      isPrivate: isPrivate.checked,
    };

    const node = document.getElementById("resume-root");
    node.style["width"] = "595px";
    node.style["height"] = "842px";

    toggleLoader(true, "Creating your Resume, Please wait for few seconds...");
    const resumeBlob = await htmlToBlob(node);
    const payload = new FormData();
    payload.append("image", resumeBlob, name.value);
    payload.append("data", JSON.stringify(jsonData));

    const response = await createResume({ payload });
    toggleLoader();
    if (response.status) {
      setOpenModal(false);
      toast.success(response.msg || "Resume creation success", {
        position: toast.POSITION.TOP_CENTER,
      });
      const { templateId, id } = response.data;
      redirectToUpdateResume(templateId, id);
    } else {
      toast.error(response.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    console.log(response);
  };

  const redirectToUpdateResume = (templateId, resumeId) => {
    const action = "update";
    navigate(`/app/build-resume/${action}/${templateId}/${resumeId}`);
  };
  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)} size={"md"}>
        <Modal.Header>Create Resume</Modal.Header>
        <Modal.Body>
          <form className="max-w-sm" ref={formRef}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Resume Name
              </label>
              <input
                type="text"
                id="name"
                className="peer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 focus-visible:outline-blue-500 block w-full  p-2.5 "
                placeholder="e.g Software Resume"
                required
              />
              <p className="hidden peer-[.is-required]:peer-required:block mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Resume Name</span> is rquired
              </p>
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="isPrivate"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="isPrivate"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Make it Private
              </label>
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
            onClick={() => handleCreateResume(false)}
            className="group flex items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-accent border border-transparent enabled:hover:bg-primary focus:ring-accent dark:bg-accent-600 dark:enabled:hover:bg-accent dark:focus:ring-accent-800 rounded-lg focus:ring-2"
          >
            <span className="flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2">
              Create
            </span>
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

CreateResumeForm.propTypes = {
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func,
};

export default CreateResumeForm;
