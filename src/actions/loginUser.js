
import database  from '../firebase/firebase';
import { storage }  from '../firebase/firebase';


// ADD_USER
export const addUser = (user) => ({
    type: 'ADD_USER',
    user
});
export const startAddUser = (userData = {}) => {
    return (dispatch) => {
        const {
            name = '',
            mobileNo = '',
            email = '',
            isUserVerified = false
            } = userData;
        const user = { name, mobileNo, email, isUserVerified };

        database.ref('users').push(user).then((ref) => {
            dispatch(addUser({
            id: ref.key,
            ...user
    }));
    });
    };
};

// EDIT_USER
const editUser = (id, updates) => ({
    type: 'EDIT_USER',
    id,
    updates
});
export const startEditUser = (id, updates) => {
    return (dispatch, getState) => {
        if(updates.profilePicture != ''){
                return storage.child(`profile/${id}`).put(updates.profilePicture).then((snapshot) => {
                        let updateUser = {...updates, profilePictureUrl: snapshot.metadata.downloadURLs[0], profilePicture:''};
                return database.ref(`users/${id}`).update(updateUser).then(() => {
                        dispatch(editUser(id, updateUser));
                });
            });
        }else{
            return database.ref(`users/${id}`).update(updates).then(() => {
                    dispatch(editUser(id, updates));
            });
        }

    };
};


export const startEditUser1 = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${id}`).update(updates).then(() => {
                dispatch(editUser(id, updates));
    });
    };
};
export function createAccount(data, picture) {
    const { fname, lname, email, password, image } = data;
    return dispatch => auth.createUserWithEmailAndPassword(email, password).then((user) => {
        if (user !== null) {
        storage.child(`profile/${picture.name}/${new Date().getTime()}`).put(image[0]).then((snapshot) => {
            database.ref('users').child(user.uid).set({
            fname,
            lname,
            picture: snapshot.metadata.downloadURLs[0]
        });
    });
    }
});
}


// FIND_USER
const findUser = (user) => ({
  type: 'FIND_USER',
  user
});
export const startFindUser = (email) => {
  return (dispatch, getState) => {
    return database.ref('users').orderByChild('email').equalTo(email).once('value', snapshot => {
          const LoginUsers = [];
          if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
              LoginUsers.push({
              id: childSnapshot.key,
                ...childSnapshot.val()
          });
          });
          } else {
            console.log('There is no user who has email like '+ email)
          }



           var user =  LoginUsers.length >0? LoginUsers[0]:null;
        dispatch(findUser(user));
    });
  };
};



