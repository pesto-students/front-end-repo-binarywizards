import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Template from "src/components/template";
import TemplateForm from "src/components/template-form";
import { updateMetaData } from "src/store/builderSlice";

const BuildResume = () => {
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
  const onSelectedSection = (section) => {
    setSection(section);
  };
  return (
    <div className="h-full flex flex-col px-10 py-4">
      <h1>Build Resume</h1>

      <div className="flex-1 flex justify-center gap-x-[5%]">
        <div className="flex items-start justify-center max-w-[600px] w-full h-auto mb-8">
          <div className="flex-1 w-full shadow-[0_6px_15px_#00000029] rounded">
            {section ? (
              <TemplateForm
                section={section}
                dataSchema={dataSchema[section]}
                data={data[section]}
                onChange={onChange}
              />
            ) : (
              <div className="p-8">
                <h1>Click on any of the edit button</h1>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[600px] w-full h-full mb-8">
          <div className=" w-full shadow-[0_6px_15px_#00000029] p-1 rounded">
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
