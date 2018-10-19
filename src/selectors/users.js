// Get visible users

export default (users, { all, byStudent, byTeacher }) => {

  return users.filter((user) => {
    return all | (user.userType == 's' && byStudent) | (user.userType == 't' && byTeacher) ;
  }).sort((a, b) => a.name.localeCompare(b.name));
};
