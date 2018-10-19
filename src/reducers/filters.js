// Filters Reducer

const filtersReducerDefaultState = {
  all: true,
  byStudent: false,
  byTeacher: false

};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_FILTER_ALL':
      return {
          ...state,
          all: true,
          byStudent: false,
          byTeacher: false
      };
    case 'SET_FILTER_BY_STUDENT':
      return {
          ...state,
          byStudent: action.byStudent,
          all: (!action.byStudent && !state.byTeacher)
      };

    case 'SET_FILTER_BY_TEACHER':
      return {
          ...state,
          byTeacher: action.byTeacher,
          all: (!action.byTeacher && !state.byStudent)
    };
    case 'SET_TEXT_FILTER':
      return {
          ...state,
        text: action.text
      };
    default:
      return state;
  }
};
