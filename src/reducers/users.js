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
  case 'SYNC_USERS': return state.map((user) => {
        if (user.id === action.users.id) {
    return {
        ...action.users
  };
  } else {
    return user;
  };
});
    default:
      return state;
  }
};
