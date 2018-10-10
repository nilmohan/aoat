// Users Reducer

const usersReducerDefaultState = [];

export default (state = usersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return action.users;
    case 'UPDATE_RATING_FOR_USER':
      return state.map((user) => {
            if (user.id === action.id) {
      return {
          ...user,
    ...action.updates
    };
    } else {
      return user;
    };
  });
    default:
      return state;
  }
};
