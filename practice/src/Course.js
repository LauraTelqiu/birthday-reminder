import { Section } from './Section';
import React, { useState } from "react";

import { sections } from "./data";
import { MdOndemandVideo } from "react-icons/md";

const Course = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="mx-auto w-1/2">
      <div className="flex justify-between flex-col m-10 mx-auto">
        <div>
          {sections.map((section) => (
            <div key={section.id}>
              <Section toggleExpansion={toggleExpansion} isExpanded={isExpanded} section={section} />
              {isExpanded && (
                <div className="flex flex-col justify-start border border-black ">
                  {section.lessons.map((lesson) => (
                    <div key={lesson.id}>
                      <div className="flex justify-between p-4  ">
                        <div className="text-left ">
                          <div className="flex items-center">
                            <MdOndemandVideo className="mr-2" />
                            <a href="#" className="underline text-blue-500">
                              {lesson.name}
                            </a>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center">
                            <a href="" className="underline text-blue-500 mr-6">
                              {lesson.type}
                            </a>
                            <h3>
                              {Math.floor(lesson.length / 60)}:
                              {(lesson.length % 60).toString().padStart(2, "0")}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
