import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback, Row, Container, CustomInput, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import {startEditUser} from '../actions/loginUser';
import PreviewPicture from './PreviewPicture';
import moment from 'moment';
import {states} from '../Helpers/State';


export class Profile extends React.Component {
    constructor(props) {
        super(props);

        const myProfile = (props.loginUser && props.loginUser.profile) ? props.loginUser.profile : {};
        const address = (props.loginUser && props.loginUser.address) ? props.loginUser.address : {};
        const myState = states.filter((state) => {return state.key === address.state});
        this.state = {
            name: props.loginUser ? props.loginUser.name : '',
            mobileNo: props.loginUser ? props.loginUser.mobileNo : '',
            userType: props.loginUser ? props.loginUser.userType : '',
            gender: props.loginUser ? props.loginUser.gender : '',

            subjects: myProfile.subjects,
            classes: myProfile.classes,
            experience: myProfile.experience,
            locality: myProfile.locality,
            isFeeNegotiable : myProfile.isFeeNegotiable,
            tuitionType: myProfile.tuitionType,
            contactType: myProfile.contactType,
            availableFordemo: myProfile.availableFordemo,
            urgentRequirement: myProfile.urgentRequirement,
            paymentInfo: myProfile.paymentInfo,
            otherInfo: myProfile.otherInfo,

            address1 : address.address1,
            address2 : address.address2,
            selectedDistrict : address.district,
            selectedState : address.state,
            zip : address.zip,

            calendarFocused: false,
            error: '',

            picture: '',
            pictureUrl: (props.loginUser && props.loginUser.profilePictureUrl) ? props.loginUser.profilePictureUrl : null,
            districts: myState!== null? myState[0].districts : [],

            visible: false
        };
    }

    validateAll = () =>{
    if(this.state.name != '' && this.state.userType != '' && this.state.gender != '' && this.state.mobileNo != '' &&
    this.state.subjects != '' && this.state.classes != '' && this.state.experience != '' ){
    //this.setState(() => ({ doSaveEnable: false }));
}
};

handleChange(e){
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const errorName = name+"Error";
    //this.setState(() => ({ [name]: value }));

    if( value === '' || value === null){
        this.setState({
            [errorName]:true,
            [name]:e.target.value
        })
    } else if(target.type !== 'checkbox'){
        this.setState({
            [errorName]:false,
            [name]:e.target.value
        })
    }

     if(target.type === 'checkbox' && value === true){
        this.setState({
            [errorName]:false,
            [name]:value
        })
    }else if(target.type === 'checkbox' && value === false){
         this.setState({
             [errorName]:true,
             [name]:value
         })
     }
};

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
        subjects : this.state.subjects? this.state.subjects :'',
        classes: this.state.classes? this.state.classes : '',
        experience: this.state.experience? this.state.experience : '',
        locality: this.state.locality? this.state.experience : '',
        isFeeNegotiable : this.state.isFeeNegotiable? this.state.isFeeNegotiable : '',
        tuitionType: this.state.tuitionType? this.state.tuitionType: 'both',
        contactType: this.state.contactType? this.state.contactType : 'both',
        availableFordemo: this.state.availableFordemo ? this.state.availableFordemo : '',
        updatedDate: new Date(),
        urgentRequirement: this.state.urgentRequirement? this.state.urgentRequirement: '',
        paymentInfo: this.state.paymentInfo? this.state.paymentInfo : '',
        otherInfo: this.state.otherInfo? this.state.otherInfo :''
    };

    const address = {
        address1 : this.state.address1?this.state.address1 :'',
        address2 : this.state.address2? this.state.address2 :'',
        district : this.state.selectedDistrict? this.state.selectedDistrict : '',
        state : this.state.selectedState? this.state.selectedState : '',
        zip : this.state.zip? this.state.zip:''
    }


    this.props.startEditUser(this.props.loginUser.id, {
        name: this.props.loginUser.name,
        email: this.props.loginUser.email,
        userType: this.state.userType,
        gender: this.state.gender,
        mobileNo: this.state.mobileNo,
        profilePicture: this.state.picture,
        profile: profile,
        address: address});

    this.setState({ visible: true, termsAndConditions: false });
}
onGenderChange = (e) => {
    const gender = e.target.value;
    this.setState(() => ({ gender }));
};
onUserTypeChange = (e) => {
    const userType = e.target.value;
    this.setState(() => ({ userType }));
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

onStateChange =(event)=>{
    const myState = states.filter((state) => {return state.key === event.target.value});
    this.setState({selectedState: myState[0].key,
        districts: myState[0].districts
    });


}
onDistrictChange =(event)=>{
    this.setState({selectedDistrict: event.target.value});
}

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

onDismiss = () => {
    this.setState({ visible: false });
}
render() {
    const updatedDate = this.props.loginUser.updatedDate;
    const doSaveDisable =  this.state.gender == '' || this.state.userType == '' || this.state.mobileNo == '' ||
                           this.state.subjects == '' || this.state.classes == '' || this.state.experience == '' ||
                           !this.state.termsAndConditions;

    return (
        <div className="login-profile">
        <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
            Congradulations. Your profile updated successfully!
        </Alert>
<Form>
    <Container>
    <Row form>
    <Col sm={2}>
        <PreviewPicture picture={this.state.picture} pictureUrl={this.state.pictureUrl}/>
<div>
    <Label for="profile_file_input" className="label-profile">Upload Profile Picture</Label>
    <Input id="profile_file_input"  type="file" className="form-control"onChange={(event) => {this.displayPicture(event);}} />
</div>
    </Col>
    <Col md={6}>
        <FormGroup>
        <Label>Last Updated </Label> {' :  '}
    <Label><p>{moment(updatedDate).format('Do MMMM  YYYY, h:mm:ss a')}</p></Label>
    </FormGroup>
    <FormGroup>
    <Label>Name</Label> {' :  '}
    <Label><p>{this.state.name}</p></Label>
    </FormGroup>
    <FormGroup>
    <Label>Gender</Label> {' :  '}

    <FormGroup check inline>
    <Label check > <Input type="radio" value="m" name={this.state.gender}  onChange={this.onGenderChange} checked={this.state.gender === "m"} disabled={this.props.loginUser.gender != null}/>{' '} <p>Male</p> </Label>
    </FormGroup>
    <FormGroup check inline className="fg-margin">
        <Label check> <Input type="radio" value="f" name={this.state.gender} onChange={this.onGenderChange} checked={this.state.gender === "f"} disabled={this.props.loginUser.gender != null} />{' '}<p>{ '  '} Female</p></Label>
    </FormGroup>
    </FormGroup>
    <FormGroup>
    <Label>User Type</Label> {' :  '}

    <FormGroup check inline>
    <Label check > <Input type="radio" value="s" name={this.state.userType}  onChange={this.onUserTypeChange} checked={this.state.userType === "s"} disabled={this.props.loginUser.userType != null}/>{' '} <p>Student</p> </Label>
    </FormGroup>
    <FormGroup check inline className="fg-margin">
        <Label check> <Input type="radio" value="t" name={this.state.userType} onChange={this.onUserTypeChange} checked={this.state.userType === "t"} disabled={this.props.loginUser.userType != null} />{' '}<p>{ '  '} Teacher</p></Label>
    </FormGroup>
    </FormGroup>
    <FormGroup>
    <Label>Email Id</Label> {' :  '}
    <Label><p>{this.props.loginUser.email}</p></Label>
    </FormGroup>
    <FormGroup>
    <Label for="mobileNo">Mobile No</Label>{' :  '}
    <Input value={this.state.mobileNo} name="mobileNo" className="mobile-no-field" onChange={(e)=>{this.handleChange(e)}} invalid={this.state.mobileNoError} />
</FormGroup>
    </Col>
    <Col sm={3}>
        </Col>
        </Row>
        <FormGroup>
        <Label >Prefered Subjects</Label>{' :  '}
    <Input type="textarea" onChange={(e)=>{this.handleChange(e)}} invalid={this.state.subjectsError} name="subjects" value={this.state.subjects}/>
</FormGroup >
    <FormGroup >
    <Label >Prefered Classes</Label>{' :  '}
    <Input type="textarea" onChange={(e)=>{this.handleChange(e)}} invalid={this.state.classesError} name="classes" value={this.state.classes}/>
</FormGroup>
    <FormGroup hidden={this.state.userType == '' | this.state.userType == 's'} >
<Label >Experience</Label>{' :  '}
    <Input type="textarea" onChange={(e)=>{this.handleChange(e)}} invalid={this.state.experienceError} value={this.state.experience} name="experience"/>
        </FormGroup>
        <FormGroup hidden={this.state.userType == '' | this.state.userType == 't'} >
<Label >School Or College Information</Label>{' :  '}
    <Input type="textarea" />
        </FormGroup>
        <FormGroup>
        <Label >Prefered Locality for Tuituon</Label>{' :  '}
                                      <Input type="textarea" onChange={this.onLocalityChange} value={this.state.locality}/>
</FormGroup>
    <FormGroup hidden={this.state.userType == '' | this.state.userType == 's'}>
<Label >Payment Info</Label>{' :  '}
    <Input type="textarea" onChange={this.onPaymentInfoChange} value={this.state.paymentInfo}/>
<FormFeedback>I will charge Rs 2000/- per subject.</FormFeedback>
    </FormGroup>
    <FormGroup check hidden={this.state.userType == '' | this.state.userType == 's'}>
<Input type="checkbox" name="check" id="isFeeNegotiable" onChange={this.onFeeNegotiableChange} checked={this.state.isFeeNegotiable}/>
<Label for="isFeeNegotiable" check><p>Course fee is negotiable</p></Label>
    </FormGroup>
    <FormGroup >
    <Label>Prefered class type </Label> {' :  '}
    <FormGroup check inline>
    <Label check> <Input type="radio" value="individual" checked={this.state.tuitionType === "individual"} onChange={this.onTuitionTypeChange}  />{' '} <p>Individual</p> </Label>
    </FormGroup>
    <FormGroup className="fg-margin" check inline>
    <Label check> <Input type="radio" value="group"checked={this.state.tuitionType === "group"} onChange={this.onTuitionTypeChange} />{' '} <p>Group</p></Label>
    </FormGroup>
    <FormGroup className="fg-margin" check inline>
    <Label check> <Input type="radio" value="both" checked={this.state.tuitionType === "both"} onChange={this.onTuitionTypeChange} />{' '} <p>Both</p></Label>
    </FormGroup>
    </FormGroup>

    <FormGroup>
    <Label>Contact Medium </Label> {' :  '}
    <FormGroup check inline>
    <Label check> <Input type="radio" value="mobile" checked={this.state.contactType === "mobile"} onChange={this.onContactTypeChange}  />{' '} <p>By Mobile</p> </Label>
    </FormGroup>
    <FormGroup className="fg-margin" check inline>
    <Label check> <Input type="radio" value="email" checked={this.state.contactType === "email"} onChange={this.onContactTypeChange}  />{' '} <p>By Email</p></Label>
    </FormGroup>
    <FormGroup className="fg-margin" check inline>
    <Label check> <Input type="radio" value="both" checked={this.state.contactType === "both"} onChange={this.onContactTypeChange}  />{' '} <p>By Mobile/Email</p></Label>
    </FormGroup>
    </FormGroup>
    <FormGroup check hidden={this.state.userType == '' | this.state.userType == 's'}>
<Input type="checkbox" name="availableFordemo" id="availableFordemo" checked={this.state.availableFordemo}  onChange={(e)=>{this.handleChange(e)}} />
<Label for="availableFordemo" check><p>I am avalable for demo upto 5 classes.</p></Label>
    </FormGroup>

    <FormGroup>
    <Label >Other Information</Label>{' :  '}
    <Input type="textarea" onChange={this.onOtherInfoChange} value={this.state.otherInfo}/>
</FormGroup>
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
        <Label for="stateSelect">State</Label>
        <Input type="select" name="stateSelect" id="stateSelect" value={this.state.selectedState} onChange={this.onStateChange}>
        {states.map((item, i) => <option value= {item.key} key={i} >{item.name}</option>)}
        </Input>

    </FormGroup>
    </Col>
    <Col md={4}>
        <FormGroup>
        <Label for="districtSelect">District</Label>
        <Input type="select" id="districtSelect" name="districtSelect" onChange={this.onDistrictChange} value={this.state.selectedDistrict}>

        {this.state.districts.map((district, i) => <option value={district} key={i}>{district}</option>)}
</Input>
    </FormGroup>
    </Col>
    <Col md={2}>
        <FormGroup>
        <Label for="exampleZip">Zip</Label>
        <Input type="text" name="zip" id="exampleZip" onChange={(e)=>{this.handleChange(e)}} invalid={this.state.zipError} value={this.state.zip} name="zip"/>
        </FormGroup>
        </Col>
        </Row>

        <FormGroup check hidden={this.state.userType == '' | this.state.userType == 't'}>
<Input type="checkbox" name="urgentRequirement" id="urgentRequirement" checked={this.state.urgentRequirement} onChange={this.onUrgentRequirementChange}/>
<Label for="urgentRequirement" check><p>I need a teacher urgently for all of my subjects.</p></Label>
    </FormGroup>
    <FormGroup check>
    <Input type="checkbox" name="termsAndConditions" id="termsAndConditions" onChange={(e)=>{this.handleChange(e)}} invalid={this.state.termsAndConditionsError}/>
        <Label for="termsAndConditions" check><p>All above informations correct and I am having all related documents for further verification.</p></Label>
    </FormGroup>
    <FormGroup className="profile-button-group" check row>
    <Col sm={{ size: 10, offset: 4 }}>
<Button color="primary" size="sm" onClick={() => this.onSave()} disabled={doSaveDisable} >Save</Button>{' '}
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
