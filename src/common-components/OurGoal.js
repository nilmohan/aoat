import React from 'react';
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import IPhone from '../images/app-iPhone.png';

const OurGoal = () => (
<section className="section-steps our-goal" id="goal">
    <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}><h2>Our Goal</h2></Col>
    </Row>
<Row>
<Col xs="6">
    <div className="col">
    <img src="resources/img/app-iPhone.png" alt="Omnifood app on iPhone" className="app-screen js--wp-2" />
    </div>
    </Col>
<Col xs="6">
    <div className="works-step clearfix">
    <div>1</div>
    <p>Bring both teachers and students in one platfor to express themselfs. </p>
</div>
<div className="works-step clearfix">
    <div>2</div>
    <p>Generate part time jobs for under graduate or graduate candidates.</p>
</div>
<div className="works-step clearfix">
    <div>3</div>
    <p>Both teachers and studends will get fair information about their students and teachers respectively.</p>
</div>

    </Col>
</Row>

    </section>
);

export default OurGoal;