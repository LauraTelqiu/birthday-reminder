import React, { useState } from "react";
import Section from "./Section";
import Lesson from "./Lesson";
import { sections } from "./data";


const Course = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  return (


    <div className="mx-auto w-1/2 text-sm">
      <div className="flex justify-between flex-col m-10 mx-auto">
        <div>
          {sections.map((section) => (
            <div key={section.id}>
              <Section
                toggleExpansion={toggleExpansion}
                isExpanded={isExpanded}
                section={section}
              />
              {isExpanded && (
                <div className="flex flex-col justify-start border border-black ">
                  {section.lessons.map((lesson) => (
                    <div key={lesson.id}>
                      <Lesson lesson={lesson} />

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
