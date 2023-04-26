import React from "react";
import { sections } from "./data";

const Course = () => {
  return (
    <div>
      <div className="flex justify-between flex-col m-10 border black ">
        <div >
          {sections.map((section) => {
            return (
              <div className="flex justify-between p-10">
                <div className="text-left">{section.name}</div>
                <div className="text-right">
                  <h2>
                    {section.lectures} lectures • {section.totalMins} min
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Course;
