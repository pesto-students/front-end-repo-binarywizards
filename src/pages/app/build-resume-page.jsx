import { useState } from "react";
import Template from "src/components/template";
import TemplateForm from "src/components/template-form";
import { dataSchema, metaData, template2 } from "src/utils/template";

const BuildResume = () => {
  const [data, setData] = useState(metaData);
  const [section, setSection] = useState("");

  const onChange = (newData) => {
    setData((data) => {
      return { ...data, ...newData };
    });
  };
  const onSelectedSection = (section) => {
    setSection(section);
  };
  return (
    <div className="h-full flex flex-col px-10 py-4">
      <h1>Build Resume</h1>

      <div className="flex-1 flex justify-center gap-x-[5%]">
        <div className="flex items-start justify-center max-w-[600px] w-full h-auto mb-8">
          <div className="flex-1 w-full shadow-[0_6px_15px_#00000029] rounded p-8">
            {section ? (
              <TemplateForm
                section={section}
                dataSchema={dataSchema[section]}
                data={data[section]}
                onChange={onChange}
              />
            ) : (
              <div>
                <h1>Click on any of the edit button</h1>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center max-w-[600px] w-full h-full mb-8">
          <div className="flex-1  w-full shadow-[0_6px_15px_#00000029] p-1 rounded">
            <Template
              json={template2}
              data={data}
              onSelectedSection={onSelectedSection}
            />
          </div>
        </div>
      </div>
      <div className="h-10 bg-primary mt-8 w-full"></div>
    </div>
  );
};

export default BuildResume;
