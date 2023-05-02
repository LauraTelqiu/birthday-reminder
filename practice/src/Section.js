import React from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const Section = ({ toggleExpansion, isExpanded, section }) => {
  return (
    <div className="flex justify-between p-4 border border-black bg-slate-100" onClick={toggleExpansion}>
      <div className="flex items-center">
        {isExpanded ? <BiChevronUp /> : <BiChevronDown />}
        <div className="text-left ml-2">{section.name}</div>
      </div>
      <div className="text-right">
        {section.lectures} lectures
        <span className="ml-2"> • {section.totalMins}min</span>
      </div>
    </div>
  );
};

export default Section;

