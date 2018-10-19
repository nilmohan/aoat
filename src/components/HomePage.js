import React from 'react';
import UserList from './UserList';
import CardItem from './CardItem';
import CardList from './CardList';
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import { setFilterAll, setFilterByStudent, setFilterByTeacher, sortByDate, sortByAmount } from '../actions/filters';
import { connect } from 'react-redux';
import selectUsers from '../selectors/users';

class HomePage extends React.Component
{
    constructor(props) {
        super(props);

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

