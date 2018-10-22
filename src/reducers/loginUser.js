// Login User Reducer

const userReducerDefaultState = [];

export default (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_USERS':
      return [
          ...state,
          action.user
    ];
    case 'REMOVE_USER':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_USER':
      return{
          ...state.loginUser, ...action.updates
      };
    case 'FIND_USER':
      return action.user;
    default:
      return state;
  }
};
