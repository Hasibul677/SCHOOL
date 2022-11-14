import { ADMISSION_STUDENT_INFO } from "../Constants/admissionConstant";

export const studentInfoForm = (info) => {
    return {
      type: ADMISSION_STUDENT_INFO,
      payload: info,
    };
  };