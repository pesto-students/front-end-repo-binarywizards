import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllTemplates } from "src/api-service/template/template-service";
import Skeleton from "react-loading-skeleton";
import FetchError from "src/components/fetch-error";

const TemplatesPage = () => {
  const navigate = useNavigate();

  const fetchTemplates = async () => {
    const response = await getAllTemplates();
    if (!response.status) {
      throw new Error(response.msg);
    }
    return response.data;
  };

  const {
    isLoading,
    error,
    data: templates,
  } = useQuery({
    queryKey: ["templates"],
    queryFn: fetchTemplates,
  });

  const createResume = (templateId) => {
    const action = "create";
    navigate(`../build-resume/${action}/${templateId}`);
  };

  if (error) {
    return (
      <div>
        <FetchError />
      </div>
    );
  }
  return (
    <div className="h-full flex flex-col px-10 py-8">
      <h1 className="text-2xl text-gray-900 font-bold">Choose a Template</h1>
      <div data-section="templates-grid" className="w-full">
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,220px))]  gap-8 mt-8 ">
          {isLoading
            ? [1, 2, 3].map((item) => (
                <div key={`skeleton-${item}`}>
                  <Skeleton className="h-[280px] w-[200px]" />
                </div>
              ))
            : templates.map((template, index) => {
                return (
                  <div
                    key={`resume-template-${index}`}
                    className="w-[200px] cursor-pointer border border-gray-300 border-solid hover:scale-105 transition-transform duration-300 ease-in-out"
                    onClick={() => {
                      createResume(template.id);
                    }}
                  >
                    <img
                      src={template.thumbnail}
                      alt="Resume template"
                      className="h-[280px]"
                    />
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;
