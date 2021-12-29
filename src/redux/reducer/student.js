import {
  SAVE_SET_LIST_STUDENT,
  SAVE_CREATE_STUDENT,
  SAVE_UPDATE_STUDENT,
  SAVE_DELETE_STUDENT,
  SET_MODAL_STUDENT_VISIBLE,
  SAVE_SET_SELECTED_STUDENT,
  SAVE_ADD_CV,
  ACT_SELECTED_ADD,
  ADD_STUDENT_CV_MODAL,
  CHOOSE_DATE_CV,
  DATE_CREATE_CV,
} from "../type";

const initialState = {
  listStudent: [],
  selectedStudent: null,
  isModalVisible: false,
  isModalAddCv: false,
  listCv: [],
  dateDeadline: [],
  dateCreateCv: [],
};

const studentReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_SET_LIST_STUDENT:
      return {
        ...state,
        listStudent: payload,
      };

    case SET_MODAL_STUDENT_VISIBLE:
      return {
        ...state,
        isModalVisible: payload,
      };

    case SAVE_SET_SELECTED_STUDENT:
      return {
        ...state,
        selectedStudent: payload,
      };

    case SAVE_CREATE_STUDENT:
      return {
        ...state,
        listStudent: [...state.listStudent, payload],
      };

    case SAVE_UPDATE_STUDENT: {
      const { indexOfStudent, studentInfo } = payload;
      const tempListStudent = [...state.listStudent];
      tempListStudent.splice(indexOfStudent, 1, studentInfo);

      return {
        ...state,
        listStudent: tempListStudent,
      };
    }

    case SAVE_DELETE_STUDENT: {
      const tempListStudent = [...state.listStudent];
      tempListStudent.splice(payload, 1);

      return {
        ...state,
        listStudent: tempListStudent,
      };
    }

    case ADD_STUDENT_CV_MODAL: {
      return {
        ...state,
        isModalAddCv: payload,
      };
    }

    case SAVE_ADD_CV: {
      return {
        ...state,
        listCv: [...state.listCv, payload],
      };
    }

    case CHOOSE_DATE_CV: {
      return {
        ...state,
        dateDeadline: payload,
      };
    }

    case ACT_SELECTED_ADD: {
      return {
        ...state,
        selectedStudent: payload,
      };
    }

    case DATE_CREATE_CV: {
      return {
        ...state,
        dateCreateCv: payload,
      };
    }

    default:
      return state;
  }
};

export default studentReducer;
