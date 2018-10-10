import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback, Row } from 'reactstrap';
import { connect } from 'react-redux';
import {startEditUser} from '../actions/loginUser';
import PreviewPicture from './PreviewPicture';

export class Profile extends React.Component {
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
      <div>
      {this.state.error && <p>{this.state.error}</p>}
    <Form>


  <Row form>
  <Col md={2}>
      <FormGroup>
      <PreviewPicture picture={this.state.picture} pictureUrl={this.state.pictureUrl}/>
<Input  type="file" className="form-control"onChange={(event) => {this.displayPicture(event);}} />
      </FormGroup>
      </Col>
      <Col md={10}>
      <FormGroup>
        <Label>{this.state.name}</Label>
  <FormGroup check inline>
  <Label check> <Input type="radio" value="s" name={this.state.userType}  onChange={this.onUserTypeChange} checked={this.state.userType === "s"}/>{' '} Student </Label>
  </FormGroup>
  <FormGroup check inline>
  <Label check> <Input type="radio" value="t" name={this.state.userType} onChange={this.onUserTypeChange} checked={this.state.userType === "t"} />{' '} Teacher</Label>
  </FormGroup>
      </FormGroup>
      </Col>
      </Row>





      <FormGroup>
        <Label for="emailId">Email Id</Label>
        <Input value={this.props.loginUser.email} disabled/>
        <FormFeedback>Oh noes! that name is already taken</FormFeedback>
        <FormText>Example help text that remains unchanged.</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="mobileNo">Mobile No</Label>
        <Input value={this.state.mobileNo} onChange={this.onMobileNoChange} />
        <FormFeedback>Oh noes! that name is already taken</FormFeedback>
        <FormText>Example help text that remains unchanged.</FormText>
      </FormGroup>




  <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button color="primary" size="sm" onClick={() => this.onSave()} >Save</Button>{' '}
          <Button color="secondary" size="sm">Edit</Button>
        </Col>
      </FormGroup>


  </Form>
  </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
