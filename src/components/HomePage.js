import React from 'react';
import UserList from './UserList';
import CardItem from './CardItem';
import CardList from './CardList';
import { Container, Row, Col, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import { setFilterAll, setFilterByStudent, setFilterByTeacher, setFilterByState, setFilterByDistrict } from '../actions/filters';
import { connect } from 'react-redux';
import selectUsers from '../selectors/users';
import {states} from '../Helpers/State';

class HomePage extends React.Component
{
    constructor(props) {
        super(props);

        this.state= {
            selectedState:{
            },
            districts: []
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

    render(){
        return (
            <div>
            <Row className="home-content">
            <Col sm="2" md={{ size: 2, offset: 0 }} className="home-filter-panel">
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
    <CustomInput type="select" id="stateSelect" name="stateSelect" onChange={this.onStateChange} value={this.state.selectedDistrict}>
        <option value="Select State">Select State</option>
        {states.map((state, i) => <option value={state.key} key={i}>{state.name}</option>)}
    </CustomInput>
    </FormGroup>

    <FormGroup>
    <Label for="districtSelect">Select District</Label>
    <CustomInput type="select" id="districtSelect" name="districtSelect" onChange={this.onDistrictChange} value={this.state.selectedState}>
        <option value="select">Select</option>
        {this.state.districts.map((district, i) => <option value={district} key={i}>{district}</option>)}
    </CustomInput>
    </FormGroup>

        </Col>
        <Col sm="10" md={{ size: 10, offset: 0 }}>
        Dashboard page content
        <CardList/></Col>
        </Row>
        </div>
    );
    }

};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(HomePage);

