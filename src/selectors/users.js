// Get visible users

export default (users, { all, byStudent, byTeacher, byState, byDistrict }) => {

  return users.filter((user) => {
        const stateMatch = ((user.address && byState != '') ? (user.address.state === byState):false);
        const districtMatch = ((user.address && byDistrict != '') ? (user.address.district === byDistrict):false);

  return all | (user.userType == 's' && byStudent) | (user.userType == 't' && byTeacher) & stateMatch & districtMatch;

  }).sort((a, b) => a.name.localeCompare(b.name));
};
