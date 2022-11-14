import React from 'react';
import StudentSection from '../StudentSection/StudentSection';
import StudentPreEdu from '../StudentPreEdu/StudentPreEdu';
import ParentsSection from '../ParentsSection/ParentsSection';
import {useDispatch, useSelector} from "react-redux"

const OnlineAdmissionRoot = () => {

    return (
        <div>
            <form action="">
                <StudentSection />
                <ParentsSection />
                <StudentPreEdu />
            </form>
        </div>
    );
};

export default OnlineAdmissionRoot;