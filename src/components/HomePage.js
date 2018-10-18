import React from 'react';
import UserList from './UserList';
import CardItem from './CardItem';
import CardList from './CardList';
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';

const HomePage = (props) =>
{
  return (
    <div>


<Row className="home-content">
<Col xs="6" sm="2" className="home-filter-panel">
<div className="filter-criteria-header" > <h5>Filter Criteria</h5></div>
<FormGroup className="filter-criteria-f-fg" check>
<Input type="checkbox" name="students" id="students"/>
<Label for="students" className="label-class" check>Students</Label>
</FormGroup>
<FormGroup check>
<Input type="checkbox" name="teachers" id="teachers"/>
    <Label for="teachers" check>Teachers</Label>
</FormGroup>
</Col>
<Col sm={{ size: 'auto' }}>
  Dashboard page content
<CardList/></Col>
</Row>
    </div>
  );
};

export default HomePage;
