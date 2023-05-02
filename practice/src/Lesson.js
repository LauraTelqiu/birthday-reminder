import React from 'react'
import { MdOndemandVideo } from "react-icons/md";

const Lesson = ({ lesson }) => {
  return (
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
  )
}

export default Lesson;

