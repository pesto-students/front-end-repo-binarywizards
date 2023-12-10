const Template = () => {
  return (
    <div className="w-full h-full">
      <div className="h-full flex flex-row">
        <div className="w-2/5 h-full bg-primary"></div>
        <div className="w-3/5 h-full">
          <div
            data-section="template-title-section"
            className="p-5 bg-[#B4C6FC]"
          >
            <h1 className="text-4xl leading-none text-primary">Adelin</h1>
            <h1 className="text-4xl leading-none font-bold text-primary">
              Palmerston
            </h1>
            <p className="text-base text-primary">ML ENGINEER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
