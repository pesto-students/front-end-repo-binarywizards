import profile from "src/assets/templates/adeline.png";
import Icon from "src/components/icon";
import editIcon from "src/assets/icons/pencil.svg";
import { createJSONFromHTML } from "src/utils/template-parser";
import { useEffect } from "react";

const CreateTemplate = () => {
  //   useEffect(() => {
  //     let json = createJSONFromHTML(document.getElementById("resume-root"));
  //     console.log("json: ", json);
  //   }, []);
  return (
    <div className="h-full flex flex-col px-10 py-4">
      <div className="flex-1 flex justify-center gap-x-[5%]">
        <div className="flex flex-col items-center justify-center max-w-[600px] w-full h-full mb-8">
          <div className="flex-1  w-full shadow-[0_6px_15px_#00000029] p-1 rounded">
            <div id="resume-root" className="w-full h-full">
              <div className="h-full flex flex-row">
                <div className="template-leftside-section w-2/5 h-full bg-primary">
                  <div className="template-profile-section">
                    <div className="flex justify-center mt-4">
                      <div className="w-36 h-36">
                        <img src={profile} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="template-contact-section mx-4 mt-6">
                    <h1 className="text-xs leading-none text-white uppercase font-bold mb-2">
                      Contact Info
                    </h1>
                    <div className="flex items-start">
                      <div className="w-[10px] h-[16px] mr-2 flex items-center justify-center text-[#B4C6FC]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-[11px] leading-4 text-white">
                        3205 Eden Drive, Glen All Virginia - 23060
                      </p>
                    </div>
                    <div className="flex items-start mt-2">
                      <div className="w-[10px] h-[16px] mr-2 flex items-center justify-center text-[#B4C6FC]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.106 6.447A2 2 0 001 8.237V16a2 2 0 002 2h14a2 2 0 002-2V8.236a2 2 0 00-1.106-1.789l-7-3.5a2 2 0 00-1.788 0l-7 3.5zm1.48 4.007a.75.75 0 00-.671 1.342l5.855 2.928a2.75 2.75 0 002.46 0l5.852-2.926a.75.75 0 10-.67-1.342l-5.853 2.926a1.25 1.25 0 01-1.118 0l-5.856-2.928z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-[11px] leading-4 text-white">
                        palmerston@mail.com
                      </p>
                    </div>
                    <div className="flex items-start mt-2">
                      <div className="w-[10px] h-[16px] mr-2 flex items-center justify-center text-[#B4C6FC]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-[11px] leading-4 text-white">
                        123-456-789
                      </p>
                    </div>
                  </div>
                  <div className="template-contact-section mx-4 mt-6">
                    <h1 className="text-xs leading-none text-white uppercase font-bold mb-2">
                      Skills Summary
                    </h1>
                    <div className="flex items-center">
                      <div className="mr-2 flex items-center justify-center text-[#B4C6FC]">
                        <span className="rounded-full p-[3px] mr-[1px] bg-white"></span>
                        <span className="rounded-full p-[3px] mr-[1px] bg-white"></span>
                        <span className="rounded-full p-[3px] mr-[1px] bg-white"></span>
                        <span className="rounded-full p-[3px] mr-[1px] bg-white"></span>
                        <span className="rounded-full p-[3px] mr-[1px] bg-white"></span>
                      </div>
                      <p className="text-[11px] leading-4 text-white">Python</p>
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="mr-2 flex items-center justify-center text-[#B4C6FC]">
                        <span className="rounded-full p-[3px] mr-[1px] bg-white"></span>
                        <span className="rounded-full p-[3px] mr-[1px] bg-white"></span>
                        <span className="rounded-full p-[3px] mr-[1px] bg-white"></span>
                        <span className="rounded-full p-[3px] mr-[1px] bg-[#B4C6FC]"></span>
                        <span className="rounded-full p-[3px] mr-[1px] bg-[#B4C6FC]"></span>
                      </div>
                      <p className="text-[11px] leading-4 text-white">
                        Tensorflow
                      </p>
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="mr-2 flex items-center justify-center text-[#B4C6FC]">
                        <span className="rounded-full p-[3px] mr-[1px] bg-white"></span>
                        <span className="rounded-full p-[3px] mr-[1px] bg-white"></span>
                        <span className="rounded-full p-[3px] mr-[1px] bg-[#B4C6FC]"></span>
                        <span className="rounded-full p-[3px] mr-[1px] bg-[#B4C6FC]"></span>
                        <span className="rounded-full p-[3px] mr-[1px] bg-[#B4C6FC]"></span>
                      </div>
                      <p className="text-[11px] leading-4 text-white">Keras</p>
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="mr-2 flex items-center justify-center text-[#B4C6FC]">
                        <span className="rounded-full p-[3px] mr-[1px] bg-white"></span>
                        <span className="rounded-full p-[3px] mr-[1px] bg-white"></span>
                        <span className="rounded-full p-[3px] mr-[1px] bg-white"></span>
                        <span className="rounded-full p-[3px] mr-[1px] bg-white"></span>
                        <span className="rounded-full p-[3px] mr-[1px] bg-[#B4C6FC]"></span>
                      </div>
                      <p className="text-[11px] leading-4 text-white">Django</p>
                    </div>
                  </div>
                  <div className="template-contact-section mx-4 mt-6">
                    <h1 className="text-xs leading-none text-white uppercase font-bold mb-2">
                      Awards Received
                    </h1>
                    <div className="flex items-start">
                      <div className="w-[10px] h-[16px] mr-2 flex items-center justify-center text-[#B4C6FC]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-[11px] leading-4 text-white">
                        Most Outstanding Employee of the Year, Pixelpoint Hive
                        (2015)
                      </p>
                    </div>
                    <div className="flex items-start mt-2">
                      <div className="w-[10px] h-[16px] mr-2 flex items-center justify-center text-[#B4C6FC]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-[11px] leading-4 text-white">
                        Best Mobile App Design, HGFZ Graduate Center (2014)
                      </p>
                    </div>
                    <div className="flex items-start mt-2">
                      <div className="w-[10px] h-[16px] mr-2 flex items-center justify-center text-[#B4C6FC]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-[11px] leading-4 text-white">
                        Design Award, Cliffmoor College (2012)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="template-rightside-section w-3/5 h-full">
                  <div
                    data-section="template-titleSection"
                    className="p-5 py-8 bg-[#B4C6FC]"
                  >
                    <div className="relative">
                      <div id="IGNORE_THIS_IN_PDF">
                        <div className="absolute right-0 top-0">
                          <button
                            id="edit-btn"
                            data-section="titleSection"
                            className="bg-primary text-white rounded-[4px] p-[2px]"
                          >
                            <Icon icon={editIcon} />
                          </button>
                        </div>
                      </div>
                      <h1 className="text-4xl leading-none text-primary">
                        Adeline
                      </h1>
                      <h1 className="text-4xl leading-none font-bold text-primary">
                        Palmerston
                      </h1>
                      <p className="text-base text-primary">ML ENGINEER</p>
                    </div>
                  </div>
                  <div className="template-profile-section mt-8">
                    <div className="px-5">
                      <h1 className="text-xs leading-none text-primary uppercase font-bold mb-2">
                        Personal Profile
                      </h1>
                      <p className="text-[11px] leading-4 text-[#6B7280]">
                        A Python developer with 5.8 years of experience in
                        Django, Flask for Retail eCommerce, POS and Storage
                        domain.
                      </p>
                    </div>
                  </div>
                  <div className="template-workexperience-section mt-8">
                    <div className="px-5">
                      <h1 className="text-xs leading-none text-primary uppercase font-bold mb-2">
                        Work Experience
                      </h1>
                      <div className="template-workexperience-section--one mt-4">
                        <h1 className="text-xs leading-none text-[#374151] uppercase font-bold mb-2">
                          Quantumai Labs
                        </h1>
                        <p className="text-[11px] leading-4 text-[#6B7280] mt-2">
                          ML ENGINEER | Jan 2022 - Present
                        </p>
                        <div className="flex flex-row items-baseline mt-2">
                          <span className="p-0.5 mr-2 rounded-full bg-[#19010A]"></span>
                          <p className="text-[11px] leading-4 text-[#6B7280]">
                            Utilized PySpark to distribute data processing on
                            large streaming datasets to improve ingestion and
                            processing speed of that daat by 87%
                          </p>
                        </div>
                        <div className="flex flex-row items-baseline mt-2">
                          <span className="p-0.5 mr-2 rounded-full bg-[#19010A]"></span>
                          <p className="text-[11px] leading-4 text-[#6B7280]">
                            Utilized PySpark to distribute data processing on
                            large streaming datasets to improve ingestion and
                            processing speed of that daat by 87%
                          </p>
                        </div>
                      </div>
                      <div className="template-workexperience-section--one mt-4">
                        <h1 className="text-xs leading-none text-[#374151] uppercase font-bold mb-2">
                          Intellecta AI
                        </h1>
                        <p className="text-[11px] leading-4 text-[#6B7280] mt-2">
                          ML ENGINEER | Jan 2020 - Dec 2021
                        </p>
                        <div className="flex flex-row items-baseline mt-2">
                          <span className="p-0.5 mr-2 rounded-full bg-[#19010A]"></span>
                          <p className="text-[11px] leading-4 text-[#6B7280]">
                            Utilized PySpark to distribute data processing on
                            large streaming datasets to improve ingestion and
                            processing speed of that daat by 87%
                          </p>
                        </div>
                        <div className="flex flex-row items-baseline mt-2">
                          <span className="p-0.5 mr-2 rounded-full bg-[#19010A]"></span>
                          <p className="text-[11px] leading-4 text-[#6B7280]">
                            Utilized PySpark to distribute data processing on
                            large streaming datasets to improve ingestion and
                            processing speed of that daat by 87%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTemplate;
