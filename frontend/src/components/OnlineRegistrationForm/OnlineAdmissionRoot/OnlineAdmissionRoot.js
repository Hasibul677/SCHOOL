import React from "react";
import StudentSection from "../StudentSection/StudentSection";
import StudentPreEdu from "../StudentPreEdu/StudentPreEdu";
import ParentsSection from "../ParentsSection/ParentsSection";
import { useDispatch, useSelector } from "react-redux";

const OnlineAdmissionRoot = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("hello");
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <StudentSection />
        <ParentsSection />
        <StudentPreEdu />
        <button className="my-10 border" type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default OnlineAdmissionRoot;
