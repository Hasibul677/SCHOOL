import {
  ADMISSION_STUDENT_GUARDIAN,
  ADMISSION_STUDENT_INFO,
  ADMISSION_STUDENT_PRE_SCHOOL,
} from "../Constants/admissionConstant";

export const studentInfoReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ADMISSION_STUDENT_INFO:
      return { ...state, studnetInfo: payload };
    default:
      return state;
  }
};
export const guardianInfoReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ADMISSION_STUDENT_GUARDIAN:
      return { ...state, guardianInfo: payload };
    default:
      return state;
  }
};
export const preSchoolInfoReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ADMISSION_STUDENT_PRE_SCHOOL:
      return { ...state, preSchoolInfo: payload };
    default:
      return state;
  }
};
