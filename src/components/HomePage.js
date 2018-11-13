import React from 'react';
import UserList from './UserList';
import CardItem from './CardItem';
import CardList from './CardList';
import { Container, Row, Col, FormGroup, Label, Input, CustomInput, Alert, Button } from 'reactstrap';
import { setFilterAll, setFilterByStudent, setFilterByTeacher, setFilterByState, setFilterByDistrict, setResetFilter } from '../actions/filters';
import { connect } from 'react-redux';
import selectUsers from '../selectors/users';
import {states} from '../Helpers/State';
import TjCarousel from './TjCarousel';
class HomePage extends React.Component
{
    constructor(props) {
        super(props);

        this.state= {
            selectedState:{
            },
            districts: [],
            visible: !props.loginUser.isUserVerified
        }

    };
    onFilterTypeChange = (e) =>{
    const filterType = e.target.value;
    const requiredFilter = e.target.checked;

    if(filterType == 'all'){
        this.props.dispatch(setFilterAll(requiredFilter));
    }else if(filterType == 'student'){
    this.props.dispatch(setFilterByStudent(requiredFilter));
}else if(filterType == 'teacher'){
    this.props.dispatch(setFilterByTeacher(requiredFilter));
}


    };
onStateChange =(event)=>{
    const myState = states.filter((state) => {return state.key === event.target.value});
    this.setState({selectedState: event.target.value,
        districts: myState[0].districts
    });

    this.props.dispatch(setFilterByState(event.target.value));
}
onDistrictChange =(event)=>{
    this.setState({selectedDistrict: event.target.value});

    this.props.dispatch(setFilterByDistrict(event.target.value));
}
onDismiss = () => {
    this.setState({ districts: false });
}

onReset = () => {
    this.setState({selectedState:'',districts: []});
    this.props.dispatch(setResetFilter());
}
    render(){
        return (
            <div>

            <Row className="home-content">
            <Col sm="2" md={{ size: 2, offset: 0 }} className="home-filter-panel bg-dark">
            <div className="filter-criteria-header" > <h5>Filter Criteria</h5></div>

        <FormGroup className="filter-criteria-f-fg" check>
        <Input type="checkbox" id="all" value="all" name="all"   checked={this.props.filters.all} onChange={this.onFilterTypeChange}/>
    <Label for="all" className="label-class" check>All</Label>
        </FormGroup>

        <FormGroup check>
            <Input type="checkbox" id="students" value="student" name="students"   checked={this.props.filters.byStudent} onChange={this.onFilterTypeChange}/>
            <Label for="students" className="label-class" check>Students</Label>
        </FormGroup>
        <FormGroup check>
        <Input type="checkbox" name="teachers" id="teachers" value="teacher" checked={this.props.filters.byTeacher} onChange={this.onFilterTypeChange}/>
            <Label for="teachers" check>Teachers</Label>
        </FormGroup>
    <FormGroup>
    <Label for="stateSelect">Select State</Label>
    <Input type="select" name="stateSelect" id="stateSelect" value={this.state.selectedState} onChange={this.onStateChange}>
<option value="Select State">Select State</option>
    {states.map((item, i) => <option value= {item.key} key={i} >{item.name}</option>)}
</Input>
    </FormGroup>

    <FormGroup>
    <Label for="districtSelect">Select District</Label>
    <Input type="select" id="districtSelect" name="districtSelect" onChange={this.onDistrictChange} value={this.state.selectedDistrict}>
<option value="select">Select District</option>
    {this.state.districts.map((district, i) => <option value={district} key={i}>{district}</option>)}
</Input>
    </FormGroup>
    <Button className="home-reset-btn"color="primary" size="sm" onClick={() => this.onReset()}>Reset</Button>
    <FormGroup>
    </FormGroup>
        </Col>
        <Col sm="10" md={{ size: 10, offset: 0 }}>
<Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
    You are yet to update your profile. Please update your profile to get access to other teacher and students !
    </Alert>
        <CardList/></Col>
        </Row>
        </div>
    );
    }

};

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
        loginUser: state.loginUser
    };
};

export default connect(mapStateToProps)(HomePage);

