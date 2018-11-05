// Get visible users

export default (users, { all, byStudent, byTeacher, byState, byDistrict }) => {

  return users.filter((user) => {

    const stateMatch = ((user.address && byState != '') ? (user.address.state === byState):false);
    const districtMatch = ((user.address && byDistrict != '') ? (user.address.district === byDistrict):false);

    if(districtMatch || (stateMatch && byDistrict == '')){
        if(all || (user.userType == 's' && byStudent) || (user.userType == 't' && byTeacher)){
            return true;
        }else{
            return false;
        }
    }else if((byDistrict === '' && byState === '' && (all || (user.userType == 's' && byStudent) || (user.userType == 't' && byTeacher)))){
        return true;
    }else{
        return false;
    }
  }).sort((a, b) => a.name.localeCompare(b.name));
};
