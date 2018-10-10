import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback, Row } from 'reactstrap';
import { connect } from 'react-redux';
import {startEditUser} from '../actions/loginUser';
import PreviewPicture from './PreviewPicture';

export class ViewLoginProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.loginUser ? props.loginUser.name : '',
      mobileNo: props.loginUser ? props.loginUser.mobileNo : '',
      userType: props.loginUser ? props.loginUser.userType : '',

      calendarFocused: false,
      error: '',

      picture: '',
      pictureUrl: (props.loginUser && props.loginUser.profilePictureUrl) ? props.loginUser.profilePictureUrl : null
    };
  }
  onNameChange = (e) => {
  const name = e.target.value;
  this.setState(() => ({ name }));
};
onMobileNoChange = (e) => {
  const mobileNo = e.target.value;
  this.setState(() => ({ mobileNo }));
};

onSave = () =>{
  console.log('save called '+ this.state.userType);

  this.props.startEditUser(this.props.loginUser.id, {
    name: this.props.loginUser.name,
    email: this.props.loginUser.email,
    userType: this.state.userType,
    mobileNo: this.state.mobileNo,
    profilePicture: this.state.picture});
}

onUserTypeChange = (e) => {
  const userType = e.target.value;
  this.setState(() => ({ userType }));
};
onMobileNoChange = (e) => {
  const mobileNo = e.target.value;
  this.setState(() => ({ mobileNo }));
};

displayPicture(event) {
  let reader = new FileReader();
  let file = event.target.files[0];
  reader.onloadend = () => {
    console.log(file);
    this.setState({
      picture: file,
      pictureUrl: reader.result
    });
  };
  reader.readAsDataURL(file);
}

render() {
  return (
      <Form>
      <Row form>
        <Col sm={2}>
            <PreviewPicture picture={this.state.picture} pictureUrl={this.state.pictureUrl}/>
            <div><Label >Nilakantha Mohanty</Label></div>
        </Col>
        <Col sm={6}>
            <FormGroup>
                <Label >Type</Label>
                <Label >Student</Label>
            </FormGroup>
            <FormGroup>
                <Label >Email</Label>
                <Label >nilkantha18@gmail.com</Label>
            </FormGroup>
            <FormGroup>
                <Label >Mobile No</Label> {' : '}
                <Label >9916164166</Label>
            </FormGroup>
        </Col>
    <Col sm={4}>
        <Button>Edit</Button>
    </Col>
        </Row>
    </Form>
)
}
}

const mapDispatchToProps = (dispatch) => ({
  startAddUser: (user) => dispatch(startAddUser(user)),
    startEditUser: (id,user) => dispatch(startEditUser(id,user))
});
const mapStateToProps = (state) => {
  return {
    loginUser: state.loginUser
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewLoginProfile);
