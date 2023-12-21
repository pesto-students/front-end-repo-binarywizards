import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Template from "src/components/template";
import TemplateForm from "src/components/template-form";
import { updateMetaData } from "src/store/builderSlice";
import GearIcon from "src/assets/icons/gear.svg?react";
import DownloadIcon from "src/assets/icons/download.svg?react";
import ShareIcon from "src/assets/icons/share.svg?react";
import TimesIcon from "src/assets/icons/times.svg?react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { apiService } from "src/api-service/api-service";

const BuildResume = () => {
  const { id } = useParams();
  const {
    isLoading,
    error,
    data: resData,
  } = useQuery({
    queryKey: ["template"],
    queryFn: async () => {
      const res = await apiService.template(id);
      console.log("res: ", res);
      return res;
    },
  });
  console.log("id: ", id);
  const {
    defaultData: { dataSchema, metaData, template },
    resume,
  } = useSelector((state) => state.builderState);
  const [data, setData] = useState({ ...metaData, ...resume.metaData });
  const [section, setSection] = useState("");
  const dispatch = useDispatch();

  const onChange = (newData) => {
    const metaData = { ...data, ...newData };
    setData(metaData);
    dispatch(updateMetaData({ metaData }));
  };
  const onDelete = (newData) => {
    const metaData = { ...data, ...newData };
    setData(metaData);
    dispatch(updateMetaData({ metaData }));
  };
  const onSelectedSection = (section) => {
    setSection(section);
  };

  const onSaveResume = () => {
    console.log("resume: ", resume.metaData);
  };

  // if (isLoading) return "Loading...";
  // if (error) return "An error has occurred: " + error.message;
  // if (resData) return JSON.stringify(resData);
  return (
    <div className="h-full flex flex-col px-10 py-4">
      <h1>Build Resume</h1>

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
                <button
                  type="button"
                  className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-accent rounded-lg hover:bg-accent-900 focus:ring-4 focus:outline-none focus:ring-accent-300"
                >
                  <span className="me-2">
                    <GearIcon />
                  </span>
                  Configure
                </button>
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
                dataSchema={dataSchema[section]}
                data={data[section]}
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
              <div className="flex items-center">
                <button
                  type="button"
                  className="px-3 py-1.5 ml-2 text-xs font-semibold text-center uppercase inline-flex items-center text-gray-800 bg-white rounded-md border-2 border-gray-300  hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-accent-300"
                >
                  Reset
                </button>
                <button
                  type="button"
                  className="px-3 py-1.5 ml-2 text-xs font-semibold text-center uppercase inline-flex items-center text-white bg-accent rounded-md border-2 border-accent  hover:bg-accent-900 hover:border-accent-900 focus:ring-4 focus:outline-none focus:ring-accent-300"
                  onClick={() => onSaveResume()}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="px-1.5 py-1.5 ml-2 text-xs font-medium text-center inline-flex items-center text-white bg-accent rounded-md hover:bg-accent-900 focus:ring-4 focus:outline-none focus:ring-accent-300"
                >
                  <DownloadIcon />
                </button>

                <button
                  type="button"
                  className="px-1.5 py-1.5 ml-2 text-xs font-medium text-center inline-flex items-center text-white bg-accent rounded-md hover:bg-accent-900 focus:ring-4 focus:outline-none focus:ring-accent-300"
                >
                  <ShareIcon />
                </button>
              </div>
            </div>
          </div>
          <div className=" w-full shadow-[0_6px_15px_#00000029] p-1 rounded border-t border-solid border-[#f3f3f3]">
            <Template
              json={template}
              data={data}
              onSelectedSection={onSelectedSection}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[300px] bg-transparent"></div>
    </div>
  );
};

export default BuildResume;
