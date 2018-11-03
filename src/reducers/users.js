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
  case 'SYNC_USERS':
  const findUser = _.find(state, (o) => { return o.id === action.users.id; });

  if (findUser == undefined) {
    return [{...action.users}, ...state];
  }else{
    return _.without(state.map((user) => {
          if (user.id === action.users.id && action.users.isUserVerified ) {
            return {...action.user};
          } else if(user.id !== action.users.id) {
            return user;
          };
  }), undefined);
  }

    default:
      return state;
  }
};
