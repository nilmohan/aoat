import uuid from 'uuid';
import database from '../firebase/firebase';


// REMOVE_USER
const removeUser = ({ id } = {}) => ({
  type: 'REMOVE_USER',
  id
});
export const startRemoveUser = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${id}`).remove().then(() => {
          dispatch(removeUser({ id }));
  });
  };
};


// SET_USERS
export const setUsers = (users) => ({
  type: 'SET_USERS',
  users
});

export const startSetUsers = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref('users').once('value').then((snapshot) => {
          const userList = [];

    snapshot.forEach((childSnapshot) => {
      userList.push({
      id: childSnapshot.key,
        ...childSnapshot.val()
  });
  });

    dispatch(setUsers(userList));
  });

  };
};

// UPDATE_RATING_FOR_USER
const editUser = (id, updates) => ({
  type: 'UPDATE_RATING_FOR_USER',
  id,
  updates
});
export const startUpdateForUser = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${id}`).update(updates).then(() => {
          dispatch(editUser(id, updates));
  });
  };
};

// SYNC_USERS
export const syncUsers = (users) => ({
  type: 'SYNC_USERS',
  users
});

export const listenToConfigChanges = () => {
  return (dispatch, getState) => {
    database.ref('users').on('child_changed', (snapshot) => {
      console.log(snapshot.key, snapshot.val());
      dispatch( syncUsers(snapshot.val()));

    }, (e) =>{
      console.log("Error with data fetching", e);
    });
  };
}

