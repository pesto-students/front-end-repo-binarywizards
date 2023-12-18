const metaData = {
  titleSection: {
    firstName: "Adeline",
    lastName: "Palmerston",
    role: "ML ENGINEER",
  },
  skills: [
    { skill: "Python", score: "5" },
    { skill: "Tensorflow", score: "3" },
    { skill: "Keras", score: "2" },
    { skill: "Django", score: "4" },
  ],
  workExperience: [
    {
      title: "QuantumAI Labs",
      role: "ML Engineer",
      startDate: "Apr 2019",
      endDate: "Present",
      pointOne:
        "Utilized PySpark to distribute data processing on large streaming datasets to improve ingestion and processing speed of that daat by 87%",
      pointTwo:
        "Build basic ETL that ingested transactional and event data from a web app with 10,000 daily active users that saved over $85,000 annually in external vendor costs",
    },
    {
      title: "INTELLECTA AI",
      role: "ML Engineer",
      startDate: "Apr 2018",
      endDate: "Apr 2019",
      pointOne:
        "Utilized PySpark to distribute data processing on large streaming datasets to improve ingestion and processing speed of that daat by 87%",
      // pointTwo:
      //   "Build basic ETL that ingested transactional and event data from a web app with 10,000 daily active users that saved over $85,000 annually in external vendor costs",
    },
  ],
};

const dataSchema = {
  titleSection: [
    {
      type: "input",
      key: "firstName",
      label: "First Name",
      value: "",
      placeholder: "e.g John",
    },
    {
      type: "input",
      key: "lastName",
      label: "Last Name",
      value: "",
      placeholder: "e.g Doe",
    },
    {
      type: "input",
      key: "role",
      label: "Role",
      value: "",
      placeholder: "e.g ML Engineer",
    },
  ],
  section: [
    {
      type: "input",
      key: "title",
      label: "Title",
      value: "",
      placeholder: "",
    },
    {
      type: "input",
      key: "role",
      label: "Role / Responsibility / Course",
      value: "",
      placeholder: "e.g ",
    },
  ],
};

const template2 = {
  type: "element",
  tagName: "div",
  attributes: {
    id: "resume-root",
    class: "w-full h-full",
  },
  className: "w-full h-full",
  children: [
    {
      type: "element",
      tagName: "div",
      attributes: {
        class: "h-full flex flex-row",
      },
      className: "h-full flex flex-row",
      children: [
        {
          type: "element",
          tagName: "div",
          attributes: {
            class: "template-leftside-section w-2/5 h-full bg-primary",
          },
          className: "template-leftside-section w-2/5 h-full bg-primary",
          children: [
            {
              type: "element",
              tagName: "div",
              attributes: {
                class: "template-profile-section",
              },
              className: "template-profile-section",
              children: [
                {
                  type: "element",
                  tagName: "div",
                  attributes: {
                    class: "flex justify-center mt-4",
                  },
                  className: "flex justify-center mt-4",
                  children: [
                    {
                      type: "element",
                      tagName: "div",
                      attributes: {
                        class: "w-36 h-36",
                      },
                      className: "w-36 h-36",
                      children: [
                        {
                          type: "element",
                          tagName: "img",
                          attributes: {
                            src: "/src/assets/templates/adeline.png",
                            alt: "",
                          },
                          src: "http://localhost:5173/src/assets/templates/adeline.png",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "element",
              tagName: "div",
              attributes: {
                class: "template-contact-section mx-4 mt-6",
              },
              className: "template-contact-section mx-4 mt-6",
              children: [
                {
                  type: "element",
                  tagName: "h1",
                  attributes: {
                    class:
                      "text-xs leading-none text-white uppercase font-bold mb-2",
                  },
                  className:
                    "text-xs leading-none text-white uppercase font-bold mb-2",
                  children: [
                    {
                      type: "text",
                      content: "Contact Info",
                    },
                  ],
                },
                {
                  type: "element",
                  tagName: "div",
                  attributes: {
                    class: "flex items-start",
                  },
                  className: "flex items-start",
                  children: [
                    {
                      type: "element",
                      tagName: "div",
                      attributes: {
                        class:
                          "w-[10px] h-[16px] mr-2 flex items-center justify-center text-[#B4C6FC]",
                      },
                      className:
                        "w-[10px] h-[16px] mr-2 flex items-center justify-center text-[#B4C6FC]",
                      children: [
                        {
                          type: "element",
                          tagName: "svg",
                          attributes: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            class: "w-5 h-5",
                          },
                          className: "w-5 h-5",
                          children: [
                            {
                              type: "element",
                              tagName: "path",
                              attributes: {
                                "fill-rule": "evenodd",
                                d: "M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z",
                                "clip-rule": "evenodd",
                              },
                              className: "",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "element",
                      tagName: "p",
                      attributes: {
                        class: "text-[11px] leading-4 text-white",
                      },
                      className: "text-[11px] leading-4 text-white",
                      children: [
                        {
                          type: "text",
                          content: "3205 Eden Drive, Glen All Virginia - 23060",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "element",
                  tagName: "div",
                  attributes: {
                    class: "flex items-start mt-2",
                  },
                  className: "flex items-start mt-2",
                  children: [
                    {
                      type: "element",
                      tagName: "div",
                      attributes: {
                        class:
                          "w-[10px] h-[16px] mr-2 flex items-center justify-center text-[#B4C6FC]",
                      },
                      className:
                        "w-[10px] h-[16px] mr-2 flex items-center justify-center text-[#B4C6FC]",
                      children: [
                        {
                          type: "element",
                          tagName: "svg",
                          attributes: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            class: "w-5 h-5",
                          },
                          className: "w-5 h-5",
                          children: [
                            {
                              type: "element",
                              tagName: "path",
                              attributes: {
                                "fill-rule": "evenodd",
                                d: "M2.106 6.447A2 2 0 001 8.237V16a2 2 0 002 2h14a2 2 0 002-2V8.236a2 2 0 00-1.106-1.789l-7-3.5a2 2 0 00-1.788 0l-7 3.5zm1.48 4.007a.75.75 0 00-.671 1.342l5.855 2.928a2.75 2.75 0 002.46 0l5.852-2.926a.75.75 0 10-.67-1.342l-5.853 2.926a1.25 1.25 0 01-1.118 0l-5.856-2.928z",
                                "clip-rule": "evenodd",
                              },
                              className: "",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "element",
                      tagName: "p",
                      attributes: {
                        class: "text-[11px] leading-4 text-white",
                      },
                      className: "text-[11px] leading-4 text-white",
                      children: [
                        {
                          type: "text",
                          content: "palmerston@mail.com",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "element",
                  tagName: "div",
                  attributes: {
                    class: "flex items-start mt-2",
                  },
                  className: "flex items-start mt-2",
                  children: [
                    {
                      type: "element",
                      tagName: "div",
                      attributes: {
                        class:
                          "w-[10px] h-[16px] mr-2 flex items-center justify-center text-[#B4C6FC]",
                      },
                      className:
                        "w-[10px] h-[16px] mr-2 flex items-center justify-center text-[#B4C6FC]",
                      children: [
                        {
                          type: "element",
                          tagName: "svg",
                          attributes: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            class: "w-5 h-5",
                          },
                          className: "w-5 h-5",
                          children: [
                            {
                              type: "element",
                              tagName: "path",
                              attributes: {
                                "fill-rule": "evenodd",
                                d: "M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z",
                                "clip-rule": "evenodd",
                              },
                              className: "",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "element",
                      tagName: "p",
                      attributes: {
                        class: "text-[11px] leading-4 text-white",
                      },
                      className: "text-[11px] leading-4 text-white",
                      children: [
                        {
                          type: "text",
                          content: "123-456-789",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "element",
              tagName: "div",
              attributes: {
                class: "template-contact-section mx-4 mt-6",
              },
              className: "template-contact-section mx-4 mt-6",
              children: [
                {
                  type: "element",
                  tagName: "h1",
                  attributes: {
                    class:
                      "text-xs leading-none text-white uppercase font-bold mb-2",
                  },
                  className:
                    "text-xs leading-none text-white uppercase font-bold mb-2",
                  children: [
                    {
                      type: "text",
                      content: "Skills Summary",
                    },
                  ],
                },
                {
                  type: "element",
                  tagName: "div",
                  attributes: {
                    class: "flex items-center",
                  },
                  className: "flex items-center",
                  children: [
                    {
                      type: "element",
                      tagName: "div",
                      attributes: {
                        class:
                          "mr-2 flex items-center justify-center text-[#B4C6FC]",
                      },
                      className:
                        "mr-2 flex items-center justify-center text-[#B4C6FC]",
                      children: [
                        {
                          type: "element",
                          tagName: "span",
                          attributes: {
                            class: "rounded-full p-[3px] mr-[1px] bg-white",
                          },
                          className: "rounded-full p-[3px] mr-[1px] bg-white",
                          children: [],
                        },
                        {
                          type: "element",
                          tagName: "span",
                          attributes: {
                            class: "rounded-full p-[3px] mr-[1px] bg-white",
                          },
                          className: "rounded-full p-[3px] mr-[1px] bg-white",
                          children: [],
                        },
                        {
                          type: "element",
                          tagName: "span",
                          attributes: {
                            class: "rounded-full p-[3px] mr-[1px] bg-white",
                          },
                          className: "rounded-full p-[3px] mr-[1px] bg-white",
                          children: [],
                        },
                        {
                          type: "element",
                          tagName: "span",
                          attributes: {
                            class: "rounded-full p-[3px] mr-[1px] bg-white",
                          },
                          className: "rounded-full p-[3px] mr-[1px] bg-white",
                          children: [],
                        },
                        {
                          type: "element",
                          tagName: "span",
                          attributes: {
                            class: "rounded-full p-[3px] mr-[1px] bg-white",
                          },
                          className: "rounded-full p-[3px] mr-[1px] bg-white",
                          children: [],
                        },
                      ],
                    },
                    {
                      type: "element",
                      tagName: "p",
                      attributes: {
                        class: "text-[11px] leading-4 text-white",
                      },
                      className: "text-[11px] leading-4 text-white",
                      children: [
                        {
                          type: "text",
                          content: "Python",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "element",
                  tagName: "div",
                  attributes: {
                    class: "flex items-center mt-2",
                  },
                  className: "flex items-center mt-2",
                  children: [
                    {
                      type: "element",
                      tagName: "div",
                      attributes: {
                        class:
                          "mr-2 flex items-center justify-center text-[#B4C6FC]",
                      },
                      className:
                        "mr-2 flex items-center justify-center text-[#B4C6FC]",
                      children: [
                        {
                          type: "element",
                          tagName: "span",
                          attributes: {
                            class: "rounded-full p-[3px] mr-[1px] bg-white",
                          },
                          className: "rounded-full p-[3px] mr-[1px] bg-white",
                          children: [],
                        },
                        {
                          type: "element",
                          tagName: "span",
                          attributes: {
                            class: "rounded-full p-[3px] mr-[1px] bg-white",
                          },
                          className: "rounded-full p-[3px] mr-[1px] bg-white",
                          children: [],
                        },
                        {
                          type: "element",
                          tagName: "span",
                          attributes: {
                            class: "rounded-full p-[3px] mr-[1px] bg-white",
                          },
                          className: "rounded-full p-[3px] mr-[1px] bg-white",
                          children: [],
                        },
                        {
                          type: "element",
                          tagName: "span",
                          attributes: {
                            class: "rounded-full p-[3px] mr-[1px] bg-[#B4C6FC]",
                          },
                          className:
                            "rounded-full p-[3px] mr-[1px] bg-[#B4C6FC]",
                          children: [],
                        },
                        {
                          type: "element",
                          tagName: "span",
                          attributes: {
                            class: "rounded-full p-[3px] mr-[1px] bg-[#B4C6FC]",
                          },
                          className:
                            "rounded-full p-[3px] mr-[1px] bg-[#B4C6FC]",
                          children: [],
                        },
                      ],
                    },
                    {
                      type: "element",
                      tagName: "p",
                      attributes: {
                        class: "text-[11px] leading-4 text-white",
                      },
                      className: "text-[11px] leading-4 text-white",
                      children: [
                        {
                          type: "text",
                          content: "Tensorflow",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "element",
                  tagName: "div",
                  attributes: {
                    class: "flex items-center mt-2",
                  },
                  className: "flex items-center mt-2",
                  children: [
                    {
                      type: "element",
                      tagName: "div",
                      attributes: {
                        class:
                          "mr-2 flex items-center justify-center text-[#B4C6FC]",
                      },
                      className:
                        "mr-2 flex items-center justify-center text-[#B4C6FC]",
                      children: [
                        {
                          type: "element",
                          tagName: "span",
                          attributes: {
                            class: "rounded-full p-[3px] mr-[1px] bg-white",
                          },
                          className: "rounded-full p-[3px] mr-[1px] bg-white",
                          children: [],
                        },
                        {
                          type: "element",
                          tagName: "span",
                          attributes: {
                            class: "rounded-full p-[3px] mr-[1px] bg-white",
                          },
                          className: "rounded-full p-[3px] mr-[1px] bg-white",
                          children: [],
                        },
                        {
                          type: "element",
                          tagName: "span",
                          attributes: {
                            class: "rounded-full p-[3px] mr-[1px] bg-[#B4C6FC]",
                          },
                          className:
                            "rounded-full p-[3px] mr-[1px] bg-[#B4C6FC]",
                          children: [],
                        },
                        {
                          type: "element",
                          tagName: "span",
                          attributes: {
                            class: "rounded-full p-[3px] mr-[1px] bg-[#B4C6FC]",
                          },
                          className:
                            "rounded-full p-[3px] mr-[1px] bg-[#B4C6FC]",
                          children: [],
                        },
                        {
                          type: "element",
                          tagName: "span",
                          attributes: {
                            class: "rounded-full p-[3px] mr-[1px] bg-[#B4C6FC]",
                          },
                          className:
                            "rounded-full p-[3px] mr-[1px] bg-[#B4C6FC]",
                          children: [],
                        },
                      ],
                    },
                    {
                      type: "element",
                      tagName: "p",
                      attributes: {
                        class: "text-[11px] leading-4 text-white",
                      },
                      className: "text-[11px] leading-4 text-white",
                      children: [
                        {
                          type: "text",
                          content: "Keras",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "element",
                  tagName: "div",
                  attributes: {
                    class: "flex items-center mt-2",
                  },
                  className: "flex items-center mt-2",
                  children: [
                    {
                      type: "element",
                      tagName: "div",
                      attributes: {
                        class:
                          "mr-2 flex items-center justify-center text-[#B4C6FC]",
                      },
                      className:
                        "mr-2 flex items-center justify-center text-[#B4C6FC]",
                      children: [
                        {
                          type: "element",
                          tagName: "span",
                          attributes: {
                            class: "rounded-full p-[3px] mr-[1px] bg-white",
                          },
                          className: "rounded-full p-[3px] mr-[1px] bg-white",
                          children: [],
                        },
                        {
                          type: "element",
                          tagName: "span",
                          attributes: {
                            class: "rounded-full p-[3px] mr-[1px] bg-white",
                          },
                          className: "rounded-full p-[3px] mr-[1px] bg-white",
                          children: [],
                        },
                        {
                          type: "element",
                          tagName: "span",
                          attributes: {
                            class: "rounded-full p-[3px] mr-[1px] bg-white",
                          },
                          className: "rounded-full p-[3px] mr-[1px] bg-white",
                          children: [],
                        },
                        {
                          type: "element",
                          tagName: "span",
                          attributes: {
                            class: "rounded-full p-[3px] mr-[1px] bg-white",
                          },
                          className: "rounded-full p-[3px] mr-[1px] bg-white",
                          children: [],
                        },
                        {
                          type: "element",
                          tagName: "span",
                          attributes: {
                            class: "rounded-full p-[3px] mr-[1px] bg-[#B4C6FC]",
                          },
                          className:
                            "rounded-full p-[3px] mr-[1px] bg-[#B4C6FC]",
                          children: [],
                        },
                      ],
                    },
                    {
                      type: "element",
                      tagName: "p",
                      attributes: {
                        class: "text-[11px] leading-4 text-white",
                      },
                      className: "text-[11px] leading-4 text-white",
                      children: [
                        {
                          type: "text",
                          content: "Django",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "element",
              tagName: "div",
              attributes: {
                class: "template-contact-section mx-4 mt-6",
              },
              className: "template-contact-section mx-4 mt-6",
              children: [
                {
                  type: "element",
                  tagName: "h1",
                  attributes: {
                    class:
                      "text-xs leading-none text-white uppercase font-bold mb-2",
                  },
                  className:
                    "text-xs leading-none text-white uppercase font-bold mb-2",
                  children: [
                    {
                      type: "text",
                      content: "Awards Received",
                    },
                  ],
                },
                {
                  type: "element",
                  tagName: "div",
                  attributes: {
                    class: "flex items-start",
                  },
                  className: "flex items-start",
                  children: [
                    {
                      type: "element",
                      tagName: "div",
                      attributes: {
                        class:
                          "w-[10px] h-[16px] mr-2 flex items-center justify-center text-[#B4C6FC]",
                      },
                      className:
                        "w-[10px] h-[16px] mr-2 flex items-center justify-center text-[#B4C6FC]",
                      children: [
                        {
                          type: "element",
                          tagName: "svg",
                          attributes: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            class: "w-5 h-5",
                          },
                          className: "w-5 h-5",
                          children: [
                            {
                              type: "element",
                              tagName: "path",
                              attributes: {
                                "fill-rule": "evenodd",
                                d: "M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z",
                                "clip-rule": "evenodd",
                              },
                              className: "",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "element",
                      tagName: "p",
                      attributes: {
                        class: "text-[11px] leading-4 text-white",
                      },
                      className: "text-[11px] leading-4 text-white",
                      children: [
                        {
                          type: "text",
                          content:
                            "Most Outstanding Employee of the Year, Pixelpoint Hive (2015)",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "element",
                  tagName: "div",
                  attributes: {
                    class: "flex items-start mt-2",
                  },
                  className: "flex items-start mt-2",
                  children: [
                    {
                      type: "element",
                      tagName: "div",
                      attributes: {
                        class:
                          "w-[10px] h-[16px] mr-2 flex items-center justify-center text-[#B4C6FC]",
                      },
                      className:
                        "w-[10px] h-[16px] mr-2 flex items-center justify-center text-[#B4C6FC]",
                      children: [
                        {
                          type: "element",
                          tagName: "svg",
                          attributes: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            class: "w-5 h-5",
                          },
                          className: "w-5 h-5",
                          children: [
                            {
                              type: "element",
                              tagName: "path",
                              attributes: {
                                "fill-rule": "evenodd",
                                d: "M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z",
                                "clip-rule": "evenodd",
                              },
                              className: "",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "element",
                      tagName: "p",
                      attributes: {
                        class: "text-[11px] leading-4 text-white",
                      },
                      className: "text-[11px] leading-4 text-white",
                      children: [
                        {
                          type: "text",
                          content:
                            "Best Mobile App Design, HGFZ Graduate Center (2014)",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "element",
                  tagName: "div",
                  attributes: {
                    class: "flex items-start mt-2",
                  },
                  className: "flex items-start mt-2",
                  children: [
                    {
                      type: "element",
                      tagName: "div",
                      attributes: {
                        class:
                          "w-[10px] h-[16px] mr-2 flex items-center justify-center text-[#B4C6FC]",
                      },
                      className:
                        "w-[10px] h-[16px] mr-2 flex items-center justify-center text-[#B4C6FC]",
                      children: [
                        {
                          type: "element",
                          tagName: "svg",
                          attributes: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            class: "w-5 h-5",
                          },
                          className: "w-5 h-5",
                          children: [
                            {
                              type: "element",
                              tagName: "path",
                              attributes: {
                                "fill-rule": "evenodd",
                                d: "M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z",
                                "clip-rule": "evenodd",
                              },
                              className: "",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "element",
                      tagName: "p",
                      attributes: {
                        class: "text-[11px] leading-4 text-white",
                      },
                      className: "text-[11px] leading-4 text-white",
                      children: [
                        {
                          type: "text",
                          content: "Design Award, Cliffmoor College (2012)",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "element",
          tagName: "div",
          attributes: {
            class: "template-rightside-section w-3/5 h-full",
          },
          className: "template-rightside-section w-3/5 h-full",
          children: [
            {
              type: "element",
              tagName: "div",
              attributes: {
                "data-section": "template-titleSection",
                class: "p-5 py-8 bg-[#B4C6FC]",
              },
              className: "p-5 py-8 bg-[#B4C6FC]",
              children: [
                {
                  type: "element",
                  tagName: "div",
                  attributes: {
                    class: "relative",
                  },
                  className: "relative",
                  children: [
                    {
                      type: "element",
                      tagName: "div",
                      attributes: {
                        id: "IGNORE_THIS_IN_PDF",
                      },
                      children: [
                        {
                          type: "element",
                          tagName: "div",
                          attributes: {
                            class: "absolute right-0 top-0",
                          },
                          className: "absolute right-0 top-0",
                          children: [
                            {
                              type: "element",
                              tagName: "button",
                              attributes: {
                                id: "edit-btn",
                                "data-section": "titleSection",
                                class:
                                  "bg-primary text-white rounded-[4px] p-[2px]",
                              },
                              className:
                                "bg-primary text-white rounded-[4px] p-[2px]",
                              children: [
                                {
                                  type: "element",
                                  tagName: "img",
                                  attributes: {
                                    src: "/src/assets/icons/pencil.svg",
                                    alt: "",
                                  },
                                  src: "http://localhost:5173/src/assets/icons/pencil.svg",
                                  children: [],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "element",
                      tagName: "h1",
                      attributes: {
                        class: "text-4xl leading-none text-primary",
                      },
                      className: "text-4xl leading-none text-primary",
                      children: [
                        {
                          type: "text",
                          content: "{titleSection.firstName}",
                        },
                      ],
                    },
                    {
                      type: "element",
                      tagName: "h1",
                      attributes: {
                        class: "text-4xl leading-none font-bold text-primary",
                      },
                      className: "text-4xl leading-none font-bold text-primary",
                      children: [
                        {
                          type: "text",
                          content: "{titleSection.lastName}",
                        },
                      ],
                    },
                    {
                      type: "element",
                      tagName: "p",
                      attributes: {
                        class: "text-base text-primary",
                      },
                      className: "text-base text-primary",
                      children: [
                        {
                          type: "text",
                          content: "{titleSection.role}",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "element",
              tagName: "div",
              attributes: {
                class: "template-profile-section mt-8",
              },
              className: "template-profile-section mt-8",
              children: [
                {
                  type: "element",
                  tagName: "div",
                  attributes: {
                    class: "px-5",
                  },
                  className: "px-5",
                  children: [
                    {
                      type: "element",
                      tagName: "h1",
                      attributes: {
                        class:
                          "text-xs leading-none text-primary uppercase font-bold mb-2",
                      },
                      className:
                        "text-xs leading-none text-primary uppercase font-bold mb-2",
                      children: [
                        {
                          type: "text",
                          content: "Personal Profile",
                        },
                      ],
                    },
                    {
                      type: "element",
                      tagName: "p",
                      attributes: {
                        class: "text-[11px] leading-4 text-[#6B7280]",
                      },
                      className: "text-[11px] leading-4 text-[#6B7280]",
                      children: [
                        {
                          type: "text",
                          content:
                            "A Python developer with 5.8 years of experience in Django, Flask for Retail eCommerce, POS and Storage domain.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "element",
              tagName: "div",
              attributes: {
                class: "template-workexperience-section mt-8",
              },
              className: "template-workexperience-section mt-8",
              children: [
                {
                  type: "element",
                  tagName: "div",
                  attributes: {
                    class: "px-5",
                  },
                  className: "px-5",
                  children: [
                    {
                      type: "element",
                      tagName: "h1",
                      attributes: {
                        class:
                          "text-xs leading-none text-primary uppercase font-bold mb-2",
                      },
                      className:
                        "text-xs leading-none text-primary uppercase font-bold mb-2",
                      children: [
                        {
                          type: "text",
                          content: "Work Experience",
                        },
                      ],
                    },
                    {
                      type: "block",
                      blockName: "workExperience",
                      tagName: "div",
                      attributes: {
                        class: "template-workexperience-section--one mt-4",
                      },
                      className: "template-workexperience-section--one mt-4",
                      children: [
                        {
                          type: "element",
                          dataCheck: "title",
                          tagName: "h1",
                          attributes: {
                            class:
                              "text-xs leading-none text-[#374151] uppercase font-bold mb-2",
                          },
                          className:
                            "text-xs leading-none text-[#374151] uppercase font-bold mb-2",
                          children: [
                            {
                              type: "text",
                              content: "{title}",
                            },
                          ],
                        },
                        {
                          type: "element",
                          dataCheck: ["OR", "role", "startDate", "endDate"],
                          tagName: "p",
                          attributes: {
                            class: "text-[11px] leading-4 text-[#6B7280] mt-2",
                          },
                          className:
                            "text-[11px] leading-4 text-[#6B7280] mt-2",
                          children: [
                            {
                              type: "text",
                              content: "{role} | {startDate} - {endDate}",
                            },
                          ],
                        },
                        {
                          type: "element",
                          dataCheck: "pointOne",
                          tagName: "div",
                          attributes: {
                            class: "flex flex-row items-baseline mt-2",
                          },
                          className: "flex flex-row items-baseline mt-2",
                          children: [
                            {
                              type: "element",
                              tagName: "span",
                              attributes: {
                                class: "p-0.5 mr-2 rounded-full bg-[#19010A]",
                              },
                              className: "p-0.5 mr-2 rounded-full bg-[#19010A]",
                              children: [],
                            },
                            {
                              type: "element",
                              tagName: "p",
                              attributes: {
                                class: "text-[11px] leading-4 text-[#6B7280]",
                              },
                              className: "text-[11px] leading-4 text-[#6B7280]",
                              children: [
                                {
                                  type: "text",
                                  content: "{pointOne}",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "element",
                          dataCheck: "pointTwo",
                          tagName: "div",
                          attributes: {
                            class: "flex flex-row items-baseline mt-2",
                          },
                          className: "flex flex-row items-baseline mt-2",
                          children: [
                            {
                              type: "element",
                              tagName: "span",
                              attributes: {
                                class: "p-0.5 mr-2 rounded-full bg-[#19010A]",
                              },
                              className: "p-0.5 mr-2 rounded-full bg-[#19010A]",
                              children: [],
                            },
                            {
                              type: "element",
                              tagName: "p",
                              attributes: {
                                class: "text-[11px] leading-4 text-[#6B7280]",
                              },
                              className: "text-[11px] leading-4 text-[#6B7280]",
                              children: [
                                {
                                  type: "text",
                                  content: "{pointTwo}",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export { template2, dataSchema, metaData };
