import React from 'react';
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import IPhone from '../images/app-iPhone.png';

const OurGoal = () => (

<section className="section-features our-goal" id="our-goal">
    <Row>
    <Col sm="12" md={{ size: 6, offset: 3 }}><h2>Our Goal</h2>
</Col>
</Row>

<Row>
<Col sm="12" md={{ size: 8, offset: 2 }} className="our-goal-individual-desc">
<p className="long-copy">
        Tuition Jugaard  helps you to find talented students and teachers in a single platform and trying to generats as many as part time or full timejobs possible.
    </p>
</Col>
</Row>

<Row className="our-goal-desc-row">
<Col sm="12" md={{ size: 3, offset: 0 }} className="our-goal-individual-desc">
<i className="ion-ios-infinite-outline icon-big"></i>
    <h4>For Students</h4>
    <p>
        Students will get perfet teacher for any subject in and arround their schoo, collage or locality by reading their perfect reviews.
    </p>
</Col>
<Col sm="12" md={{ size: 3, offset: 0 }} className="our-goal-individual-desc">
<i className="ion-ios-stopwatch-outline icon-big"></i>
    <i className="fa fa-chalkboard-teacher"></i>
    <h4>For Teachers</h4>
    <p>
        Any teacher will get one or more students in their locality. It may be individual or group tuition.
    </p>
</Col>
<Col sm="12" md={{ size: 3, offset: 0 }} className="our-goal-individual-desc">
<i className="ion-ios-nutrition-outline icon-big"></i>
    <h4>For Parents</h4>
    <p>
        We will help parents to get safe teacher for their childrens as they will get perfect teacher by reading all reviews related to the teacher.
    </p>
</Col>
<Col sm="12" md={{ size: 3, offset: 0 }} className="our-goal-individual-desc">
<i className="ion-ios-cart-outline icon-big"></i>
    <h4>For Job Sicker</h4>
    <p>
        Job Sickers will get part time jobs at any moment as per their talent.
    </p>
</Col>
</Row>

</section>
);

export default OurGoal;