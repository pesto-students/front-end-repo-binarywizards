import Navbar from "src/components/navbar";
import perfectResumeIllustration from "src/assets/landing-page-illustration.png";
import resume1 from "src/assets/templates/resume-1.png";
import resume2 from "src/assets/templates/resume-2.png";
import resume3 from "src/assets/templates/resume-3.png";
import resume4 from "src/assets/templates/resume-4.png";
import resume5 from "src/assets/templates/resume-5.png";
import resume6 from "src/assets/templates/resume-6.png";
import handIcon from "src/assets/icons/hand.svg";
import aiNetworkIcon from "src/assets/icons/ai-network.svg";
import feedbackHandIcon from "src/assets/icons/feedback-hand.svg";
import feature1 from "src/assets/features/feature-1.png";
import feature2 from "src/assets/features/feature-2.png";
import feature3 from "src/assets/features/feature-3.png";
import { sections } from "src/constants/constants";
import Icon from "src/components/icon";
import { useNavigate } from "react-router-dom";

const resumes = [resume1, resume2, resume3, resume4, resume5, resume6];
console.log(resumes);

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen overflow-auto">
      <Navbar />
      <div data-section={sections.home}>
        <section name={sections.home}>
          <div
            id={sections.home}
            className="w-full flex justify-center pt-[83px]"
          >
            <div className="max-w-screen-xl px-5 lg:px-4 pl-6 flex flex-col-reverse md:flex-row items-center ">
              <div className="flex-1">
                <div className="max-w-lg">
                  <h1 className="text-2xl leading-7 md:text-2xl min-[920px]:text-3xl lg:text-4xl text-gray-900 font-bold over break-words">
                    Craft a{" "}
                    <strong className="text-primary font-bold">
                      {" "}
                      Professional{" "}
                    </strong>{" "}
                    Resume with an Integrated Feedback System, with the power of
                    <span className="text-primary mx-1 whitespace-nowrap">
                      AI + Experts
                    </span>
                  </h1>
                </div>
                <div>
                  <button
                    type="button"
                    className="text-white bg-accent hover:bg-accent-900 focus:ring-4 focus:outline-none  focus:ring-accent-300 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2 mt-6"
                    onClick={() => navigate("/signup")}
                  >
                    Craft your resume
                  </button>
                </div>
              </div>
              <div className="flex-1 max-w-md md:max-w-full">
                <img
                  src={perfectResumeIllustration}
                  alt="Perfect resume illustration"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div data-section={sections.templates}>
        <section name={sections.templates}>
          <div
            id={sections.templates}
            className="w-full flex justify-center pt-24"
          >
            <div className="max-w-screen-xl px-5 lg:px-4 pl-6 flex items-center">
              <div className=" flex flex-col items-center">
                <div className="flex-1 flex flex-col items-center">
                  <h1 className="text-xl sm:text-3xl font-semibold text-gray-900 text-center">
                    Build a standout resume with our sleek templates
                  </h1>
                  <p className="text-base sm:text-lg leading-6 text-primary text-center max-w-3xl mt-3">
                    Our templates are carefully crafted to give your resume a
                    contemporary and polished look, making it visually appealing
                    to recruiters.
                  </p>
                </div>
                <div className="max-w-5xl w-full">
                  <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,220px))] justify-items-center justify-center gap-8 mt-8">
                    {resumes.map((resume, index) => {
                      return (
                        <div
                          key={`resume-template-${index}`}
                          className="w-[200px] "
                        >
                          <img src={resume} alt="Resume template" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div data-section={sections.features}>
        <section name={sections.features}>
          <div id={sections.features} className="w-full  mt-24 border-y">
            <div className="flex justify-center">
              <div className="max-w-screen-xl px-5 lg:px-4 pt-14 ">
                <h1 className="text-xl sm:text-3xl text-center font-semibold text-gray-900 py-4 mb-14">
                  Our Offerings
                </h1>
                <div className="">
                  <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12 mb-24">
                    <div className="flex-1 flex flex-col max-w-xl">
                      <Icon
                        icon={handIcon}
                        className="w-16 bg-sky-100 rounded-lg mb-4 p-1 hidden md:block"
                      />
                      <h5 className="text-lg font-semibold text-gray-900 mb-1">
                        Effortless Resume Creation
                      </h5>
                      <p className="text-base sm:text-lg text-gray-700">
                        Creating a powerful resume has never been easier! With
                        our user-friendly platform, you can effortlessly build
                        your resume quickly and efficiently. Our intuitive tools
                        and templates streamline the process, allowing you to
                        generate a standout resume in no time. Experience the
                        convenience of crafting your resume with speed and ease,
                        and take the first step toward landing your dream job
                      </p>
                    </div>
                    <div className="flex-1 max-w-sm md:max-w-lg">
                      <img
                        src={feature1}
                        alt="Effortless Resume Creation Illustration"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center  gap-8 md:gap-12 mb-24">
                    <div className="flex-1 flex flex-col max-w-xl">
                      <Icon
                        icon={aiNetworkIcon}
                        className="w-16 bg-sky-100 rounded-lg mb-4 p-1 hidden md:block"
                      />
                      <h5 className="text-lg font-semibold text-gray-900 mb-1">
                        Seamless Resume Crafting with AI
                      </h5>
                      <p className="text-base sm:text-lg text-gray-700">
                        Experience the future of resume creation with our
                        cutting-edge AI support. Our platform offers a seamless
                        and intuitive way to build your resume, backed by AI
                        assistance that refines your content and formatting.
                        Elevate your job application game by effortlessly
                        creating a standout resume with our AI-powered support,
                        putting your best foot forward in your career journey
                      </p>
                    </div>
                    <div className="flex-1 max-w-sm md:max-w-lg">
                      <img
                        src={feature2}
                        alt="Seamless Resume Crafting with AI Illustration"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12 mb-24">
                    <div className="flex-1 flex flex-col max-w-xl">
                      <Icon
                        icon={feedbackHandIcon}
                        className="w-16 bg-sky-100 rounded-lg mb-4 p-2 hidden md:block"
                      />
                      <h5 className="text-lg font-semibold text-gray-900 mb-1">
                        Resume Perfection through Collaborative Feedback
                      </h5>
                      <p className="text-base sm:text-lg text-gray-700">
                        Achieve resume excellence with our collaborative
                        feedback system. Share your resume with reviewers or on
                        social media and gather insights from experts and peers.
                        Our platform simplifies the review process, allowing you
                        to fine-tune your resume for a polished and standout
                        presentation
                      </p>
                    </div>
                    <div className="flex-1 max-w-sm md:max-w-lg">
                      <img
                        src={feature3}
                        alt="Resume Perfection through Collaborative Feedback Illustration"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div data-section={sections.about}>
        <section name={sections.about}>
          <div id={sections.about} className="w-full pt-14">
            <div className="flex justify-center">
              <div className="max-w-screen-xl px-5 lg:px-4 pl-6">
                <div className=" flex-1 flex flex-col items-start">
                  <h1 className="text-xl sm:text-3xl font-semibold text-gray-900">
                    Get Started on Your Resume Journey
                  </h1>
                  <p className="text-base sm:text-lg leading-6 text-gray-700 max-w-3xl mt-3">
                    Ready to embark on your path to a standout resume and career
                    success? It&apos;s easy to get started with our platform.
                    Begin crafting your exceptional resume today and take that
                    crucial first step towards achieving your professional goals
                  </p>
                  <button
                    type="button"
                    className="text-white bg-accent hover:bg-accent-900 focus:ring-4 focus:outline-none  focus:ring-accent-300 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2 mt-6"
                    onClick={() => navigate("/signup")}
                  >
                    Craft your resume
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full bg-primary p-4 mt-14">
              <div className="flex justify-center">
                <div className="max-w-screen-xl px-4 pl-6">
                  <h1 className="text-white text-lg text-center font-semibold">
                    PerfectResume.ai
                  </h1>
                  <p className="max-w-2xl text-white text-sm text-center font-light">
                    Your resume transformation is our priority. Feel free to
                    reach out with any questions or inquiries.
                    <br />© 2023 PerfectResume.ai. All rights reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
