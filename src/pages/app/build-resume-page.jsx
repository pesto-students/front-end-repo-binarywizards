import Template from "src/components/template";

const BuildResume = () => {
  return (
    <div className="h-full px-10 py-4">
      <h1>Build Resume</h1>
      <div className="flex flex-col items-center justify-center h-full mb-8">
        <div className="flex-1 max-w-[600px] w-full shadow-2xl p-1 rounded">
          <Template />
        </div>
      </div>
      <div className="h-10 bg-primary w-full"></div>
    </div>
  );
};

export default BuildResume;
