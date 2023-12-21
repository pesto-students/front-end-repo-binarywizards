import { useNavigate } from "react-router-dom";
import resume1 from "src/assets/templates/resume-1.png";
import resume2 from "src/assets/templates/resume-2.png";
import resume3 from "src/assets/templates/resume-3.png";
import resume4 from "src/assets/templates/resume-4.png";
import resume5 from "src/assets/templates/resume-5.png";
import resume6 from "src/assets/templates/resume-6.png";

const resumes = [resume1, resume2, resume3, resume4, resume5, resume6];

const TemplatesPage = () => {
  const navigate = useNavigate();

  const createResume = (id) => {
    id = id || "658421f96582459b0a2a6f09";
    navigate(`../build-resume/${id}`);
  };
  return (
    <div className="h-full flex flex-col px-10 py-8">
      <h1 className="text-2xl text-gray-900 font-bold">Choose a Template</h1>
      <div data-section="templates-grid" className="w-full">
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,220px))]  gap-8 mt-8 ">
          {resumes.map((resume, index) => {
            return (
              <div
                key={`resume-template-${index}`}
                className="w-[200px] cursor-pointer"
                onClick={() => {
                  createResume();
                }}
              >
                <img src={resume} alt="Resume template" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;
