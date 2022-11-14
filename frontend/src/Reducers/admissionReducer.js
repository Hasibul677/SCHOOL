import { ADMISSION_STUDENT_INFO } from "../Constants/admissionConstant";





  export const studentInfoReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ADMISSION_STUDENT_INFO:
            return { ...state, basicInfo: payload };
        default:
            return state;
    }
}