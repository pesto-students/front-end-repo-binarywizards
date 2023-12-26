import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllResumes } from "src/api-service/resume/resume-service";

const MyResumes = () => {
  const navigate = useNavigate();

  // Query for fetching all user Resume
  const fetchUserResume = async () => {
    const response = await getAllResumes();
    if (!response.status) {
      throw new Error(response.msg);
    }
    return response.data;
  };

  const { error: errorData, data: resumeData } = useQuery({
    queryFn: fetchUserResume,
  });

  const updateResume = (templateId, resumeId) => {
    templateId = templateId || "658421f96582459b0a2a6f09";
    resumeId = resumeId || "6586caee589735ab41da32d6";
    const action = "update";
    navigate(`/app/build-resume/${action}/${templateId}/${resumeId}`);
  };

  console.log(resumeData);
  return (
    <div className="h-full flex flex-col px-10 py-8">
      <h1 className="text-2xl text-gray-900 font-bold">My Resumes</h1>
      <div data-section="templates-grid" className="w-full">
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,220px))]  gap-8 mt-8 ">
          {resumeData?.length > 0 ? (
            resumeData.map((resume, index) => {
              return (
                <div
                  key={`resume-template-${index}`}
                  className="w-[200px] cursor-pointer bg-white p-4 border-4 border-gray-500"
                  onClick={() => {
                    updateResume(resume.templateId, resume.id);
                  }}
                >
                  <img
                    src={resume}
                    alt="Resume template"
                    className="w-full h-auto"
                    onError="this.onerror=null; this.src='empty-photo-url'"
                  />
                </div>
              );
            })
          ) : (
            <div className="watermark">
              You don't have any, Create Your First Perfect Resume With Us!!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyResumes;
