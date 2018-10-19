// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

export const setFilterByStudent = (byStudent = false) => ({
  type: 'SET_FILTER_BY_STUDENT',
  byStudent
});

export const setFilterByTeacher = (byTeacher = false) => ({
  type: 'SET_FILTER_BY_TEACHER',
  byTeacher
});

export const setFilterAll = (all = false) => ({
  type: 'SET_FILTER_ALL',
  all
});

