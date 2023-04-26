// import React from "react";
// import { sections } from "./data";

// const Course = () => {
//   return (
//     <div>
//       <div className="flex justify-between flex-col m-10 border black ">
//         {sections.map((section) => {
//           return (
//             <div key={section.id}>
//               <div className="text-left">{section.name}</div>
//               <div> <h3 className="text-right">{section.lectures} lectures</h3>
//                 <h3 className="ml-2"> • {section.totalMins}min</h3></div>



//               {
//                 section.lessons.map((lesson) => {
//                   const mins = Math.floor(lesson.length / 60);
//                   const secs = lesson.length % 60;

//                   return (
//                     <div key={lesson.id} className="flex justify-between">
//                       <a href={""} className="text-left text-blue-500 underline">
//                         {lesson.name}
//                       </a>

//                       <div className="flex-grow"></div>

//                       <div className="text-right w-32">
//                         <a href={""} className="text-blue-500 underline">
//                           {lesson.type}
//                         </a>
//                         <span className="ml-2">
//                           {mins.toLocaleString("en-US", {
//                             minimumIntegerDigits: 2,
//                             useGrouping: false,
//                           })}
//                           :
//                           {secs.toLocaleString("en-US", {
//                             minimumIntegerDigits: 2,
//                             useGrouping: false,
//                           })}



//                         </span>
//                       </div>
//                     </div>
//                   );
//                 })
//               }
//             </div>
//           );
//         })}
//       </div>
//     </div >
//   );
// };

// export default Course;



import React from "react";
import { sections } from "./data";

const Course = () => {
  return (
    <div>
      {sections.map((section) => (
        <div key={section.id} className="flex justify-between p-4">
          <div className="text-left">{section.name}</div>
          <div className="text-right">
            {section.lectures}
            <span className="ml-2"> • {section.totalMins}min</span>
          </div>
          <div>
            {section.lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="flex justify-between border border-black">
                <div className="text-left">{lesson.name}</div>
                <div className="text-right">{lesson.type}</div>
                <div className="text-right">{lesson.length}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Course;
