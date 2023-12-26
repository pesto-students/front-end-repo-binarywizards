import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllResumes } from "src/api-service/resume/resume-service";

const MyResumes = () => {
  const navigate = useNavigate();

  const fetchResumes = async () => {
    const response = await getAllResumes();
    if (!response.status) {
      throw new Error(response.msg);
    }
    return response.data;
  };

  const {
    isLoading,
    error,
    data: resumes,
  } = useQuery({
    queryKey: ["resumes"],
    queryFn: fetchResumes,
  });

  const updateResume = (templateId, resumeId) => {
    const action = "update";
    navigate(`/app/build-resume/${action}/${templateId}/${resumeId}`);
  };

  // Conditional rendering or further logic
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data...</div>;
  }
  return (
    <div className="h-full flex flex-col px-10 py-8">
      <h1 className="text-2xl text-gray-900 font-bold">My Resumes</h1>
      <div data-section="templates-grid" className="w-full">
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,220px))]  gap-8 mt-8 ">
          {resumes.map((resume, index) => {
            return (
              <div
                key={`resume-template-${index}`}
                className="w-[200px]"
                onClick={() => {
                  updateResume(resume.templateId, resume.id);
                }}
              >
                <div className="mb-2 cursor-pointer border border-gray-300 border-solid">
                  <img src={resume.thumbnail} alt="Resume" />
                </div>
                <div>
                  <h5 className="text-base font-medium capitalize">
                    {resume.name}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyResumes;
