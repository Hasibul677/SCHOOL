import React from 'react';
import StudentSection from '../StudentSection/StudentSection';
import StudentPreEdu from '../StudentPreEdu/StudentPreEdu';
import ParentsSection from '../ParentsSection/ParentsSection';

const OnlineAdmissionRoot = () => {

    return (
        <div>
            <form action="">
                <StudentSection />
                <StudentPreEdu />
                <ParentsSection />
            </form>
        </div>
    );
};

export default OnlineAdmissionRoot;