import {
  ADMISSION_STUDENT_GUARDIAN,
  ADMISSION_STUDENT_INFO,
  ADMISSION_STUDENT_PRE_SCHOOL,
} from "../Constants/admissionConstant";

export const studentInfoForm = (info) => {
  return {
    type: ADMISSION_STUDENT_INFO,
    payload: info,
  };
};
export const guardianInfoForm = (info) => {
  return {
    type: ADMISSION_STUDENT_GUARDIAN,
    payload: info,
  };
};
export const preSchoolInfoForm = (info) => {
  return {
    type: ADMISSION_STUDENT_PRE_SCHOOL,
    payload: info,
  };
};
