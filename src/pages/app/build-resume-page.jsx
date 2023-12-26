import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Template from "src/components/template";
import TemplateForm from "src/components/template-form";
import {
  setResumeData,
  setTemplateData,
  updateResumeMetaData,
} from "src/store/builderSlice";
import GearIcon from "src/assets/icons/gear.svg?react";
import DownloadIcon from "src/assets/icons/download.svg?react";
import ShareIcon from "src/assets/icons/share.svg?react";
import TimesIcon from "src/assets/icons/times.svg?react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import CreateResumeForm from "src/components/create-resume-form";
import { getResume, updateResume } from "src/api-service/resume/resume-service";
import { getTemplate } from "src/api-service/template/template-service";
import { htmlToBlob } from "src/utils/htmlToBlob";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import FetchError from "src/components/fetch-error";
import Tippy from "@tippyjs/react";

const BuildResume = () => {
  const { action, templateId, resumeId } = useParams();
  const {
    template,
    resume,
    metaData: finalMetaData,
  } = useSelector((state) => state.builderState);
  const [metaData, setMetaData] = useState({});
  const [section, setSection] = useState("");
  const [openCreateResumeForm, setOpenCreateResumeForm] = useState(false);
  const dispatch = useDispatch();

  const isUpdateMode = action === "update" && !!resumeId;

  // Query for fetching template data
  const fetchTemplate = async () => {
    const response = await getTemplate(templateId);
    if (!response.status) {
      throw new Error(response.msg);
    }
    return response.data;
  };

  // Query for fetching resume data
  const fetchResume = async () => {
    const response = await getResume(resumeId);
    if (!response.status) {
      throw new Error(response.msg);
    }
    return response.data;
  };

  // React Query for template
  const {
    isLoading: isTemplateLoading,
    error: templateError,
    data: templateData,
  } = useQuery({
    queryKey: ["template", templateId],
    queryFn: fetchTemplate,
    enabled: !!templateId, // Ensure templateId is not null or undefined
  });

  // React Query for resume
  const {
    isLoading: isResumeLoading,
    error: resumeError,
    data: resumeData,
  } = useQuery({
    queryKey: ["resume", resumeId],
    queryFn: fetchResume,
    enabled: isUpdateMode, // Only enabled if action is 'update' and resumeId is present
  });
  const isLoading = isTemplateLoading || isResumeLoading;

  const updateMetaData = (newMetaData) => {
    const updatedMetaData = { ...metaData, ...newMetaData };
    setMetaData(updatedMetaData);
    dispatch(updateResumeMetaData({ metaData: updatedMetaData }));
  };

  const resetMetaData = () => {
    if (isUpdateMode) {
      setMetaData(resume.metaData);
    } else {
      setMetaData(template.metaData);
    }
  };

  const onChange = (newMetaData) => {
    updateMetaData(newMetaData);
  };
  const onDelete = (newMetaData) => {
    updateMetaData(newMetaData);
  };
  const onSelectedSection = (section) => {
    setSection(section);
  };

  const onSaveResume = () => {
    if (!isUpdateMode) {
      setOpenCreateResumeForm(true);
    } else {
      handleUpdateResume();
    }
  };

  const handleUpdateResume = async () => {
    const node = document.getElementById("resume-root");
    node.style["width"] = "595px";
    node.style["height"] = "842px";

    const resumeBlob = await htmlToBlob(node);
    const payload = new FormData();
    payload.append("files", resumeBlob, resume.name);
    payload.append("data", JSON.stringify({ metaData: finalMetaData }));
    const response = await updateResume(resume.id, payload);
    if (response.status) {
      toast.success(response.msg || "Resume updation success", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error(response.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    console.log(response);
  };

  useEffect(() => {
    if (resumeData) {
      updateMetaData(resumeData.metaData);
      dispatch(setResumeData({ resume: resumeData }));
    }
  }, [resumeData]);

  useEffect(() => {
    if (templateData) {
      if (!isUpdateMode) {
        updateMetaData(templateData.metaData);
      }
      dispatch(setTemplateData({ template: templateData }));
    }
  }, [templateData]);

  if (templateError || (action === "update" && resumeError)) {
    return (
      <div>
        <FetchError />
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col px-10 py-4">
      <h1>Build Resume</h1>
      <CreateResumeForm
        openModal={openCreateResumeForm}
        setOpenModal={setOpenCreateResumeForm}
      />

      <div className="flex-1 flex justify-center gap-x-[5%]">
        <div className="flex flex-col items-start justify-start max-w-[600px] w-full h-auto mb-8">
          <div data-title="header" className="w-full mb-4">
            <div className="w-full flex justify-between items-center">
              <div>
                <h1 className="text-base text-primary font-medium">
                  Block Editor
                </h1>
              </div>
              <div>
                {isLoading ? (
                  <div>
                    <Skeleton width={110} height={36} />
                  </div>
                ) : (
                  <button
                    type="button"
                    className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-accent rounded-lg hover:bg-accent-900 focus:ring-4 focus:outline-none focus:ring-accent-300"
                  >
                    <span className="me-2">
                      <GearIcon />
                    </span>
                    Configure
                  </button>
                )}
              </div>
            </div>
          </div>
          {section ? (
            <div className="w-full relative shadow-[0_6px_15px_#00000029] rounded border-t border-solid border-[#f3f3f3]">
              <div className="absolute right-0 top-0">
                <button
                  onClick={() => onSelectedSection("")}
                  className="bg-gray-200 hover:bg-gray-300 font-semibold m-1 p-1.5"
                >
                  <TimesIcon />
                </button>
              </div>
              <TemplateForm
                section={section}
                formSchema={templateData.formSchema[section]}
                data={metaData[section]}
                onChange={onChange}
                onDelete={onDelete}
              />
              <div className="absolute bottom-2 flex justify-center items-center w-full bg-transparent">
                <button
                  onClick={() => onSelectedSection("")}
                  className="text-sm text-accent-800 bg-white hover:text-accent font-semibold m-1 px-3 py-2 border border-gray-200 rounded-md"
                >
                  Discard
                </button>
              </div>
            </div>
          ) : (
            <div className=" w-full h-96 p-8 flex justify-center items-center rounded border-2 border-dashed border-gray-300">
              <h1 className="text-2xl font-semibold text-gray-400 text-center">
                Click edit button of any <br /> block in the template
              </h1>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center justify-start max-w-[600px] w-full h-full mb-8">
          <div data-title="header" className="w-full mb-4">
            <div className="w-full flex justify-between items-center">
              <div>
                <h1 className="text-base text-primary font-medium">
                  Template View
                </h1>
              </div>
              {isLoading ? (
                <div>
                  <Skeleton width={200} height={32} />
                </div>
              ) : (
                <div className="flex items-center">
                  <button
                    type="button"
                    className="px-3 py-1.5 ml-2 text-xs font-semibold text-center uppercase inline-flex items-center text-gray-800 bg-white rounded-md border-2 border-gray-300  hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-accent-300"
                    onClick={() => resetMetaData()}
                  >
                    Reset
                  </button>
                  <button
                    type="button"
                    className="px-3 py-1.5 ml-2 text-xs font-semibold text-center uppercase inline-flex items-center text-white bg-accent rounded-md border-2 border-accent  hover:bg-accent-900 hover:border-accent-900 focus:ring-4 focus:outline-none focus:ring-accent-300"
                    onClick={() => onSaveResume()}
                  >
                    {isUpdateMode ? "Update" : "Save"}
                  </button>
                  <Tippy content="Download Resume">
                    <button
                      type="button"
                      className="px-1.5 py-1.5 ml-2 text-xs font-medium text-center inline-flex items-center text-white bg-accent rounded-md hover:bg-accent-900 focus:ring-4 focus:outline-none focus:ring-accent-300"
                    >
                      <DownloadIcon />
                    </button>
                  </Tippy>
                  <Tippy content="Share your Resume">
                    <button
                      type="button"
                      className="px-1.5 py-1.5 ml-2 text-xs font-medium text-center inline-flex items-center text-white bg-accent rounded-md hover:bg-accent-900 focus:ring-4 focus:outline-none focus:ring-accent-300"
                    >
                      <ShareIcon />
                    </button>
                  </Tippy>
                </div>
              )}
            </div>
          </div>
          <div className=" w-full shadow-[0_6px_15px_#00000029] p-1 rounded border-t border-solid border-[#f3f3f3]">
            {isLoading ? (
              <div>
                <Skeleton
                  className="w-[350px] lg:w-[400px] xl:w-[592px]"
                  height={840}
                />
              </div>
            ) : (
              <Template
                json={templateData.template}
                data={metaData}
                onSelectedSection={onSelectedSection}
              />
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-[300px] bg-transparent"></div>
    </div>
  );
};

export default BuildResume;
