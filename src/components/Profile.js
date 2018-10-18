import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback, Row, Container } from 'reactstrap';
import { connect } from 'react-redux';
import {startEditUser} from '../actions/loginUser';
import PreviewPicture from './PreviewPicture';
import moment from 'moment';


export class Profile extends React.Component {
  constructor(props) {
    super(props);

      const myProfile = (props.loginUser && props.loginUser.profile) ? props.loginUser.profile : {};
      const address = (props.loginUser && props.loginUser.address) ? props.loginUser.address : {};
    this.state = {
      name: props.loginUser ? props.loginUser.name : '',
      mobileNo: props.loginUser ? props.loginUser.mobileNo : '',
      userType: props.loginUser ? props.loginUser.userType : '',


      subjects: myProfile.subjects,
      classes: myProfile.classes,
      experience: myProfile.experience,
      locality: myProfile.locality,
      isFeeNegotiable : myProfile.isFeeNegotiable,
      tuitionType: myProfile.tuitionType,
      contactType: myProfile.contactType,
      availableFordemo: myProfile.availableFordemo,
        updatedDate: myProfile.updatedDate,
        urgentRequirement: myProfile.urgentRequirement,
        paymentInfo: myProfile.paymentInfo,
        otherInfo: myProfile.otherInfo,

        address1 : address.address1,
        address2 : address.address2,
        district : address.district,
        state : address.state,
        zip : address.zip,

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

    const profile = {
        subjects : this.state.subjects,
        classes: this.state.classes,
        experience: this.state.experience,
        locality: this.state.locality,
        isFeeNegotiable : this.state.isFeeNegotiable,
        tuitionType: this.state.tuitionType,
        contactType: this.state.contactType,
        availableFordemo: this.state.availableFordemo,
        updatedDate: new Date(),
        urgentRequirement: this.state.urgentRequirement,
        paymentInfo: this.state.paymentInfo,
        otherInfo: this.state.otherInfo
    };

    const address = {
        address1 : this.state.address1,
        address2 : this.state.address2,
        district : this.state.district,
        state : this.state.state,
        zip : this.state.zip
    }


  this.props.startEditUser(this.props.loginUser.id, {
    name: this.props.loginUser.name,
    email: this.props.loginUser.email,
    userType: this.state.userType,
    mobileNo: this.state.mobileNo,
    profilePicture: this.state.picture,
    profile: profile,
    address: address});
}

onUserTypeChange = (e) => {
  const userType = e.target.value;
  this.setState(() => ({ userType }));
};
onMobileNoChange = (e) => {
  const mobileNo = e.target.value;
  this.setState(() => ({ mobileNo }));
};

onSubjectsChange = (e) =>{
    const subjects = e.target.value;
    this.setState(() => ({ subjects }));
};

onClassesChange = (e) =>{
    const classes = e.target.value;
    this.setState(() => ({ classes }));
};

onExperienceChange = (e) =>{
    const experience = e.target.value;
    this.setState(() => ({ experience }));
};

onLocalityChange = (e) =>{
    const locality = e.target.value;
    this.setState(() => ({ locality }));
};

onFeeNegotiableChange = (e) =>{
    const isFeeNegotiable = e.target.checked;
    this.setState(() => ({ isFeeNegotiable }));
};


onTuitionTypeChange = (e) =>{
    const tuitionType = e.target.value;
    this.setState(() => ({ tuitionType }));
};

onContactTypeChange = (e) =>{
    const contactType = e.target.value;
    this.setState(() => ({ contactType }));
};

onAvailableFordemoChange = (e) =>{
    const availableFordemo = e.target.checked;
    console.log('ddddd :'+availableFordemo);
    this.setState(() => ({ availableFordemo }));
};

onUrgentRequirementChange = (e) =>{
    const urgentRequirement = e.target.checked;
    console.log('ddddd :'+urgentRequirement);
    this.setState(() => ({ urgentRequirement }));
};

onAddress1Change = (e) =>{
    const address1 = e.target.value;
    this.setState(() => ({ address1 }));
};

onAddress2Change = (e) =>{
    const address2 = e.target.value;
    this.setState(() => ({ address2 }));
};

onStateChange = (e) =>{
    const state = e.target.value;
    this.setState(() => ({ state }));
};

onDistrictChange = (e) =>{
    const district = e.target.value;
    this.setState(() => ({ district }));
};

onZipChange = (e) =>{
    const zip = e.target.value;
    this.setState(() => ({ zip }));
};

onPaymentInfoChange = (e) =>{
    const paymentInfo = e.target.value;
    this.setState(() => ({ paymentInfo }));
};

onOtherInfoChange = (e) =>{
    const otherInfo = e.target.value;
    this.setState(() => ({ otherInfo }));
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
};

render() {
  return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
    <Form>
        <Container>
            <Row form>
            <Col sm={2}>
                    <PreviewPicture picture={this.state.picture} pictureUrl={this.state.pictureUrl}/>
                    <div>
                        <Label for="profile_file_input" className="label-profile">Profile Picture</Label>
                        <Input id="profile_file_input"  type="file" className="form-control"onChange={(event) => {this.displayPicture(event);}} />
                    </div>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <Label>Last Updated </Label> {' :  '}
                    <Label>{moment(this.state.updatedDate).format('Do MMMM  YYYY, h:mm:ss a')}</Label>
                </FormGroup>
                <FormGroup>
                    <Label>Name</Label> {' :  '}
                    <Label>{this.state.name}</Label>
                </FormGroup>
                <FormGroup>
                    <Label>User Type</Label> {' :  '}
                    <FormGroup check inline>
                    <Label check> <Input type="radio" value="s" name={this.state.userType}  onChange={this.onUserTypeChange} checked={this.state.userType === "s"}/>{' '} Student </Label>
                    </FormGroup>
                    <FormGroup check inline>
                    <Label check> <Input type="radio" value="t" name={this.state.userType} onChange={this.onUserTypeChange} checked={this.state.userType === "t"} />{' '} Teacher</Label>
                    </FormGroup>
                </FormGroup>
                <FormGroup>
                    <Label>Email Id</Label> {' :  '}
                    <Label>{this.props.loginUser.email}</Label>
                </FormGroup>
                <FormGroup>
                    <Label for="mobileNo">Mobile No</Label>{' :  '}
                    <Input value={this.state.mobileNo} className="mobile-no-field" onChange={this.onMobileNoChange} />
                </FormGroup>
            </Col>
            <Col sm={3}>
            </Col>
            </Row>
            <Row form>
                <Col md={12}>
                    <FormGroup>
                        <Label >Prefered Subjects</Label>{' :  '}
                        <Input type="textarea" onChange={this.onSubjectsChange} value={this.state.subjects}/>
                    </FormGroup>
                    <FormGroup>
                        <Label >Prefered Classes</Label>{' :  '}
                        <Input type="textarea" onChange={this.onClassesChange} value={this.state.classes}/>
                    </FormGroup>
                    <FormGroup>
                        <Label >Experience</Label>{' :  '}
                        <Input type="textarea" onChange={this.onExperienceChange} value={this.state.experience}/>
                    </FormGroup>
                    <FormGroup>
                        <Label >Prefered Area</Label>{' :  '}
                        <Input type="textarea" onChange={this.onLocalityChange} value={this.state.locality}/>
                    </FormGroup>
                    <FormGroup>
                        <Label >Payment Info</Label>{' :  '}
                        <Input type="textarea" onChange={this.onPaymentInfoChange} value={this.state.paymentInfo}/>
                        <FormFeedback>I will charge Rs 2000/- per subject.</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" name="check" id="isFeeNegotiable" onChange={this.onFeeNegotiableChange} checked={this.state.isFeeNegotiable}/>
                        <Label for="isFeeNegotiable" check>Course fee is negotiable</Label>
                    </FormGroup>
                        <Label >Others</Label>{' :  '}
                        <Input type="textarea" onChange={this.onOtherInfoChange} value={this.state.otherInfo}/>
                    </FormGroup>
                    <FormGroup >
                        <Label>Prefered class type </Label> {' :  '}
                        <FormGroup check inline>
                        <Label check> <Input type="radio" value="individual" checked={this.state.tuitionType === "individual"} onChange={this.onTuitionTypeChange}  />{' '} Individual </Label>
                        </FormGroup>
                        <FormGroup check inline>
                        <Label check> <Input type="radio" value="group"checked={this.state.tuitionType === "group"} onChange={this.onTuitionTypeChange} />{' '} Group</Label>
                        </FormGroup>
                        <FormGroup check inline>
                        <Label check> <Input type="radio" value="both" checked={this.state.tuitionType === "both"} onChange={this.onTuitionTypeChange} />{' '} Both</Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup>
                        <Label>Contact Medium </Label> {' :  '}
                        <FormGroup check inline>
                        <Label check> <Input type="radio" value="mobile" checked={this.state.contactType === "both"} onChange={this.onContactTypeChange} />{' '} By Mobile </Label>
                        </FormGroup>
                        <FormGroup check inline>
                        <Label check> <Input type="radio" value="email" checked={this.state.contactType === "email"} onChange={this.onContactTypeChange}  />{' '} By Email</Label>
                        </FormGroup>
                        <FormGroup check inline>
                        <Label check> <Input type="radio" value="both" checked={this.state.contactType === "both"} onChange={this.onContactTypeChange}  />{' '} Both</Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup check>
                    <Input type="checkbox" name="availableFordemo" id="availableFordemo" checked={this.state.availableFordemo} onChange={this.onAvailableFordemoChange}/>
                        <Label for="availableFordemo" check>I am avalable for demo upto 5 classes.</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" name="urgentRequirement" id="urgentRequirement" checked={this.state.urgentRequirement} onChange={this.onUrgentRequirementChange}/>
                        <Label for="urgentRequirement" check>Is it urgent requirement?</Label>
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Label for="exampleAddress">Address</Label>
                <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St" value={this.state.address1}  onChange={this.onAddress1Change}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleAddress2">Address 2</Label>
                <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor" value={this.state.address2}  onChange={this.onAddress2Change}/>
            </FormGroup>
            <Row form>
                <Col md={6}>
                <FormGroup>
                <Label for="exampleCity">District</Label>
                <Input type="text" name="city" id="exampleCity" value={this.state.district}  onChange={this.onDistrictChange}/>
                </FormGroup>
                </Col>
                <Col md={4}>
                <FormGroup>
                <Label for="exampleState">State</Label>
                <Input type="text" name="state" id="exampleState" value={this.state.state}  onChange={this.onStateChange}/>
                </FormGroup>
                </Col>
                <Col md={2}>
                <FormGroup>
                <Label for="exampleZip">Zip</Label>
                <Input type="text" name="zip" id="exampleZip" value={this.state.zip}  onChange={this.onZipChange}/>
                </FormGroup>
                </Col>
            </Row>
            <FormGroup check row>
                <Col sm={{ size: 10, offset: 4 }}>
                    <Button color="primary" size="sm" onClick={() => this.onSave()} >Save</Button>{' '}
                    <Button color="secondary" size="sm">Edit</Button>
                </Col>
            </FormGroup>
        </Container>

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
